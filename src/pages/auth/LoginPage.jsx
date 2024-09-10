import { useState } from "react";
import { useAuth } from "../../contexts/authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faLock , faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function LoginPage() {
  const [remember , setRemember] = useState(false)
  const [hide , setHide] = useState(true)
  
  
  const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required()
  
  const { register, handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })
  
  const { login } = useAuth();
  
  const onSubmit = (data) => {
    try {
      login(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="lg:w-1/3 shadow-lg">
        <div className="form-control bg-white rounded-b-lg">
            <div className="h-40 flex justify-center items-center bg-blue-500 rounded-t-lg">
                <h1 className="text-white font-semibold text-4xl">IDC Assist</h1>
            </div>
            <label className="my-2 text-2xl font-semibold px-4">Login</label>
            <div className="flex flex-col gap-4 p-4">
              <label className="input input-bordered flex items-center gap-4">
                <FontAwesomeIcon icon={faUser}/>
                <input 
                  {...register("username" , {required : true})}
                  type="text" 
                  className="grow px-2"
                  placeholder="Username*"/>
              </label>
              <p className="text-red-500">{errors.username?.message}</p>
              <label className="input input-bordered flex items-center gap-2">
                <FontAwesomeIcon icon={faLock}/>
                <input 
                  {...register("password" , {required : true})}
                  type={hide ? "password" : "text"} 
                  className="grow ml-2 px-2" 
                  placeholder="Password*"/>
                <FontAwesomeIcon icon={hide ? faEye : faEyeSlash} onClick={()=>{setHide(!hide)}} className="cursor-pointer"/>
              </label>
              <p className="text-red-500">{errors.password?.message}</p>
              <div className="flex justify-end">
                <button type="submit" className="btn btn-success text-white w-full">Login</button>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" onChange={(e)=>setRemember(e.target.value)}/>
                  Remember me
                </span>
                <a href="#" className="text-blue-500">
                  ลืมรหัสผ่าน ?
                </a>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;