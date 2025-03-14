import type { Message } from '../messages';
import './Description.css';

const tryAgainCTAText: { [key: string]: string; } = {
    '/': 'Internar-ho de nou!',
    '/es': 'Interntarlo de nuevo!',
    '/en': 'Try again!',
}

export default function Description(
    { message, onTryAgain }: { message?: Message, onTryAgain: () => void }
) {
    return (
        <div className="Description">
            <h1>{message?.title?.[window.location.pathname]}</h1>
            <div>{message?.text?.[window.location.pathname]}</div>
            <TryAgainCTA onClick={onTryAgain} />
        </div>
    );
}

function TryAgainCTA({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="try-again-cta"
            onClick={onClick}>
            {tryAgainCTAText[window.location.pathname]}
        </button>
    )
}