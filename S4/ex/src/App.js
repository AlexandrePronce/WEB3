import { useState } from 'react'
import Name from './Components/Name/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id : 0 }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName ,
      id: persons.length + 1,
    }
    if(newName !==""){
      if(persons.find(pers => {
         return pers.name === newName;  })){
        //console.log("blablabla")
        alert("non!")
        setNewName('')
      }else{
        console.log("test")
        setPersons(persons.concat(nameObject))
        setNewName('')
      }
      
    }
  
  
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Name key={person.id} name={person.name}  />
        )}
      </ul>
    </div>
  )
}

export default App