import landBackground2 from '../assets/imgsrc2.png'
import Dropdown from '../components/dropdowns'

function About() {
  return ( 
  <>
  <div className='center__elements'>
    <div className='land__div2'>
      <img src={landBackground2} alt='photo de paysage' className='land__img2' />
    </div>
    <div className='dropdown__about'>
    <div className='about__height'>
    <Dropdown title='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' />
    </div>
    <div className='about__height'>
    <Dropdown title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbations du voisinage entraînera une exclusion de notre plateforme.' />
    </div>
    <div className='about__height'>
    <Dropdown title='Service' content='La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.' />
    </div>
    <div className='about__height'>
    <Dropdown title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
    </div>
    </div>
  </div>
  </>
  )
}
  
export default About