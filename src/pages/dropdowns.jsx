import React, { useState } from 'react';

const Dropdown = (props) => {
  /*const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };*/

  const [openIndex, setOpenIndex] = useState(null); 

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return ( 
    <div className='dropdowns'>
    <div className='dropdown'>
      <div className='dropdown-header' onClick={() => toggleDropdown(0)}>
        <p className='dropdown__p1'>{props.title}</p>
        <i className={`fa-solid ${openIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {openIndex === 0 && (
        <div className='dropdown-content'>
          <p>{props.content}</p>
        </div>
      )}
    </div>
    </div>
    ) 
}

// Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.

export default Dropdown