import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'

const AuthContext = React.createContext();
const apiUrl = import.meta.env.VITE_API_URL;


function AuthProvider(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    user: null,
  });

  useEffect(()=>{
    if(localStorage.getItem("token")){
      let token = window.localStorage.getItem("token")
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken })
    }
  },[])

  const login = async (data) => {
    try {
      const result = await axios.post(`${apiUrl}/auth/login`, data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken })
      navigate("/")
      Swal.fire({
        title: 'success!',
        text: "Login successfully!",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

  };

  const registerAuth = async (data) => {
    try {
      await axios.post(`${apiUrl}/auth/register`, data); 
      Swal.fire({
        title: 'success!',
        text: "register successfully!",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  };

  const editProfile = async (data) => {

    const editProfileData = {
      first_name : data.firstName,
      last_name : data.lastName
    }

    try {
      await axios.put(`${apiUrl}/auth/edit/` + state.user.id, editProfileData); 
      Swal.fire({
        title: 'success!',
        text: "update profile successfully!",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  };

  const resetPass = async (data) => {

    const editProfileData = {
      old_password : data.old_password,
      password : data.password
    }

    try {
      await axios.put(`${apiUrl}/auth/resetPassword/` + state.user.id, editProfileData); 
        Swal.fire({
          title: 'success!',
          text: "Update Password successfully!",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      logout()
    } catch (error) {
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, registerAuth, editProfile , resetPass , isAuthenticated, apiUrl }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };