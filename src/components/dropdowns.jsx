/*import React, { useState } from 'react';

const Dropdown = (props) => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleDropdown = (index) => {
    console.log("test", openIndex);
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <>
    <div className={`dropdown ${props.className || ''} ${openIndex === 0 ? 'open' : ''}`}>
      <div className='dropdown-header' onClick={() => toggleDropdown(0)}>
        <p className='dropdown__p1'>{props.title}</p>
        <span className={`chevron`}>
          <i className={`fa-solid ${openIndex === 0 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </span>
      </div>
    </div>
    <div className={`dropdown-content`}>
      {openIndex === 0 && <p>{props.content}</p>}
    </div>
    </>
  );
};

export default Dropdown;*/

import React, { useState } from 'react';

const Dropdown = (props) => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleDropdown = (index) => {
    console.log("test", openIndex);
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div className={`dropdown ${props.className || ''} ${openIndex === 0 ? 'open' : ''}`}>
      <div className='dropdown-header' onClick={() => toggleDropdown(0)}>
        <p className='dropdown__p1'>{props.title}</p>
        <span className={`chevron`}>
          <i className={`fa-solid ${openIndex === 0 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </span>
      </div>
      <div className={`dropdown-content`}>
        {openIndex === 0 && <p>{props.content}</p>}
      </div>
    </div>
  );
};

export default Dropdown;



/*import React, { useState } from 'react';

const Dropdown = (props) => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggleDropdown = (index) => {
    console.log("test", openIndex);
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return ( 
    <div className={`dropdown ${props.className || ''}`}> 
      <div className='dropdown-header' onClick={() => toggleDropdown(0)}>
        <p className='dropdown__p1'>{props.title}</p>
        <span className={`chevron`}>
          <i className={`fa-solid ${openIndex === 0 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </span>
      </div>
      {openIndex === 0 && (
        <div className='dropdown-content'>
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;*/
