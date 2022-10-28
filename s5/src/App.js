import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'

import GoodButtons from './Components/Button/GoodButtons'

const App = () => {
  
  
  return (
    <div>
      <Header/>
      <ul>
        <li>
        <GoodButtons/>
        </li>
      
      </ul>
   
    </div>
  )
}

export default App