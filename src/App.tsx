import { useState, useEffect, useRef } from 'react';
import getMessage from './messages';
import Loading from './loading/Loading';
import './App.css';

const { text = '', image = '' } = getMessage();

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

    const cardList = useRef<HTMLUListElement>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimating(true);
        }, 1000);        
        setTimeout(() => {
            setIsAnimating(false);
        }, 50000);
    }, []);

    return (
        <div className="card-wrapper">
            <ul className={['card-list', isAnimating ? 'is-animated' : null].join(' ')} ref={cardList}>
                <li className="card-list__item" data-card="0">
                    <div className="card"></div>
                </li>
                <li className="card-list__item" data-card="1">
                    <div className="card"></div>
                </li>
                <li className="card-list__item" data-card="2">
                    <div className="card"></div>
                </li>
            </ul>
        </div>
    );
}

export default App;
