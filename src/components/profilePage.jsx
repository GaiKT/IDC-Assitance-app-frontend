import { useAuth } from "../contexts/authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const navigate = useNavigate();

  const schema = yup.object({
    UserName: yup.string().required("Username is required"),
    firstName: yup.string().required("Firstname is required"),
    lastName: yup.string().required("Lastname is required"),
  }).required();
  
  const { editProfile , state } = useAuth();

  const { register, handleSubmit , formState: { errors }} = useForm({
    defaultValues : {...state.user},resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    editProfile(data)
  };

  return (
    <>
      <header className="text-4xl">Profile</header>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 p-4 lg:w-1/2">
                Username
                <label className="input input-bordered flex items-center gap-4">
                  <FontAwesomeIcon icon={faUser}/>
                  <input 
                    {...register("UserName")}
                    type="text" 
                    className="grow px-2"
                    placeholder="Username*"
                    disabled
                    />
                </label>
                <p className="text-red-500">{errors.UserName?.message}</p>
                
                Firstname
                <label className="input input-bordered flex items-center gap-2">
                  <input 
                    {...register("firstName")}
                    type="text"
                    className="grow ml-2 px-2" 
                    placeholder="Firstname*"/>
                </label>
                <p className="text-red-500">{errors.firstName?.message}</p>
                
                Lastname
                <label className="input input-bordered flex items-center gap-2">
                  <input 
                    {...register("lastName")}
                    type="text"
                    className="grow ml-2 px-2" 
                    placeholder="Lastname*"/>
                </label>
                <p className="text-red-500">{errors.lastName?.message}</p>
                
                Role
                <label className="flex items-center gap-2 p-2">
                  <select className="select w-full" value={state.user?.level} disabled>
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

export default Profile;
