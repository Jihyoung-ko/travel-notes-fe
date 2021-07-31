import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeleteModal = (props) => {

  const onClose = (e) => {
    e.preventDefault();
    props.onClose();
  }
  
  const onDelete = (e) => {
    e.preventDefault();
    props.onDelete(props.albumId);
      props.onClose();
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

export default DeleteModal;