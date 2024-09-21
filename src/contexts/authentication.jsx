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
    }else{
      setState({ ...state, user: null });
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

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, registerAuth, isAuthenticated, apiUrl }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };