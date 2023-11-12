import { Image } from 'react-bootstrap';
import './Card.css';

const CustomCard = ({ cardUrl, isFlipped, coordinates, handleClick, isGuessed }) => {
    const { rowIndex, colIndex } = coordinates;

    return (
        <div className={`custom-card ${isFlipped ? 'flipped' : ''} ${isGuessed ? 'guessed' : ''}`} onClick={() => { handleClick({ rowIndex, colIndex }) }}>
            <div className='front'>
                <Image src={cardUrl} fluid />
            </div>
            <div className='back'>
                <Image src='/cover.svg' fluid />
            </div>
        </div>
    )
};

export default CustomCard;
