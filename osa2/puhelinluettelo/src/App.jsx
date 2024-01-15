import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {

  const handleClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
          <Button handleClick={handleClick} text='submit' />
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )

}

export default App