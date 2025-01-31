import { useState, useEffect } from 'react';
import getMessage from './messages';
import Loading from './loading/Loading';
import './App.css';

function App() {
    const { text = '', image = '' } = getMessage();
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 3000);
    }, []);

    return (
        <div>
            <div className={ready ? 'hide' : 'show'}><Loading /></div>
            <div className={ready ? 'show' : 'hidden'}>
                <img src={image} alt="Carta Tarot" />
                <h2>{text}</h2>
            </div>
        </div>

    );
}

export default App;
