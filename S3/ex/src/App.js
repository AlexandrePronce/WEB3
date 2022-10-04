import React from 'react';
import { useState } from 'react'
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';
const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <Statistics/>
    </div>
  )
}
export default App;
