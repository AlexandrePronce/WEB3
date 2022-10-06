import React from 'react';
const Buttons = ({text ,inc}) => {
  
 

  return (
    <button onClick={inc}>
          {text}
    </button>
  )
}
export default Buttons;