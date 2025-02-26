import React, { useState } from 'react';

const Dropdown = () => {
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
        <p className='dropdown__p1'>Fiabilité</p>
        <i className={`fa-solid ${openIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {openIndex === 0 && (
        <div className='dropdown-content'>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
      )}
    </div>
    <div className='dropdown'>
      <div className='dropdown-header' onClick={() => toggleDropdown(1)}>
        <p className='dropdown__p1'>Respect</p>
        <i className={`fa-solid ${openIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {openIndex === 1 && (
        <div className='dropdown-content'>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbations du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      )}
    </div>
    <div className='dropdown'>
      <div className='dropdown-header' onClick={() => toggleDropdown(2)}>
        <p className='dropdown__p1'>Service</p>
        <i className={`fa3 fa-solid ${openIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {openIndex === 2 && (
        <div className='dropdown-content'>
          <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </div>
      )}
    </div>
    <div className='dropdown'>
      <div className='dropdown-header' onClick={() => toggleDropdown(3)}>
        <p className='dropdown__p1'>Sécurité</p>
        <i className={`fa-solid ${openIndex === 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {openIndex === 3 && (
        <div className='dropdown-content'>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant 
          une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité
          domestique pour nos hôtes.
          </p>
        </div>
      )}
    </div>
    </div>
    ) 
}

export default Dropdown