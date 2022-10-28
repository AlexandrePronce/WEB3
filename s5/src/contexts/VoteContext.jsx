import React from "react";
import { useState, useEffect } from 'react'
const Context = React.createContext(null)
const ProviderWrapper = (props) => {
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
      const reset=()=>{
        setBad(0);
        setGood(0);
        setNeutral(0);
      }
      const exposedValue = {
        addGood,
        addBad,
        addNeutral,
        reset,
        good,
        neutral,
        bad,
        setBad,
        setGood,
        setNeutral
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider> 
}
    
export {    
    Context,
    ProviderWrapper,    
}

export default Context;