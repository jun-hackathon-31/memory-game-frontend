import { useState } from 'react';
import { Image } from 'react-bootstrap';
import './Card.css';

const CustomCard = ({ cardUrl, isFlipped, coordinates, handleClick }) => {
    // const [isFlipped, setIsFlipped] = useState(false);
    const { rowIndex, colIndex } = coordinates;

    // const handleClick = () => {
    //     // setIsFlipped(true);
    // };

    return (
        <div className={isFlipped ? 'custom-card flipped' : 'custom-card'} onClick={() => { handleClick({ rowIndex, colIndex }) }}>
            <div className='front'>
                <Image src={cardUrl} fluid />
            </div>
            <div className='back'>
                <Image src='src/images/cover.svg' fluid />
            </div>
        </div>
    )
};

export default CustomCard;
