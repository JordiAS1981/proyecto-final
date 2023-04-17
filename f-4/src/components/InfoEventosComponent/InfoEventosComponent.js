import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './InfoEventosComponent.scss';
import { getEventoInfo } from '../../store/evento/action';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function InfoEventosComponent() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getEventoInfo(params.id))
  },[])
  
  return (
  <div className="InfoEventosComponent">
    InfoEventosComponent Component
    
  </div>
  )
}

InfoEventosComponent.propTypes = {};

InfoEventosComponent.defaultProps = {};

