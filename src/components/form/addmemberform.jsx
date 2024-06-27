import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function AddmembersForm() {
  const [company , setCompany] = useState([])
  const [team , setTeam] = useState([])
  const [teamSelect , setTeamSelect] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      let result = await axios.post('http://localhost:4000/aup',data)
      navigate('/members')
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: result.data.message
      });
    } catch (error) {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: error.response.data.message
      });
    }
  }

  const getTeams = async () => {
    try {
      const result = await axios.get('http://localhost:4000/aup/company')
      setTeam(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const selectCompany = () => {
    team.map((item)=>item.team_id === Number(teamSelect) ? setCompany(item.companies) : [])
  }

  useEffect(()=>{
    if(teamSelect) {
      selectCompany()
    }
  },[teamSelect])

  useEffect(()=>{
    getTeams()
  },[])


    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 md:w-3/4 text-center justify-center">
        <label className="flex justify-between items-center"> ชื่อจริง
          <input {...register("first_name", { required: true, maxLength: 255})} placeholder="Enter your firstname"  className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between items-center"> นามสกุล
          <input {...register("last_name", { required: true, maxLength: 255})} placeholder="Enter your lastname" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between items-center"> เลขบัตรประชาชน
          <input {...register("card_id", { required: true, maxLength: 255})} placeholder="Enter your cardid" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between items-center"> วันที่เข้าใช้บริการ
          <input {...register("date_of_sign", { required: true})} type="date" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between items-center"> ประเภททีม
          <select {...register("team_id", { required: true })} 
          onChange={(e)=>{
            setTeamSelect(e.target.value)
          }} 
          className="bg-gray-100 rounded w-3/5 p-2">
            <option value="">Select...</option>
            {
              team?.map((team , index)=>{
                return <option key={index} value={team.team_id}>{team.team_name}</option>
              })
            }
          </select>
        </label>
        <label className="flex justify-between items-center"> บริษัท
        <select {...register("comp_id", { required: true })} className="bg-gray-100 rounded w-3/5 p-2">
            <option value="">Select...</option>
            { 
              company?.map((item, index)=>{
                return (
                  <option key={index} value={item?.comp_id}>บริษัท {item?.comp_name_thai} จำกัด - {item?.comp_name_eng}</option>
                );
              })
            }
        </select>
        </label>
        <label className="flex justify-between items-center"> ที่อยู่
          <textarea {...register("address")} placeholder="123 dacrord .." className="bg-gray-100 rounded w-3/5 p-2" />
        </label>
        <div className="w-full flex gap-2 justify-end">
          <button type="submit" className="btn btn-success w-20 text-white" disabled={isLoading}>
            {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
          </button>
          <a href="/members" className="btn w-20 text-black">
            Cancel
          </a>
        </div>
      </form>
    )
  
}

export default AddmembersForm