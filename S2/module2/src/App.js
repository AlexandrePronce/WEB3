import { useState } from 'react'
import Display from './Components/Display/Display'
import Button from './Components/Button/Button'
import useLocalStorage from './Hooks/Hooks';
import React from 'react';



const App = () => {
  const [ counter, setCounter ] =  useLocalStorage('test',0) ;
  
  const changeCount = (delta) => {
    const newCounter = counter + delta;
    setCounter(newCounter);
    
  }


  return (
    <div>
      <Display counter={counter} />
      <Button
        changeCount={changeCount}
        delta={1}
        text='plus'
      />
      <Button
        changeCount={changeCount}
        delta={-counter}
        text='zero'
      />
      <Button
        changeCount={changeCount}
        delta={-1}
        text='minus'
      />
    </div>
  )
}

export default App;