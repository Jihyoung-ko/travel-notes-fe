import React from "react";
import imgNotFound from '../img/404.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NotFound = (props) => {
    return <div className='not-found-container'>
        
        <div className='not-found-back-img' style={{margin:"50px 0"}}><img src={imgNotFound} alt="Not Found" /> </div>
        <div className='not-found-back-container' style={{textAlign:"center"}}>
            <button className='not-found-back-button' onClick={props.history.goBack}> <FontAwesomeIcon icon="chevron-left" size="lg"/>  Go Back</button>
        </div>
    </div>
}

export default NotFound