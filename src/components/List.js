import ListGroup from 'react-bootstrap/ListGroup';
import { FaBriefcase, FaHandshake, FaPiggyBank, FaHandHoldingUsd, FaTablet, FaServicestack, FaScroll, FaSlidersH, FaCoins } from "react-icons/fa";
import { RiExpandUpDownFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUserCheck, FaLandmark, FaUserGear, FaRectangleList  } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";
import './List.css';

function List() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <div className='container'>
    <ListGroup className='ListG'>
      <ListGroup.Item href="#link1">
      <h6><b><FaBriefcase />  Switch Organization <RiExpandUpDownFill /></b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <h6><b><IoMdHome /> Dashboard</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <h6><b>CUSTOMERS</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><ImUsers /> Users</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><PiUsersThreeFill /> Guarantors</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><RiMoneyDollarBoxFill /> Loans</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><FaHandshake /> Decision Models</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><FaPiggyBank /> Savings</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><FaHandHoldingUsd /> Loan Request</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <p><FaUserCheck /> Whitelist</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <h6><b>BUSINESS</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaHandHoldingUsd /> Loan Products</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaBriefcase /> Organization</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaLandmark /> Fees & Charges</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaTablet /> Transactions</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaServicestack /> Services</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaUserGear/> Accounts</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaScroll /> Settlements</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><IoBarChart /> Reports</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <h6><b>SETTINGS</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaSlidersH /> Prefrences</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p>< FaCoins /> Fees & Pricing</p>
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
      <p><FaRectangleList /> Audit Logs</p>
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default List;