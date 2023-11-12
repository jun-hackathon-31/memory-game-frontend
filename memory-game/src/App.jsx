import './App.css';
import Field from './components/Field/Field';
import Header from './components/Header/Header';
import WinnerModal from './components/WinnerModal/WinnerModal';
import { useState } from 'react';
import { generateField } from './utils';

function App() {
  const [movesCount, setMovesCount] = useState(0);
  const [field, setField] = useState(generateField());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const restartField = () => {
    setField(generateField());
    setMovesCount(0);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onHideModal = () => {
    restartField();
    setIsModalOpen(false);
  };

  return (
    <div className="layout">
      <Header movesCount={movesCount} restartField={restartField} />
      <Field movesCount={movesCount} setMovesCount={setMovesCount} field={field} openModal={openModal} />
      <WinnerModal show={isModalOpen} onHide={onHideModal} moves={movesCount} />
    </div>
  );
}

export default App;
