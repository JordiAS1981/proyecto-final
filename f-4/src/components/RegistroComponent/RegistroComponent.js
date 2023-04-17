import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RegistroComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { doRegister } from '../../store/auth/action';
const RegistroComponent = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {register, errorRegister} = useSelector((state)=> state.AuthReducer)
  const dispatch = useDispatch()

  function checkRegister() {
    dispatch(doRegister({name: name, email: email, password: password}))
    setName("")
    setEmail("")
    setPassword("")
  }
  return (
  <div >
    RegistroComponent Component
    <form>
        <label>Nombre</label>
        <input  value={name} onChange={(e) => setName(e.target.value)}></input><br/>

        <label>Email</label>
        <input  value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label>Constraseña</label>
        <input  value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>

      </form>
      <button onClick={checkRegister}>Registrarme</button>
      {errorRegister.messageRegister && <p>Hay un error en el registro</p> }
  </div>
  )
};

RegistroComponent.propTypes = {};

RegistroComponent.defaultProps = {};

export default RegistroComponent;
