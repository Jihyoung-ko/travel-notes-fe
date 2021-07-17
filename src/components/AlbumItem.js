import React from 'react';

const AlbumItem = ({ album }) => {
  const { title, startDate, endDate, photo } = album;
  return (
    <div style={{backgroundImage:`${photo}`}}>
      <h1>{title}</h1>
      <p>{startDate} - {endDate}</p>
    
    </div>
  )
}

export default AlbumItem;