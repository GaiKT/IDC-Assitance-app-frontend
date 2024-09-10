import { useState } from "react";
import { useAuth } from "../../contexts/authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faLock , faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function RegisterPage() {
  const [hide , setHide] = useState(true)

  const schema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    first_name: yup.string().required("Firstname is required"),
    last_name: yup.string().required("Lastname is required"),
    level: yup.string().required("Role is required"),
  }).required()
  
  const { registerAuth } = useAuth();

  const { register, handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    try {
      delete data.confirmPassword
      registerAuth(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <header className="text-4xl">Register</header>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 p-4 lg:w-1/2">
                Username
                <label className="input input-bordered flex items-center gap-4">
                  <FontAwesomeIcon icon={faUser}/>
                  <input 
                    {...register("username")}
                    type="text" 
                    className="grow px-2"
                    placeholder="Username*"/>
                </label>
                <p className="text-red-500">{errors.username?.message}</p>
                
                Password
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faLock}/>
                  <input 
                    {...register("password")}
                    type={hide ? "password" : "text"} 
                    className="grow ml-2 px-2" 
                    placeholder="Password*"/>
                  <FontAwesomeIcon icon={hide ? faEye : faEyeSlash} onClick={()=>{setHide(!hide)}} className="cursor-pointer"/>
                </label>
                <p className="text-red-500">{errors.password?.message}</p>
                
                Confirm Password
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faLock}/>
                  <input 
                    {...register("confirmPassword")}
                    type={hide ? "password" : "text"} 
                    className="grow ml-2 px-2" 
                    placeholder="Confirm Password*"/>
                  <FontAwesomeIcon icon={hide ? faEye : faEyeSlash} onClick={()=>{setHide(!hide)}} className="cursor-pointer"/>
                </label>
                <p className="text-red-500">{errors.confirmPassword?.message}</p>
                
                Firstname
                <label className="input input-bordered flex items-center gap-2">
                  <input 
                    {...register("first_name")}
                    type="text"
                    className="grow ml-2 px-2" 
                    placeholder="Firstname*"/>
                </label>
                <p className="text-red-500">{errors.first_name?.message}</p>
                
                Lastname
                <label className="input input-bordered flex items-center gap-2">
                  <input 
                    {...register("last_name")}
                    type="text"
                    className="grow ml-2 px-2" 
                    placeholder="Lastname*"/>
                </label>
                <p className="text-red-500">{errors.last_name?.message}</p>
                
                Role
                <label className="flex items-center gap-2 p-2">
                  <select className="select w-full" {...register("level")}>
                    <option disabled value="">Select your role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </label>
                <p className="text-red-500">{errors.level?.message}</p>
            </div>
          <div className="flex w-full justify-between items-center gap-3">
            <Link to={'/admin'}>
              <button>Back</button>
            </Link>
            <button type="submit" className="btn btn-success text-white">Submit</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
