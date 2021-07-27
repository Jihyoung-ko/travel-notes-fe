import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeletModal = (props) => {

  const onClose = () => {
    props.onClose();
  }
  
  const onDelete = () => {
    props.onDelete();
  }

  return(
    <div className="delete-modal-container">
      <p style={{marginBottom:"15px"}}>Are you sure you want to delete?</p>
      <button className="close-btn" onClick={onClose}><FontAwesomeIcon icon="times" /></button>
      <button className="modal-btn" onClick={onDelete}>Yes</button>
      <button className="modal-btn" onClick={onClose}>No</button>
    </div>
  )
}

export default DeletModal;