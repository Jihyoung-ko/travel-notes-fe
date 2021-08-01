import React from 'react';

const ArticleItem = ({ article }) => {
  const { photo, note, location, time, people } = article;
  return (
    <div className="article-item-container flex">
      { photo && <div className="article-item-photo"><img src={photo} alt="photo" /> </div> }
      <div className="article-item-text flex">
        <p>{note}</p>
        <p style={{fontSize:"0.8em", marginTop:"10px", color:"grey"}}>{location}  { time && time.split('T', 1) }  {people}</p>
      </div>
      
    </div>
  )
}

export default ArticleItem;