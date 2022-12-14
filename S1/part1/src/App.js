import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"
import Total from "./Total/Total"
import './App.css';
import image from './Image/téléchargement.png'
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course ={course}/>
      <Content part1={part1} exercises1 = {exercises1} part2={part2} exercises2 = {exercises3} part3={part3} exercises3 = {exercises3}/>
      <Total exercises1 ={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <img src ={image}/>
    </div>
  )
}


export default App;
