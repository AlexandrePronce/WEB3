import React from 'react';
import { useState } from 'react'
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';
import Buttons from './Components/Buttons/Buttons';
const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood =()=> {
    const inc = good +1 ;
    setGood(inc);

  }
  const addNeutral =()=> {
    const inc = neutral +1 ;
    setNeutral(inc);

  }
  const addBad =()=> {
    const inc = bad +1 ;
    setBad(inc);

  }

  return (
    <div>
      <Header/>
      <Buttons text = 'bad' inc = {addBad}></Buttons>
      <Buttons text = 'neutral' inc = {addNeutral}></Buttons>
      <Buttons text = 'good' inc = {addGood}></Buttons>
      <Statistics good ={good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}
export default App;