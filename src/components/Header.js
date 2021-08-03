import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {withAuth} from "../providers/AuthProvider";

const Header = (props) => {
  const { buttonType, buttonName, title } = props;
  
  const onSearch = (e) => {
    props.onSearch(e)
  }

  const goBackHandler = () => {
    props.goBack()
  }

  const renderLeftButton = () => {
      if(props.isLoggedIn){
          if(buttonType === "home"){
              return <Link to={'/profile'}><button className="header-btn"><FontAwesomeIcon icon={['far', 'user-circle']} size="lg" /></button></Link>
          }else{
              return <button className="header-btn" onClick={goBackHandler}>{buttonName}</button>
          }
      }
      return null
  }

  const renderRightButton = () => {
   
      if(props.isLoggedIn){
          if(buttonType !== "search"){
              return <Link to={'/search'}><button className="header-btn"  ><FontAwesomeIcon icon="search" size="lg"/></button> </Link>
          }else{
              return (
                <div>
                  <input className="search-input" style={{width:"75%"}} type="search"  placeholder="Search..." onChange={onSearch}/>
                  <input className="search-input" style={{width:"15%"}} type="date" onChange={onSearch} />
                </div>  
              )
              
          }
      }

      return null
  }

  return (
    <div className="header-container flex">
      { renderLeftButton() }
      <h2>{title}</h2>
      { renderRightButton() }
    </div>
  )
}

export default withAuth(Header);