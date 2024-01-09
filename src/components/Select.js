import React from "react"
import './Select.css';

    const Select = ({ setApiLimit, setCurrentPage }) => {
        const handleLimitChange = (e) => {
          setApiLimit(parseInt(e.target.value));
          setCurrentPage(1);
        };

      

return (
<div className='select'>
  <span>
 showing
<select className="options" onChange={handleLimitChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      out of 100
      </span>
      </div>
)
}
 



export default Select;