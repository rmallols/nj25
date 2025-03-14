import type { Message } from './messages';
import { useState, useEffect, useCallback } from 'react';
import getMessage from './messages';
import Loading from './loading/Loading';
import BackImage from './images/back.png';
import WebIcon from './images/social-media/web.svg';
import EmailIcon from './images/social-media/email.svg';
import FacebookIcon from './images/social-media/facebook.svg';
import InstagramIcon from './images/social-media/instagram.svg';
import XIcon from './images/social-media/x.svg';
import './App.css';

function App() {
    const [ready, setReady] = useState<boolean>(false);
    const [message, setMessage] = useState<Message>();
    const [totalCards, setTotalCards] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isZooming, setIsZooming] = useState<boolean>(false);
    const [isDescribing, setIsDescribing] = useState<boolean>(false);
    const [flipCardIndex, setFlipCardIndex] = useState<number>();
    const [cards, setCards] = useState<Array<void>>([]);
    const [animationsDirection, setAnimationsDirection] = useState<Array<'left' | 'right'>>([]);
    const [cardsRotation, setCardsRotation] = useState<Array<number>>([]);

    const onImageLoad = useCallback(() => {
        if (!ready) {
            setTimeout(() => {
                setReady(true);
                run(totalCards);
            }, 2000);
        }
    }, [totalCards]);

    useEffect(() => {
        initCardCount();
    }, []);

    const initCardCount = useCallback((): number => {
        const totalCards = Math.round(Math.random() * 6) + 2;
        setTotalCards(totalCards);
        setCards(new Array(totalCards).fill(''));
        return totalCards;
    }, []);

    const run = useCallback((totalCards: number) => {
        setMessage(getMessage());
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
            }, totalCards * 1000);
        }, 1000);
    }, []);

    useEffect(() => {
        setAnimationsDirection(cards.map((_) => (
            Math.round(Math.random()) < 1 ? 'left' : 'right'
        )));
        setCardsRotation(cards.map((_) => (
            Math.round(Math.random() * 10) * (Math.round(Math.random()) < 1 ? 1 : -1)
        )));
    }, [cards]);

    const tryAgain = useCallback(() => {
        setFlipCardIndex(undefined);
        setIsZooming(false);
        setIsDescribing(false);
        setTimeout(() => {
            const totalCards = initCardCount();
            run(totalCards);
        }, 1000);
    }, []);

    return (
        <>
            <div className={ready ? 'hide' : 'show'}><Loading /></div>
            <div className={[ready ? 'show' : 'hidden', 'App-content'].join(' ')}>
                <SocialMediaLinks />
                {isDescribing && <TryAgainCTA onClick={tryAgain} />}
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
                                    totalCards - index - 1 :
                                    2 * totalCards - index,
                                animationDelay: `${index}s`,
                                transitionDelay: `${index + 0.5}s`,
                                marginTop: `${4 + index}px`,
                                marginLeft: `${4 + index}px`,
                                // ALSO PLEASE ADD ONLOAD TO ENSURE CARD IS LOADED BEFORE ANYTHING IS SHOWN!!
                                // This conflicts with the keyframes - might worth adding a new layers only for the cardsRotation
                                // transform: `rotateZ(${cardsRotation[index]}deg) ${index === flipCardIndex ? 'rotateY(180deg)' : ''} ${index === flipCardIndex && isZooming ? 'scale(1.2)' : ''}`
                            }}
                            data-card={index}
                        >
                            <div className="flip-card-front">
                                <img src={BackImage} className="cover-image" onLoad={onImageLoad} />
                                {/* <img src={NJ75Image} className="actual-image is-back" /> */}
                            </div>
                            {!index &&
                                <div className="flip-card-back">
                                    {/* <img src={FrontImage} className="cover-image" /> */}
                                    <img
                                        src={message?.image}
                                        className="cover-image"
                                    // style={{
                                    //     maxWidth: message?.maxImageWidth ?? '85%'
                                    // }}
                                    />
                                </div>
                            }
                        </li>
                    )}
                </ul>
                {isDescribing && <div className="description">{message?.text}</div>}
            </div>
        </>
    );
}

function SocialMediaLinks() {
    return (
        <div className="social-media-links">
            <a
                href="https://najordana.es/index.php/ca/qui-som/contacto-2"
                target="_blank"
            >
                <img src={WebIcon} className="is-web" />
            </a>
            <a href="https://www.facebook.com/najordana" target="_blank">
                <img src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/na_jordana" target="_blank">
                <img src={InstagramIcon} />
            </a>
            <a href="https://x.com/najordana" target="_blank">
                <img src={XIcon} />
            </a>
            <a href="mailto:info@najordana.es" target="_blank">
                <img src={EmailIcon} />
            </a>
        </div>
    )
}

function TryAgainCTA({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="try-again-cta"
            onClick={onClick}>
            Jugar de nou!
        </button>
    )
}

export default App;
