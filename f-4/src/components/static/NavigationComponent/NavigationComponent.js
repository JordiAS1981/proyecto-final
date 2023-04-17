import React from 'react';
import PropTypes from 'prop-types';
import './NavigationComponent.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../../store/auth/action';

const NavigationComponent = () => {
  const {user} = useSelector((state)=> state.AuthReducer)
  const dispatch = useDispatch
  
  function cerrarSession(){
    dispatch(doLogout())
  }
  return (
    <div className='navbar'>
      <ul className= 'ul-navbar'>
      <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IWDI7cicOBSHCblvU1KijJ2cm3fuF36mZw&usqp=CAU' className= 'img-navbar'></img>
        <li className= 'li-navbar-home'>
          <Link to= '/'><h1 id= 'navbar-elements'>Home</h1></Link>
        </li>
        <li className= 'li-navbar'>
          <Link to= '/club'><h1 id= 'navbar-elements'>Club</h1></Link>
        </li>
        {user && user.id? "" :
        <li className= 'li-navbar'>
          <Link to= '/login'><h1 id= 'navbar-elements'>Login</h1></Link>
        </li>
        }
        {user && user.id?
        <li className= 'li-navbar'>
          <Link to= '/tickets'><h1 id= 'navbar-elements'>Tickets</h1></Link>
        </li>
        : ""}
        {user.user && user.user.id?
        <li className='li-navbar'>
          <Link onClick={cerrarSession}>Logout</Link>
        </li>
        : ""}
        <li className= 'li-navbar'>
          <Link to= '/location'><h1 id= 'navbar-elements'>Location</h1></Link>
        </li>
      </ul>
    </div>
  );
}

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
