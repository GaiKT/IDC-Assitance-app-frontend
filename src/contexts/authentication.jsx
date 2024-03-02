import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: null,
    error: null,
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

  console.log(state)

  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:4000/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken })
      Swal.fire({
        title: 'success!',
        text: 'Login successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

  };

  const register = async (data) => {
    await axios.post("http://localhost:4095/auth/register", data)
    navigate("/auth/login");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };