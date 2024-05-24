import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function EditmembersForm(props) {
  const [company , setCompany] = useState([])
  const [team , setTeam] = useState(props.data.team_id)
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
      setIsLoading(true)
      let result = await axios.put('http://localhost:4000/aup/'+ props.data.member_id, data)
      navigate('/members')
      setIsLoading(false)
      Toast.fire({
        icon: "success",
        title: "update member successfully!"
      });
    } catch (error) {
      setIsLoading(false)
      Toast.fire({
        icon: "error",
        title: error.response.data.message
      });
    }
  }

  const getCompany = async () => {
    try {
      const result = await axios.get('http://localhost:4000/aup/company')
      setCompany(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const selectCompany = (arr) => {
    let compdata = arr.filter((item) => item.team_id === Number(team));
    console.log(compdata[0]?.company_info)
    return compdata[0]?.company_info;
  };
  
  useEffect(() => {
    getCompany();
  }, []);

  if(company){
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 w-3/4 text-center">
        <label className="flex justify-between"> Firstname :
          <input {...register("firstName", { required: true, maxLength: 255 })} defaultValue={props.data.first_name} placeholder="Enter your firstname"  className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Lastname :
          <input {...register("lastName", { required: true, maxLength: 255})} defaultValue={props.data.last_name} placeholder="Enter your lastname" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Card ID :
          <input {...register("cardid", { required: true, maxLength: 255})} defaultValue={props.data.card_id} placeholder="Enter your cardid" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Date of Sign :
          <input {...register("dateOfSign", { required: true})} defaultValue={props.data.date_of_sign.slice(0, 10)} type="date" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Team :
          <select {...register("team", { required: false })} 
          onChange={(e)=>{
            setTeam(e.target.value)
          }} 
          className="bg-gray-100 rounded w-3/5 p-2"
          value={team}
          >
            <option value="">Select...</option>
            {
              company.map((team , index)=>{
                return <option key={index} value={team.team_id}>{team.teamname}</option>
              })
            }
          </select>
        </label>
        <label className="flex justify-between"> Company :
        <select {...register("company", { required: false })} 
        className="bg-gray-100 rounded w-3/5 p-2"
        >
            <option value="">Select...</option>
            { 
              selectCompany(company)?.map((item, index)=>
                item.comp_id === props.data.comp_id ?
                  <option key={index} value={item.comp_id} selected >บริษัท {item.comp_name_thai} จำกัด - {item.comp_name_eng} </option>
                : <option key={index} value={item.comp_id}>บริษัท {item.comp_name_thai} จำกัด - {item.comp_name_eng}</option>
              )
            }
          </select>
        </label>
        <label className="flex justify-between"> Address :
          <textarea {...register("address")} placeholder="123 dacrord .." className="bg-gray-100 rounded w-3/5 p-2" defaultValue={props.data.address} />
        </label>
        <div className="w-full flex gap-2 justify-end">
          <button type="submit" className="btn btn-success w-20 text-white">
          {isLoading ? <span className="loading loading-spinner"></span> : 'Submit'}
          </button>
          <a href="/members" className="btn w-20 text-black">
            Cancel
          </a>
        </div>
      </form>
    )
  }
}

export default EditmembersForm