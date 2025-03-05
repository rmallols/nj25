import { useState, useEffect, useRef } from 'react';
import getMessage from './messages';
import BackImage from './images/back.jpg';
import Loading from './loading/Loading';
import './App.css';

const { text = '', image = '' } = getMessage();

const TOTAL_CARDS = 3;
const TIME = 1 * TOTAL_CARDS;

function App() {



    // const [ready, setReady] = useState<boolean>(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setReady(true);
    //     }, 3000);
    // }, []);

    // return (
    //     <div className="App">
    //         <div className={ready ? 'hide' : 'show'}><Loading /></div>
    //         <div className={[ready ? 'show' : 'hidden', 'App-content'].join(' ')}>
    //             <img src={image} alt="Carta Tarot" />
    //             <h2>{text}</h2>
    //         </div>
    //     </div>
    // );

    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [flipCardIndex, setFlipCardIndex] = useState<number>();
    const [cards, setCards] = useState<Array<void>>([]);

    useEffect(() => {
        setCards(new Array(TOTAL_CARDS).fill(''));
        setTimeout(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setFlipCardIndex(0);
                console.log('XXX COMPLETED!!!');
            }, TIME * 1000);
        }, 1000);
    }, []);

    return (
        <div className="App-content">
            <ul className="card-list">
                {cards.map((_, index) =>
                    <li
                        className={[
                            'card-list__item',
                            isAnimating ? 'is-animating' : null,
                            index === flipCardIndex ? 'is-flipping' : null,
                        ].join(' ')}
                        style={{
                            zIndex: isAnimating ?
                                TOTAL_CARDS - index - 1 :
                                2 * TOTAL_CARDS - index,
                            animationDelay: `${index}s`,
                            transitionDelay: `${index + 0.5}s`,
                            marginTop: `${4 + index}px`
                        }}
                        data-card={index}
                    >
                        <div className="flip-card-front">
                            <img src={BackImage} className="card" />
                        </div>
                        <div className="flip-card-back">
                            <img src={image} className="card" />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
