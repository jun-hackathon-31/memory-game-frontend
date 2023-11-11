import './Header.css';

function Header() {
    return (
        <div className='header w-100'>
            <p className='moves'>Ходов: 5</p>
            <button className='reset-button'>
                <img src='src/images/rotate-right-solid.svg' />
            </button>
        </div>
    )
}

export default Header;