import { useState, useEffect, useCallback } from 'react';

import WebIcon from '../images/social-media/web.svg';
import EmailIcon from '../images/social-media/email.svg';
import FacebookIcon from '../images/social-media/facebook.svg';
import InstagramIcon from '../images/social-media/instagram.svg';
import ValenciaFlag from '../images/flags/valencia-flag.svg';
import SpainFlag from '../images/flags/spain-flag.svg';
import UKFlag from '../images/flags/uk-flag.svg';
import XIcon from '../images/social-media/x.svg';

import './Header.css';

export default function Header() {
    return (
        <div className="Header">
            <SocialMediaLinks />
            <LanguageSelection />
        </div>
    )
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

function LanguageSelection() {
    const getClassName = useCallback((pathname: string): string => (
        window.location.pathname === pathname ? 'is-selected' : ''
    ), []);
    return (
        <div className="language-selection">
            <a href="/" className={getClassName('/')}>
                <img src={ValenciaFlag} />
            </a>
            <a href="/es" className={getClassName('/es')}>
                <img src={SpainFlag} />
            </a>
            <a href="/en" className={getClassName('/en')}>
                <img src={UKFlag} />
            </a>
        </div>
    )
}