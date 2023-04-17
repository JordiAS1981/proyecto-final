import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LoginComponent.scss";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from '../../store/auth/action'

const LoginComponent = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const {user, error} = useSelector((state)=> state.AuthReducer)

  const dispatch = useDispatch()
  function checkLogin() {
    dispatch(doLogin({email: name, password: password}))
    setName("")
    setPassword("")
  }

  useEffect (()=> {
    if(user.user && user.user.id){
        <Navigate to= '/tickets' replace></Navigate>
        }
  },[user])

  return (
    <div> 
      <form>
        <label>Email:</label>
        <input value={name} onChange={(e)=> setName(e.target.value)}></input>
      </form>
      <form>
        <label>Password</label>
        <input value= {password} onChange={(e)=> setPassword(e.target.value)}></input>
      </form>
      <button onClick= {checkLogin} type="submit">Login</button>
      {error.message && <p>El Login no es correcto</p>}
    </div>
  )
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
