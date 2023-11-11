import './Header.css';

function Header({moves}) {
    return (
        <div className='header w-100'>
            <p className='moves'>Ходов: {moves}</p>
            <button className='reset-button'>
                <img src='src/images/rotate-right-solid.svg' />
            </button>
        </div>
    )
}

export default Header;