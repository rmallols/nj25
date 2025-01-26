import React from 'react';
import getMessage from './messages';
import './App.css';

function App() {
    return (
        <div>
            {getMessage()}
        </div>
    );
}

export default App;
