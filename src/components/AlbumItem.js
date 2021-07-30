import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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


  render() {
    const { title, startDate, endDate, _id } = this.props.album;
    const { showModal } = this.state;
    return (
      <div className='album-container'>
        <div className='album-info-container'>
          <h1 className='album-title'>{title}</h1>
          <p>{startDate?.split('T', 1)} - {endDate?.split('T', 1)}</p>
        </div>
        { showModal && <DeleteModal onClose={this.closeModal} onDelete={this.props.onDeleteAlbum} albumId={_id}  />}
        
        <div className='album-buttons-container'>
          <Link to={`/album/${_id}/edit`}> <button className="album-button" >
            <FontAwesomeIcon size='2x' icon={['far', 'edit']} /> </button>
          </Link>
          <button className="album-button" style={{top:"40px", right:"10px"}} onClick={this.toggleHandler}>
            <FontAwesomeIcon size='2x' icon={['far', 'trash-alt']} />
          </button>
        </div>
      
      </div>
    )
  }
  
}

export default withAuth(AlbumItem);