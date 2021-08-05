import React from 'react';
import loading from '../img/loading.gif'

const Loading = () => {
  return <div className="flex"><img style={{borderRadius:"50%", marginTop:"20vh"}} src={loading} alt="loading..." /> </div>
}
export default Loading;