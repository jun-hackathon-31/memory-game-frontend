import './App.css'
import Field from './components/Field/Field'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
  const [movesCount, setMovesCount] = useState(0);

  return (
    <div className="layout">
      <Header movesCount={movesCount}/>
      <Field movesCount={movesCount} setMovesCount={setMovesCount} />
    </div>
  )
}

export default App
