import React from 'react';
import NavbarDown from '../components/NavbarDown';

const Article = () => {
  return (
    <div>
      <h1>Album name</h1>
      <div>Pic</div>
      <div>Note</div>
      <NavbarDown middlebutton={'/edit'} middlebuttonName={"EDIT"}/>
    </div>
  )
}

export default Article;