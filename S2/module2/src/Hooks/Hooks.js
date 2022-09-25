import { useState, useEffect } from 'react';

const  useLocalStorage = (key, initialValue)=> {
    if(!localStorage.getItem(key))
      localStorage.setItem(key, initialValue)
   // const [counter, setCounter] = useState(localStorage.getItem("counter"));
    const [ counter, setCounter ] =  useState(JSON.parse(localStorage.getItem(key)))
    const setPersistantValue = (newValue) => {
      localStorage.setItem(key, newValue);
      setCounter(newValue);
    }
    
    return[counter,setPersistantValue];
}
export default useLocalStorage ;