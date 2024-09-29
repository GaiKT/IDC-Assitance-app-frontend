import { useState } from "react";
import { useAuth } from "../../contexts/authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock , faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import YupPassword from 'yup-password';
YupPassword(yup);

function ResetPage() {
  const [hide , setHide] = useState(true)

  const schema = yup.object({
    old_password: yup.string().required("Old Password is required"),
    password: yup.string().required("Password is required")
      .min(
        8,'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
      .minLowercase(1, 'password must contain at least 1 lower case letter')
      .minUppercase(1, 'password must contain at least 1 upper case letter')
      .minNumbers(1, 'password must contain at least 1 number')
      .minSymbols(1, 'password must contain at least 1 special character'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  }).required()
  
  const { resetPass } = useAuth();

  const { register, handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    delete data.confirmPassword
    resetPass(data);
  };

  return (
    <>
      <header className="text-4xl">Reset Password</header>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 p-4 lg:w-1/2">
                Old Password
                <label className="input input-bordered flex items-center gap-4">
                  <FontAwesomeIcon icon={faLock}/>
                  <input 
                    {...register("old_password")}
                    type={hide ? "password" : "text"}
                    className="grow px-2"
                    placeholder="Old password*"/>
                <FontAwesomeIcon icon={hide ? faEye : faEyeSlash} onClick={()=>{setHide(!hide)}} className="cursor-pointer"/>
                </label>
                <p className="text-red-500">{errors.old_password?.message}</p>
                
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
            </div>
          <div className="flex w-full justify-between items-center gap-3">
            <Link to={'/users/profile'}>
              <button>Back</button>
            </Link>
            <button type="submit" className="btn btn-success text-white">Submit</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default ResetPage;
