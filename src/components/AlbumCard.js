import React from 'react';

const AlbumCard = ({ album }) => {
  const { title, startDate, endDate } = album;
  return (
    <div>
      <h1>{title}</h1>
      <p>{startDate} - {endDate}</p>
    
    </div>
  )
}

export default AlbumCard;