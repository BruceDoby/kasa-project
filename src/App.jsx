import './App.css'
import landBackground from './assets/imgsrc1.png'
import Gallery from './components/gallery'

function App() {

  return (
    <>
    <div className='center__elements'>
      <div className='land__div'>
        <img src={landBackground} alt='photo de paysage' className='land__img' />
        <p>
          <span className='leftText'>Chez vous,</span> partout et ailleurs
        </p>
      </div>
      <Gallery />
    </div>
    </>
  )
}

export default App
