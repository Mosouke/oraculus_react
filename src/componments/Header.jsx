import React from 'react';
import logo from '../assets/img/logo-oraculus.png';
import "../css/style.css";
import { Link } from 'react-router-dom';
import { useHoroscope } from './Datas';

function Header() {
    const { horoscope, currentIndex, setCurrentIndex } = useHoroscope();
    const handleLeftClick = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1;
        setCurrentIndex(newIndex);
    };

    const handleRightClick = () => {
        const newIndex = currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
    };
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo Oraculus" /></Link>
            <nav>
                <ul>
                    <li><a className="active" href="/">Horoscope</a></li>
                    <li><a href="/">A propos</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>

            <div className="arrow">
                <Link className="arrow-left" href="/" onClick={handleLeftClick}><i className="fa-solid fa-chevron-left"></i></Link>
                <Link className="arrow-right" href="/" onClick={handleRightClick}><i className="fa-solid fa-chevron-right"></i></Link>
            </div>
        </header>            
    );
}

export default Header;
