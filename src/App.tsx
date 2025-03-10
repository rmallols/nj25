import { useState, useEffect } from 'react';
import getMessage from './messages';
import BackImage from './images/back.jpg';
import FrontImage from './images/front.jpg';
import Loading from './loading/Loading';
import NJ75Image from './images/nj75.png';
import FacebookIcon from './images/social-media/facebook.svg';
import InstagramIcon from './images/social-media/instagram.svg';
import XIcon from './images/social-media/x.svg';
import './App.css';

const { text = '', image = '', maxImageWidth = '85%' } = getMessage();

const TOTAL_CARDS = Math.round(Math.random() * 6) + 1;
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
    const [isZooming, setIsZooming] = useState<boolean>(false);
    const [isDescribing, setIsDescribing] = useState<boolean>(false);
    const [flipCardIndex, setFlipCardIndex] = useState<number>();
    const [cards, setCards] = useState<Array<void>>([]);
    const [animationsDirection, setAnimationsDirection] = useState<Array<'left' | 'right'>>([]);

    useEffect(() => {
        setCards(new Array(TOTAL_CARDS).fill(''));
        setTimeout(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setFlipCardIndex(0);
                setTimeout(() => {
                    setIsZooming(true);
                    setTimeout(() => {
                        setIsDescribing(true);
                    }, 1500);
                }, 1500);
            }, TIME * 1000);
        }, 1000);
    }, []);

    useEffect(() => {
        setAnimationsDirection(cards.map((_) => (
            Math.round(Math.random()) < 1 ? 'left' : 'right'
        )));
    }, [cards]);

    // useEffect(() => {
    //     setTimeout(function () {
    //         // if (ref != null) {
    //         //     ref?.requestFullscreen();
    //         // }
    //     // window.addEventListener("load",function() {
    //             // This hides the address bar:
    //             window.scrollTo(0, 100);
    //         // });
    //     }, 3000);
    // }, []);

    return (
        <div className="App-content">
            <SocialMediaLinks />
            <ul className={[
                "card-list",
                isDescribing ? 'is-describing' : null
            ].join(" ")}>
                {cards.map((_, index) =>
                    <li
                        className={[
                            'card-list__item',
                            isAnimating ?
                                animationsDirection[index] === 'left'
                                    ? 'is-animating-left'
                                    : 'is-animating-right'
                                : null,
                            index === flipCardIndex ? 'is-flipping' : null,
                            isZooming ? 'is-zooming' : null,
                        ].join(' ')}
                        style={{
                            zIndex: isAnimating ?
                                TOTAL_CARDS - index - 1 :
                                2 * TOTAL_CARDS - index,
                            animationDelay: `${index}s`,
                            transitionDelay: `${index + 0.5}s`,
                            marginTop: `${4 + index}px`,
                            marginLeft: `${4 + index}px`
                        }}
                        data-card={index}
                    >
                        <div className="flip-card-front">
                            <img src={BackImage} className="cover-image" />
                            <img src={NJ75Image} className="actual-image is-back" />
                        </div>
                        {!index &&
                            <div className="flip-card-back">
                                <img src={FrontImage} className="cover-image" />
                                <img
                                    src={image}
                                    className="actual-image is-front"
                                    style={{ maxWidth: maxImageWidth }}
                                />
                            </div>
                        }
                    </li>
                )}
            </ul>
            {isDescribing && <div className="description">{text}</div>}
        </div>
    );
}

function SocialMediaLinks() {
    return (
        <div className="social-media-links">
            <a href="https://www.facebook.com/najordana" target="_blank">
                <img src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/na_jordana" target="_blank">
                <img src={InstagramIcon} />
            </a>
            <a href="https://x.com/najordana" target="_blank">
                <img src={XIcon} />
            </a>
        </div>
    )
}

export default App;
