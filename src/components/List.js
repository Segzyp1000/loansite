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
      <ListGroup.Item action id="link22">
      <b><FaBriefcase /> Switch Organization <RiExpandUpDownFill /></b>
      </ListGroup.Item>
      <ListGroup.Item action id="link1">
      <b><IoMdHome /> Dashboard</b>
      </ListGroup.Item>
      <ListGroup.Item action id="link2">
      <b>CUSTOMERS</b>
      </ListGroup.Item>
      <ListGroup.Item action id="link3">
      <ImUsers /> Users
      </ListGroup.Item>
      <ListGroup.Item action id="link4">
      <PiUsersThreeFill/> Guarantors
      </ListGroup.Item>
      <ListGroup.Item action id="link5">
      <RiMoneyDollarBoxFill /> Loan
      </ListGroup.Item>
      <ListGroup.Item action id="link6">
      <FaHandshake /> Decision Models
      </ListGroup.Item>
      <ListGroup.Item action id="link7">
      <FaPiggyBank /> Savings
      </ListGroup.Item>
      <ListGroup.Item action id="link8">
      <FaHandHoldingUsd /> Loan Request
      </ListGroup.Item>
      <ListGroup.Item action id="link9">
      <FaUserCheck /> Whitelist
      </ListGroup.Item>
      <ListGroup.Item action id="link10">
      <b>BUSINESS</b>
      </ListGroup.Item>
      <ListGroup.Item action id="link11">
      <FaHandHoldingUsd /> Loan Products
      </ListGroup.Item>
      <ListGroup.Item action id="link12">
      <FaBriefcase /> Organization
      </ListGroup.Item>
      <ListGroup.Item action id="link13">
      <FaLandmark /> Fees and Charges
      </ListGroup.Item>
      <ListGroup.Item action id="link14">
      <FaTablet /> Transactions
      </ListGroup.Item>
      <ListGroup.Item action id="link15">
      <FaServicestack /> Services
      </ListGroup.Item>
      <ListGroup.Item action id="link16">
      <FaUserGear/> Accounts
      </ListGroup.Item>
      <ListGroup.Item action id="link17">
      <FaScroll /> Settlements
      </ListGroup.Item>
      <ListGroup.Item action id="link18">
      <IoBarChart /> Reports
      </ListGroup.Item>
      <ListGroup.Item action id="link19">
      <b>SETTINGS</b>
      </ListGroup.Item>
      <ListGroup.Item action id="link20">
      <FaSlidersH /> Prefrences
      </ListGroup.Item>
      <ListGroup.Item action id="link21">
      < FaCoins /> Fees & Pricing
      </ListGroup.Item>
      <ListGroup.Item action id="link21">
      <FaRectangleList /> Audit Logs
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default List;