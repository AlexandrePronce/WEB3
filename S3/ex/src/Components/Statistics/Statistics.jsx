import React from 'react';
import { useState } from 'react'
const Statistics = ({good,bad,neutral}) => {
  
 

  return (
    <div>
      <h1>Statistics</h1>
      <p>good :{good}</p>
      <p>neutral :{neutral}</p>
      <p>bad :{bad}</p>
    </div>
  )
}
export default Statistics;