// import { useState } from 'react'
import './App.css'
import landBackground from './assets/imgsrc1.png'
import Gallery from './pages/gallery'

function App() {
  // const [count, setCount] = useState(0)

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
