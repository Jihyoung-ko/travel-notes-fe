import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ album }) => {
  const { title, startDate, endDate, photo, _id } = album;
  return (
    <div style={{backgroundImage:`${photo}`}}>
      <h1>{title}</h1>
      <Link to={`/album/${_id}/edit`}> <button>Edit</button> </Link>
      <p>{startDate} - {endDate}</p>
    
    </div>
  )
}

export default AlbumItem;