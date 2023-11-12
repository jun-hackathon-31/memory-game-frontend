import './Header.css';

function Header({ movesCount, restartField }) {
    return (
        <div className='header w-100'>
            <p className='moves'>Ходов: {movesCount}</p>
            <button className='reset-button' onClick={restartField}>
                <img src='src/images/rotate-right-solid.svg' />
            </button>
        </div>
    )
}

export default Header;