import { Analytics } from "@vercel/analytics/react"

import type { Message } from './messages';
import { useState, useEffect, useCallback } from 'react';
import getMessage from './messages';
import Loading from './loading/Loading';
import BackImage from './images/back.png';
import Header from './header/Header';
import Description from './description/Description';
import { isSupportedOS } from './utils';
import './App.css';

function App() {
    const [ready, setReady] = useState<boolean>(false);
    const [message, setMessage] = useState<Message>();
    const [totalCards, setTotalCards] = useState<number>(0);
    const [isSliding, setIsSliding] = useState<boolean>(false);
    const [isSettled, setIsSettled] = useState<boolean>(false);
    const [isShuffling, setIsShuffling] = useState<boolean>(false);
    const [isZooming, setIsZooming] = useState<boolean>(false);
    const [isDescribing, setIsDescribing] = useState<boolean>(false);
    const [flipCardIndex, setFlipCardIndex] = useState<number>();
    const [cards, setCards] = useState<Array<void>>([]);
    const [animationsDirection, setAnimationsDirection] = useState<Array<'left' | 'right'>>([]);
    const [cardsRotation, setCardsRotation] = useState<Array<number>>([]);

    const onImageLoad = useCallback(() => {
        if (!ready) {
            setTimeout(() => {
                if (isSupportedOS()) {
                    setReady(true);
                    run(totalCards);
                }
            }, 2000);
        }
    }, [totalCards]);

    useEffect(() => {
        initCardCount();
    }, []);

    const initCardCount = useCallback((): number => {
        const totalCards = Math.round(Math.random() * 5) + 2;
        setTotalCards(totalCards);
        setCards(new Array(totalCards).fill(''));
        return totalCards;
    }, []);

    const run = useCallback((totalCards: number) => {
        setMessage(getMessage());
        setIsSliding(true);
        setTimeout(() => {
            setIsSettled(true);
            setIsSliding(false);
            setIsShuffling(true);
            setTimeout(() => {
                setIsShuffling(false);
                setFlipCardIndex(0);
                setTimeout(() => {
                    setIsZooming(true);
                    setTimeout(() => {
                        setIsDescribing(true);
                    }, 1000);
                }, 1000);
            }, totalCards * 1000);
        }, (totalCards / 2 + 1) * 1000);
    }, []);

    useEffect(() => {
        setAnimationsDirection(cards.map((_) => (
            Math.round(Math.random()) < 1 ? 'left' : 'right'
        )));
        setCardsRotation(cards.map((_) => (
            Math.round(Math.random() * 15) * (Math.round(Math.random()) < 1 ? 1 : -1)
        )));
    }, [cards]);

    const tryAgain = useCallback(() => {
        setFlipCardIndex(undefined);
        setIsZooming(false);
        setIsDescribing(false);
        setIsSettled(false);
        setTimeout(() => {
            const totalCards = initCardCount();
            run(totalCards);
        }, 1000);
    }, []);

    return (
        <>
            <div className={ready ? 'hide' : 'show'}><Loading /></div>
            <div className={[ready ? 'show' : 'hidden', 'App-content'].join(' ')}>
                <Header />
                <ul className={[
                    "card-list",
                    isDescribing ? 'is-describing' : null
                ].join(" ")}>
                    {cards.map((_, index) =>
                        <li
                            className={[
                                'card-list__item',
                                isSliding ? 'is-sliding' : null,
                                isSettled ? 'is-settled' : null,
                                isShuffling ?
                                    animationsDirection[index] === 'left'
                                        ? 'is-shuffling-left'
                                        : 'is-shuffling-right'
                                    : null,
                                index === flipCardIndex ? 'is-flipping' : null,
                                isZooming ? 'is-zooming' : null,
                            ].join(' ')}
                            style={{
                                zIndex: isShuffling ?
                                    totalCards - index - 1 :
                                    2 * totalCards - index,
                                animationDelay: `${isShuffling ? index : index / 2}s`,
                                transitionDelay: `${index + 0.5}s`,
                                marginTop: `${4 + index}px`,
                                marginLeft: `${4 + index}px`,
                            }}
                            data-card={index}
                        >
                            <div className="flip-card-front">
                                <img
                                    src={BackImage}
                                    className="cover-image"
                                    style={{
                                        transform: `rotateZ(${cardsRotation[index]}deg)`
                                    }}
                                    onLoad={onImageLoad} />
                            </div>
                            {!index &&
                                <div className="flip-card-back">
                                    <img
                                        src={message?.image}
                                        className="cover-image"
                                        style={{
                                            transform: `rotateZ(${cardsRotation[index]}deg)`
                                        }}
                                    />
                                </div>

                            }
                        </li>
                    )}
                </ul>
                {
                    isDescribing && <Description message={message} onTryAgain={tryAgain} />
                }
            </div>
            <Analytics />
        </>
    );
}

export default App;
