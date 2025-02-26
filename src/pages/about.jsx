import landBackground2 from '../assets/imgsrc2.png'
import Dropdown from '../pages/dropdowns'

function About() {
  return ( 
  <>
  <div className='center__elements'>
    <div className='land__div2'>
      <img src={landBackground2} alt='photo de paysage' className='land__img2' />
    </div>
    <Dropdown />
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