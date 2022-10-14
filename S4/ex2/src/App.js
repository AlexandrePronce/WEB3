import { useState, useEffect } from 'react'
import axios from 'axios'
import Name from './Components/Name/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id : 0 , phone : '101010'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhonenumber , setPhonenumber] = useState('')
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName ,
      phone : newPhonenumber ,
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
        setPhonenumber('')
      }
      
    }
  
  
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
      setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    console.log(event.target.value)
      setPhonenumber(event.target.value)
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
        phone: <input
          value={newPhonenumber}
          onChange={handlePhoneChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Name key={person.id} name={person.name} phoneNumber = {person.phone} />
        )}
      </ul>
    </div>
  )
}

export default App