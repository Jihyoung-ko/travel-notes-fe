import React from 'react';

const DeletModal = (props) => {

  const onClose = () => {
    props.onClose();
  }
  
  const onDelete = () => {
    props.onDelete();
  }

  return(
    <div>
      <p>Are you sure you want to delete?</p>
      <button onClick={onClose}>X</button>
      <button onClick={onDelete}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  )
}

export default DeletModal;