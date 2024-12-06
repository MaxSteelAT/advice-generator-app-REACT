import './App.css';
import RecipeTitle from './RecipeTitle';
import moment from 'moment'
import { useState, useEffect } from 'react'



function App() {
  const appName = 'Application React JS'
  const numbersArray = [2, 8, 7, 33, 5, 6, 88]
  const [cat, setCat] = useState('Cirus')
  const [inputDog, setInputDog] = useState('Brownies')

  const exampleClick = () => {
    console.log('Click')
    setCat('Avena')

  }

  const changeDog = (event) => {
    const value = event.target.value
    setInputDog(value)
  }

  useEffect(() => {
    console.log('Se esta cambiando', inputDog)
  }, [inputDog])

  return (
    <div className="App">
      <div className="App-header">
        <h1>{appName}</h1>
        <input onChange={changeDog} type='text' value={inputDog} ></input>
        <h2>{inputDog}</h2>
        <h2>{cat}</h2>
        <RecipeTitle isClassTitle={true} rating={4} numbers={numbersArray} title='ingrid' />
        <RecipeTitle isClassTitle={false} rating={3} numbers={numbersArray} title='israel' />
        <div>{moment().format('DD/MM/YYYY')}</div>
        <button onClick={exampleClick} style={{ marginTop: '100px' }}>Click</button>
      </div>
      <h1>Texto</h1>
      <div>{Date.now()}</div>
    </div>
  );
}

export default App;
