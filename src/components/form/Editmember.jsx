import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function EditmembersForm(props) {
  const [member , setMember] = useState(props.data)
  const [company , setCompany] = useState([])
  const [team , setTeam] = useState(props.data.team_id)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({defaultValues : {...member}})

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
    console.log(data)
    try {
      setIsLoading(true)
      await axios.put('http://localhost:4000/aup/'+ member.member_id, data)
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
          <input {...register("first_name", { required: true, maxLength: 255 })} placeholder="Enter your firstname"  className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Lastname :
          <input {...register("last_name", { required: true, maxLength: 255})} placeholder="Enter your lastname" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Card ID :
          <input {...register("card_id", { required: true, maxLength: 255})} placeholder="Enter your cardid" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Date of Sign :
          <input {...register("date_of_sign", { required: true})} type="date" className="bg-gray-100 rounded w-3/5 p-2"/>
        </label>
        <label className="flex justify-between"> Team :
          <select {...register("team_id", { required: false })} 
          onChange={(e)=>{
            setTeam(e.target.value)
          }} 
          className="bg-gray-100 rounded w-3/5 p-2"
          >
            {
              company?.map((team , index)=>{
                return <option key={index} value={team.team_id}>{team.teamname}</option>
              })
            }
          </select>
        </label>
        <label className="flex justify-between"> Company :
        <select {...register("comp_id", { required: false })} 
        className="bg-gray-100 rounded w-3/5 p-2"
        >
            { 
              selectCompany(company)?.map((item, index)=>
                <option key={index} value={item.comp_id}>บริษัท {item.comp_name_thai} จำกัด - {item.comp_name_eng}</option>
              )
            }
          </select>
        </label>
        <label className="flex justify-between"> Address :
          <textarea {...register("address")} placeholder="123 dacrord .." className="bg-gray-100 rounded w-3/5 p-2" />
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