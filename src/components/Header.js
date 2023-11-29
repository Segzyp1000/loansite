import React from 'react'
import logo from '../Logo.svg';
import './Header.css';
import MyImage from '../images/MyImage.jpg'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MdExpandMore } from "react-icons/md";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

  return (
    <div className="App">
      <header className="header">
        <div className="left">
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="search for users"
          />
          <button>
            <SearchIcon />
          </button>  
        </div>
        <div className='doc'>
          <p>DOCS</p>
          <NotificationsIcon className="notification-icon" />
        </div>
        <div className="icons">
          <img src={MyImage} className= "contact-icon" alt="contact" /> 
          <p className="info">Segun Olowo <MdExpandMore /></p>  
        </div>
        
      </header>
    </div>
  )
}

export default Header
