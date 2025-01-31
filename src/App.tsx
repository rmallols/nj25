import { useState, useEffect } from 'react';
import getMessage from './messages';
import Loading from './loading/Loading';
import './App.css';

const { text = '', image = '' } = getMessage();

function App() {
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 3000);
    }, []);

    return (
        <div className="App">
            <div className={ready ? 'hide' : 'show'}><Loading /></div>
            <div className={[ready ? 'show' : 'hidden', 'App-content'].join(' ')}>
                <img src={image} alt="Carta Tarot" />
                <h2>{text}</h2>
            </div>
        </div>

    );
}

export default App;
