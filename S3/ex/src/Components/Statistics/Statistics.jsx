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
      < table >
      <tbody>
      <tr><td><StatisticsLine text = 'good' value = {good} /></td></tr>
      <tr><td><StatisticsLine text = 'neutral' value = {neutral} /></td></tr>
      <tr><td><StatisticsLine text = 'bad' value = {bad} /></td></tr>
      <tr><td><StatisticsLine text = 'all' value ={good+bad+neutral}  /></td></tr>
      <tr><td><StatisticsLine text = 'average' value ={(good-bad)/(good+neutral+bad)}  /></td></tr>
      <tr><td><StatisticsLine text = 'positive' value ={(good /(good+neutral+bad))*100}  /></td></tr>
      </tbody>
      </table>
      
    </div>
  )
}
export default Statistics;