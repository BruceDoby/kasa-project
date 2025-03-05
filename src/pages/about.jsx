import landBackground2 from '../assets/imgsrc2.png'
import Dropdown from '../pages/dropdowns'

function About() {
  return ( 
  <>
  <div className='center__elements'>
    <div className='land__div2'>
      <img src={landBackground2} alt='photo de paysage' className='land__img2' />
    </div>
    <div className='dropdown__about'>
    <Dropdown title='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' />
    <Dropdown title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbations du voisinage entraînera une exclusion de notre plateforme.' />
    <Dropdown title='Services' content='La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.' />
    <Dropdown title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
    </div>
    {/*<div className='dropdowns'>
      <div className='dropdown'>
        <p>Fiabilité</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className='dropdown'>
        <p>Respect</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className='dropdown'>
        <p>Service</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className='dropdown'>
        <p>Sécurité</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>*/}
  </div>
  </>
  )
}
  
export default About