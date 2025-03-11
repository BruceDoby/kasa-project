import { useParams } from 'react-router-dom';
import data from '../../public/data.json';
import Carrousel from "../components/carrousel";
// import { useNavigate } from 'react-router-dom';
import Error from "./error"
import Dropdown from '../components/dropdowns';
import Rating from "../components/rating"

function Logement() {
    const { id } = useParams();
    // const navigate = useNavigate();
    const logement = data.find((item) => item.id.toString() === id);
  
    if (!logement) {
        return <Error />;
        /*navigate('/error');
        return null;*/
    }
  
    return (
      <>
      <div className='center__elements'>
        <Carrousel pictures={logement.pictures} />
        <div className='housing'>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className='tags'>
            {logement.tags.map((tag, index) => (<p key={index}>{tag}</p>))}
          </div>
          <div className='host__infos'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Photo du propriétaire" />
          </div>
          <Rating id={id} />
          <div className='dropdown__housing'>
          <Dropdown title="Description" content={logement.description} className="dropdown-description" />
          {/*<Dropdown title="Equipements" content={logement.equipments} />*/}
          <Dropdown title="Equipements" content={logement.equipments.map((equip, index) => (<span key={index}>{equip}</span>))} />
          </div>
        </div>
      </div>  
      </>
    );
  }

export default Logement