import React from 'react';
import StatisticsLine from '../StatisticsLine/StatisticsLine';
const Statistics = ({good,bad,neutral}) => {
  
 if((good+bad+neutral)== 0){
  return (
    <div>
      <h1>Statistics</h1>
      <p>No stats given</p>
    </div>
  )
 }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text = 'good' value = {good} />
      <StatisticsLine text = 'neutral' value = {neutral} />
      <StatisticsLine text = 'bad' value = {bad} />
      <StatisticsLine text = 'all' value ={good+bad+neutral}  />
      <StatisticsLine text = 'average' value ={(good-bad)/(good+neutral+bad)}  />
      <StatisticsLine text = 'positive' value ={(good /(good+neutral+bad))*100}  />
    </div>
  )
}
export default Statistics;