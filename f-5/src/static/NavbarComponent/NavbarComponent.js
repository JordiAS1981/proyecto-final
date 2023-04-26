import React from 'react';
import PropTypes from 'prop-types';
import styles from '../NavbarComponent/NavbarComponent.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { doLogout } from '../../store/auth/actions';

const NavBarComponent = () => {
  const {user} = useSelector((state)=> state.AuthReducer)
  const dispatch = useDispatch

  function cerrarSesion() {
    dispatch(doLogout())
  }

  return(
    <div className={styles.NavBarComponent}> 
      <nav>
        <Link className={styles.NavLink} to='/'>HOME</Link>
        <Link className={styles.NavLink} to='/club'>CLUB </Link>
        <Link className={styles.NavLink} to='/eventos'>EVENTOS</Link>
        <Link className={styles.NavLink} to='/private'>LOGIN</Link>
        {user.user && user.user.id? <Link onClick ={cerrarSesion} className={styles.NavLink}>LOGOUT</Link> : ""} 
        <Link className={styles.NavLink} to='/contacto'>CONTACTO </Link>                    
        {user.user && user.user.id? "" : <Link className={styles.NavLink} to='/login'></Link>}          
        {user.user && user.user.id? <Link className={styles.NavLink} to='/private'></Link> : ""} 
      </nav>
  </div>
  );
}

NavBarComponent.propTypes = {};

NavBarComponent.defaultProps = {};

export default NavBarComponent;
