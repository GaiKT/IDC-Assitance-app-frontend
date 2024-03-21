import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function Editcompanyform(props) {
  const [teams , setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [teamSelect , setTeamSelect] = useState(props.data.team_id)
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
    const setData = {
      companyEng : data.companyEng.toLowerCase(),
      companyThai : data.companyThai,
      team : data.team
    }
    try {
      await Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!',
      });

      setIsLoading(true);
      await axios.put('http://localhost:4000/company/'+ props.data.comp_id,setData)
      navigate('/company')
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
    } catch (error) {
      console.log(error)
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
      console.log(result.data.data)
      setTeams(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTeams()
  },[])


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 w-2/4 max-lg:w-full text-center mt-10">
        <label className="flex justify-between"> Team :
          <select {...register("team", { required: true })} 
          className="bg-gray-100 rounded w-3/5 p-2"
          value={teamSelect}
          onChange={(e)=>setTeamSelect(e.target.value)}
          >
            {
              teams.map((team , index)=>{
                return <option key={index} value={team.team_id}>{team.teamname}</option>
              })
            }
          </select>
        </label>
        <label className="flex justify-between"> Company name (English) :
          <input {...register("companyEng", { required: true, maxLength: 255})} placeholder="Enter your company name" className="bg-gray-100 rounded w-3/5 p-2" defaultValue={props.data.comp_name_eng}/>
        </label>
        <label className="flex justify-between"> Company name (ภาษาไทย) :
          <input {...register("companyThai", { required: true, maxLength: 255})} placeholder="Enter your company name" className="bg-gray-100 rounded w-3/5 p-2" defaultValue={props.data.comp_name_thai}/>
        </label>
        <p className="text-xs text-gray-400">** ชื่อบริษัทภาษาไทย ไม่ต้องมีคำว่า "บริษัท" และไม่ต้องลงท้ายด้วย "จำกัด"</p>

        <div className="w-full flex gap-2 justify-end mt-8">
          <button className="btn btn-success min-w-42 text-white" type="submit">
            {isLoading ? <span className="loading loading-spinner"></span> : 'update Company'}
          </button>
          <a href="/company" className="btn w-20 text-black">
            Cancel
          </a>
        </div>
        
    </form>
  )
}
