import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import './WinnerModal.css';

function WinnerModal({ show, onHide, moves }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop="static"
            keyboard={false}
            centered
            className='winner-modal'
        >

            <Modal.Body>
                <div className='info mb-5'>
                    <h3>Уровень пройден!</h3>
                    <p>Всего ходов: {moves}</p>
                </div>
                <div className='leaderboard'>
                    <p>Вы можете оставить своё имя,<br />чтобы попасть в список лидеров!</p>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder='Введите своё имя'
                            aria-label="Player's username"
                        />
                        <Button variant="outline-secondary">
                            Отправить
                        </Button>
                    </InputGroup>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button size='lg' onClick={onHide}>Сыграем ещё раз?</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default WinnerModal;