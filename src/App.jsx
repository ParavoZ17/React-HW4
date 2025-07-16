
import './App.css'
import CityCard from './components/CityCard'
import CitySelector from './components/CitySelector'
import data from "./citiesData"
import { useState } from 'react'
import MathQuiz from './components/MathQuiz'


function App() {

  const[city, setCity] = useState("")




  function selectCity (value) {

setCity(value)
  }

  const selectedCity = data.find((obj)=>{return obj.name === city})

  return (
    <>
    <CitySelector data={data} handleSelect={selectCity}/>
    {city === '' ? <p>Сделайте выбор</p> :<CityCard data={selectedCity}/>}
    <MathQuiz/>
    </>
  )
}

export default App
