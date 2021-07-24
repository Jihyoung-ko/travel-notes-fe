import React from 'react';

const ArticleItem = ({ article }) => {
  const { photo, note, location, time, people } = article;
  return (
    <div className="article-item-container flex">
      { photo && <div className="article-item-photo">{photo}</div> }
      <div style={{display:"inline-block"}} className="article-item-text">
        <p>{note}</p>
        <p style={{fontSize:"0.8em", marginTop:"10px"}}>{location}  { time && time.split('T', 1) }  {people}</p>
      </div>
      
    </div>
  )
}

export default ArticleItem;