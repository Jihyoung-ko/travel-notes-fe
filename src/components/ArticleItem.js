import React from 'react';

const ArticleItem = ({ article }) => {
  const { id, photo, note, location, time, people } = article;
  return (
    <div key={id}>
      <div>{photo}</div>
      <div>{note}</div>
      <div>{location}, { time && time.split('T', 1) }, {people}</div>
    </div>
  )
}

export default ArticleItem;