import { Modal, Button } from 'react-bootstrap';
import './WinnerModal.css';

function WinnerModal(/* {show, onHide, moves} */) {
    return (
        <Modal
            // show={show}
            // onHide={onHide}
            backdrop="static"
            keyboard={false}
            centered
        >

            <Modal.Body>
                <h3>Уровень пройден!</h3>
                {/* <p>Всего ходов: {moves}</p> */}
            </Modal.Body>

            <Modal.Footer>
                <Button size='lg' /*onClick={onHide}*/>Сыграем ещё раз?</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default WinnerModal;