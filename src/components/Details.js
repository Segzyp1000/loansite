import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Select from './Select';
import Button from './Button';
import Input from './Input';
import { MdMoreVert } from 'react-icons/md';
import { MdOutlineExpandMore } from 'react-icons/md';
import './Details.css';



function Details() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiLimit, setApiLimit] = useState(10);
  const [showForm, setShowForm] = useState(false);
 
  useEffect(() => {
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?limit=${apiLimit}&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [currentPage, apiLimit]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Pending':
        return 'yellow';
      case 'Inactive':
        return 'gray';
      case 'Blocked':
        return 'red';
      default:
        return 'transparent';
    }
  };

  const getStatus = (index) => {
    const statusOptions = ['Active', 'Pending', 'Inactive', 'Blocked'];
    return statusOptions[index % statusOptions.length];
  };


  const handleSubmit = () => {
    setShowForm(!showForm);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
    
  };

  return (
    
    <div className="table-container">
      <div className="details-container">{showForm && <Input className="input-container" />}</div>
      <Table className="table">
        <th onClick={handleSubmit}>
          Organization<MdOutlineExpandMore />
        </th>
        <th onClick={handleSubmit}>
          Username<MdOutlineExpandMore />
        </th>
        <th onClick={handleSubmit} className="remove">
          Email<MdOutlineExpandMore />
        </th>
        <th onClick={handleSubmit}>
          Phone Number<MdOutlineExpandMore />
        </th>
        <th onClick={handleSubmit}>Date Joined<MdOutlineExpandMore /></th>
        <th onClick={handleSubmit}>Status<MdOutlineExpandMore /></th>
        <th className='status-options'></th>
        <tbody className="table-insert">
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td className="remove">{user.email}</td>
              <td className="phone">{user.phoneNumber}</td>
              <td>{formatDate(user.lastActiveDate)} </td>
              <td>
              <span className="status-button" style={{ backgroundColor: getStatusColor(getStatus(index)) }}>
                {getStatus(index)}
              </span>
            </td>
            
              <td className='status-options'>
                <MdMoreVert  />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        <div className='footer'>
          <>
        <Select setApiLimit={setApiLimit} setCurrentPage={setCurrentPage} />
        </>
        <>
        <Button
          currentPage={currentPage}
          handlePrevious={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
          handleNext={() => handlePageChange(currentPage + 1)}
        />
        </>
        </div>
  
    </div>
  );
}

export default Details;
