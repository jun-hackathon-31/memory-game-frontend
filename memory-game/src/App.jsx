import './App.css'
import Field from './components/Field/Field'
import Header from './components/Header/Header'
import { useState } from 'react'
import { generateField } from './utils';

function App() {
  const [movesCount, setMovesCount] = useState(0);
  const [field, setField] = useState(generateField());

  const restartField = () => {
    setField(generateField());
    setMovesCount(0);
  }

  return (
    <div className="layout">
      <Header movesCount={movesCount} restartField={restartField} />
      <Field movesCount={movesCount} setMovesCount={setMovesCount} field={field} />
    </div>
  )
}

export default App
