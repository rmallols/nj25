
import { isSupportedOS } from '../utils';

import './Loading.css';

const loadingMessage: { [key: string]: string; } = {
    '/': 'Predint el teu futur...',
    '/es': 'Prediciendo tu futuro...',
    '/en': 'Predicting your future...',
}

const notSupportedMessage: { [key: string]: string; } = {
    '/': 'Dispositu no soportat :/',
    '/es': 'Dispositivo no soportado :/',
    '/en': 'Device not supported :/',
}

export default function Loading() {
    return (
        <div className="Loading">
            {isSupportedOS()
                ?
                <>
                    <div className="Loading-spinner" />
                    <h1>{loadingMessage[window.location.pathname]}</h1>
                </> :
                <h1>{notSupportedMessage[window.location.pathname]}</h1>}
        </div>
    );
}