
import './Loading.css';

const message: { [key: string]: string; } = {
    '/': 'Predint el teu futur...',
    '/es': 'Prediciendo tu futuro...',
    '/en': 'Predicting your future...',
}

export default function Loading() {
    return (
        <div className="Loading">
            <div className="Loading-spinner" />
            <h1>{message[window.location.pathname]}</h1>
        </div>
    );
}