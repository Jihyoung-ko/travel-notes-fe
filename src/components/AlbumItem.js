import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ album }) => {
  const { title, startDate, endDate, photo, _id } = album;
  return (
    <div style={{backgroundImage:`${photo}`}}>
      <h1>{title}</h1>
      <Link to={`/album/${_id}/edit`}> <button className="album-edit-btn">Edit</button> </Link>
      <p>{startDate.split('T', 1)} - {endDate.split('T', 1)}</p>
    
    </div>
  )
}

export default AlbumItem;