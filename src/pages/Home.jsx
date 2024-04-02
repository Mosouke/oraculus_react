import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../componments/Header";
import { useHoroscope } from "../componments/Datas";

function Home() {
    const { horoscope, currentIndex, setCurrentIndex } = useHoroscope();

    useEffect(() => {
        const indexBelier = horoscope.findIndex(item => item.signe === "Bélier");
        if (indexBelier !== -1) {
            setCurrentIndex(indexBelier);
        }
    }, []);

    const handleLeftClick = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1;
        setCurrentIndex(newIndex);
    };

    const handleRightClick = () => {
        const newIndex = currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
    };
    
    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.keyCode === 37) {
            handleLeftClick();
        } else if (event.keyCode === 39) {
            handleRightClick();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);


    return (
        <>
            <Header />
            <main>
                <section>
                    <div>
                        <Link className="left-horoscope" to="#" onClick={handleLeftClick}>{horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1].signe}
                            <span>{horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length - 1].date}</span>
                        </Link>
                        <Link className="right-horoscope" to="#" onClick={handleRightClick}>{horoscope[currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0].signe}
                            <span>{horoscope[currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0].date}</span>
                        </Link>
                    </div>

                    <article>
                        <p id="datejour">-- HOROSCOPE DU {horoscope[currentIndex].date}</p>
                        <h1>{horoscope[currentIndex].signe}</h1>
                        <span id="date">{horoscope[currentIndex].date}</span>
                        <div>
                            <p id="amour"><span>Amour : {horoscope[currentIndex].amour}</span></p>
                            <p id="travail"><span>Travail : {horoscope[currentIndex].travail}</span></p>
                            <p id="argent"><span>Argent : {horoscope[currentIndex].argent}</span></p>
                            <p id="sante"><span>Santé : {horoscope[currentIndex].sante}</span></p>
                            <p id="famille"><span>Famille et amis : {horoscope[currentIndex].famille}</span></p>
                            <p id="conseil"><span>Conseil : {horoscope[currentIndex].conseil}</span></p> 
                        </div>
                    </article>
                </section>
                <aside>
                    <img src={horoscope[currentIndex].image} alt="Capricorne" />
                </aside>
            </main>
        </>
    );
}

export default Home;
