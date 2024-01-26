import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup);

  function handleClick(puppy) {
    console.log("puppy id: ", puppy.id);
    setFeatPupId(puppy.id);
  }
  return (
    <div className='App'>
      <h1>Puppy Pals</h1>
      {puppies.map((puppy) => {
        return <p onClick={() => handleClick(puppy)} key={puppy.id}>{puppy.name}</p>
      })
      }
      {featPupId && <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>}
    </div>
  )
}

export default App
