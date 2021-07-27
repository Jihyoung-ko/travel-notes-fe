import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AlbumItem = ({ album }) => {
  const { title, startDate, endDate, photo, _id } = album;
  return (
    <div style={{backgroundImage:`${photo}`}}>
      <h1>{title}</h1>
      <Link to={`/album/${_id}/edit`}> <button className="edit-btn" style={{top:"10px", right:"10px"}}><FontAwesomeIcon icon={['far', 'edit']} /> </button> </Link>
      <button className="edit-btn" style={{top:"40px", right:"10px"}} > <FontAwesomeIcon icon={['far', 'trash-alt']} /></button>
      <p>{startDate.split('T', 1)} - {endDate.split('T', 1)}</p>
    
    </div>
  )
}

export default AlbumItem;