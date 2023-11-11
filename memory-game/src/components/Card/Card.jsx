import { useState } from 'react';
import { Image } from 'react-bootstrap';
import './Card.css';

const CustomCard = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(true);
    };

    return (
        <div className={isFlipped ? 'custom-card flipped' : 'custom-card'} onClick={handleClick}>
            <div className='front'>
                <Image src={card.img} fluid />
            </div>
            <div className='back'>
                <Image src='src/images/cover.svg' fluid />
            </div>
        </div>
    )
};

export default CustomCard;
