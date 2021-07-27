import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import DeleteModal from '../components/DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AlbumItem extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleHandler = () => {
    console.log('show modal')
    this.setState({
      showModal: !this.state.showModal
    })
  }

  deleteAlbumHandler = async () => {
    const { id } = this.props.match.params;
    await apiClient.deleteAlbum(id);
    this.props.history.push('/home');

  }

  render() {
    const { title, startDate, endDate, photo, _id } = this.props.album;
    const { showModal } = this.state;
    return (
      <div style={{backgroundImage:`${photo}`}}>
        <h1>{title}</h1>

        { showModal && <DeleteModal onClose={this.toggleHandler} onDelete={this.deleteAlbumHandler} />}
        
        <Link to={`/album/${_id}/edit`}> <button className="edit-btn" style={{top:"10px", right:"10px"}}><FontAwesomeIcon icon={['far', 'edit']} /> </button> </Link>
        <button className="edit-btn" style={{top:"40px", right:"10px"}} onClick={this.toggleHandler}> <FontAwesomeIcon icon={['far', 'trash-alt']} /></button>
        
        <p>{startDate.split('T', 1)} - {endDate.split('T', 1)}</p>
      
      </div>
    )
  }
  
}

export default AlbumItem;