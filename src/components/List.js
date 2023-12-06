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

  return (
    <div className='container'>
    <ListGroup className='ListG'>
      <ListGroup.Item href="#link0">
      <h6><b><FaBriefcase />  Switch Organization <RiExpandUpDownFill /></b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link1">
      <h6><b><IoMdHome /> Dashboard</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
      <h6><b>CUSTOMERS</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
      <p><ImUsers /> Users</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link4">
      <p><PiUsersThreeFill /> Guarantors</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link5">
      <p><RiMoneyDollarBoxFill /> Loans</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link6">
      <p><FaHandshake /> Decision Models</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link7">
      <p><FaPiggyBank /> Savings</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link8">
      <p><FaHandHoldingUsd /> Loan Request</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link9">
      <p><FaUserCheck /> Whitelist</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link10">
      <h6><b>BUSINESS</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link11">
      <p><FaHandHoldingUsd /> Loan Products</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link12">
      <p><FaBriefcase /> Organization</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link13">
      <p><FaLandmark /> Fees & Charges</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link14">
      <p><FaTablet /> Transactions</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link15">
      <p><FaServicestack /> Services</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link16">
      <p><FaUserGear/> Accounts</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link17">
      <p><FaScroll /> Settlements</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link`18">
      <p><IoBarChart /> Reports</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link19">
      <h6><b>SETTINGS</b></h6>
      </ListGroup.Item>
      <ListGroup.Item action href="#link20">
      <p><FaSlidersH /> Prefrences</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link21">
      <p>< FaCoins /> Fees & Pricing</p>
      </ListGroup.Item>
      <ListGroup.Item action href="#link21">
      <p><FaRectangleList /> Audit Logs</p>
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default List;