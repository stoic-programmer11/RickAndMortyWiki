import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Character from './assets/components/Character'
import Banner from './assets/images/rick-and-morty-wallpaper-preview.png'

function App() {

  const [location, setLocation] = useState({})

  const [locationId, setLocationId] = useState("")




  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomNumber}`)
      .then(res => setLocation(res.data))
  }, [])



  const searchId = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then(res => setLocation(res.data))
    console.log(locationId);

  }

  console.log(location);

  return (


    <div className="App">

      <img src={Banner} alt="" className='banner' />

      <h1>Rick And Morty Wiki</h1>

      <div className='text'>
        <p>Location: <br />{location.name}</p>
        <p>Dimension: <br />{location.dimension}</p>
        <p>Population: <br />{location.residents?.length}</p>
        <p>Type: <br />{location.type}</p>
      </div>



      <input
        type="text"
        value={locationId}
        onChange={e => setLocationId(e.target.value)}
        placeholder='Type a location ID'
      />
      <button onClick={searchId}>Search</button>


      <ul className='card-container'>
        {
          location.residents?.map(resident => (
            <Character
              key={resident}
              resident={resident}
            />
          ))
        }
      </ul>


    </div>
  )
}

export default App
