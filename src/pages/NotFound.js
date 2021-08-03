import React from "react";

const NotFound = (props) => {
    return <div className='not-found-container'>
        <div className='not-found-back-container'>
            <button className='not-found-back-button' onClick={props.history.goBack}>Go Back</button>
        </div>
        <div className='not-found-back-label'>404 - Not Found</div>
    </div>
}

export default NotFound