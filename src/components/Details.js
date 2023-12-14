import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Select from './Select';
import Button from './Button';
import Input from './Input';
import { MdMoreVert } from "react-icons/md"
import { MdOutlineExpandMore } from "react-icons/md";
import './Details.css';

function Details() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiLimit, setApiLimit] = useState(10);
  const [showForm, setShowForm] = useState(false)
 

  useEffect(() => {
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?limit=${apiLimit}&page=${currentPage}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [currentPage, apiLimit]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getStatus = () => {
    const statusOptions = ['Blocked', 'Inactive', 'Active', 'Pending'];
    const randomIndex = Math.floor(Math.random() * statusOptions.length);
    return statusOptions[randomIndex];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'rgba(0, 255, 0, 0.2)'; 
      case 'Pending':
        return 'rgba(255, 255, 0, 0.2)'; 
      case 'Blocked':
        return 'rgba(255, 0, 0, 0.2)'; 
      case 'Inactive':
        return 'transparent'; 
      default:
        return 'transparent'; 
    }
  };

  const handleSubmit = () => {
    setShowForm(!showForm)
  }
 
  
  return (
    <div className="table-container">
     <div className="details-container">
    {showForm && <Input className="input-container" />}
    </div>  
      <Table className='table'>
          <th onClick={handleSubmit}>Organization<MdOutlineExpandMore/></th>
          <th onClick={handleSubmit} className='remove2'>Username<MdOutlineExpandMore/></th>
          <th onClick={handleSubmit}className='remove'>Email<MdOutlineExpandMore/></th>
          <th onClick={handleSubmit}>Phone Number<MdOutlineExpandMore/></th>
          <th onClick={handleSubmit}>Date Joined<MdOutlineExpandMore/></th>
          <th onClick={handleSubmit} className='remove-s'>Status<MdOutlineExpandMore/></th>
        <tbody className='table-insert'>
          {userData.map(user => (
            <tr key={user.id}>
               <td className='remove-se'>{user.orgName}</td>
              <td>{user.userName}</td>
              <td  className='remove3'>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.lastActiveDate}</td>
              <td>{<span className="status-button" style={{ backgroundColor: getStatusColor(getStatus()) }}>
                  {getStatus()}  <MdMoreVert /></span>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='footer'>
        <Select setApiLimit={setApiLimit} setCurrentPage={setCurrentPage} />
        <Button
          currentPage={currentPage}
          handlePrevious={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
          handleNext={() => handlePageChange(currentPage + 1)}
        />
      </div>
    </div>
  );
}

export default Details;
