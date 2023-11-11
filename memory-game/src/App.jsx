import './App.css'
import Field from './components/Field/Field'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
  const [moves, setMoves] = useState(0);

  // eslint-disable-next-line no-unused-vars
  function updateMoves() {
    setMoves((prev) => prev + 1);
  }

  return (
    <div className="layout">
      <Header moves={moves} />
      <Field />
    </div>
  )
}

export default App
