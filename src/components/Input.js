import React from 'react'
import  './Input.css';

const Input = () => {
  return (
    <form className="input-form" id="info">
      <label htmlFor="organization">Organization</label>
      <input type='text' id="organization" placeholder='Enter organization' />

      <label htmlFor="username">Username</label>
      <input type='text' id="username" placeholder='Enter username' />

      <label htmlFor="email">Email</label>
      <input type='email' id="email" className='email' placeholder='Enter email' />

      <label htmlFor="date">Date</label>
      <input type='date' id="date" />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type='number' id="phoneNumber" placeholder='Enter phone number' />

      <label htmlFor="status">Status</label>
      <select id="status">
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="blocked">Blocked</option>
        <option value="inactive">Inactive</option>
      </select>
      <div className='buttons'>
      <button className='white'>Filter</button>
      <button className='color'>Reset</button>
      </div>
    </form>
  )
}

export default Input
