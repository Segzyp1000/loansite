
import React from 'react';
import Header from './components/Header';
import User from './components/User';
import List from './components/List';
import Details from './components/Details';
import './MainPage.css';


function MainPage() {
  return (
    <div className="main-page">

      <div className='headere'>
      <Header />
      </div>

      <div className="content-container">
        <div className='sidebar'>
        <List className='List' />
        </div>
        <div className = 'mainbar'>
        <User className='User'/>
        
          <Details className='details' />
        
        </div> 
      </div>
      
    </div>
  );
}

export default MainPage;
