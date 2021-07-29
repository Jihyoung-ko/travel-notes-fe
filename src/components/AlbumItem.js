import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import DeleteModal from '../components/DeleteModal';
import { withAuth } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AlbumItem extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  toggleHandler = (e) => {
    e.preventDefault();
    this.openModal();
  }

  deleteAlbumHandler = async (id) => {
    // const { id } = this.props.match.params;
    
    await apiClient.deleteAlbum(id);
    this.props.history.push('/home');

  }

  render() {
    const { title, startDate, endDate, _id } = this.props.album;
    const { showModal } = this.state;
    return (
      <>
        <h1>{title}</h1>

        { showModal && <DeleteModal onClose={this.closeModal} onDelete={this.deleteAlbumHandler(_id)} />}
        
        <Link to={`/album/${_id}/edit`}> <button className="edit-btn" style={{top:"10px", right:"10px"}}><FontAwesomeIcon icon={['far', 'edit']} /> </button> </Link>
        <button className="edit-btn" style={{top:"40px", right:"10px"}} onClick={this.toggleHandler}> <FontAwesomeIcon icon={['far', 'trash-alt']} /></button>
        
        <p>{startDate?.split('T', 1)} - {endDate?.split('T', 1)}</p>
      
      </>
    )
  }
  
}

export default withAuth(AlbumItem);