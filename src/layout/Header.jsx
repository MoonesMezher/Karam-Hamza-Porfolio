import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLang from '../stores/Language';
import { useContent } from '../hooks/useContent';
import Logo from "/public/logo.svg"

const Header = () => {
    const { lang, content } = useContent();
    const { setLang } = useLang();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };

    const direct = (href) => {
        if (location.pathname === '/') {
            scrollToSection(href);
        } else {
            window.location.href = `/#${href}`;
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <Link 
                    to="/" 
                    className="logo"
                >
                    <img src={Logo} alt='Karam Hamza'/>
                </Link>
                
                <div className="nav-links">
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={(e) => {
                            if (location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        {content.navItems[0]}
                    </Link>
                    
                    <a 
                        href='/#contact'
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault()
                            direct("contact")
                        }}
                    >
                        {content.navItems[2]}
                    </a>

                    <a 
                        href='#experience'
                        onClick={(e) => {
                            e.preventDefault()
                            direct("experience")
                        }}
                        className={`nav-link`}
                    >
                        {content.navItems[3]}
                    </a>

                    <Link 
                        to="/blog" 
                        className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                    >
                        {content.navItems[1]}
                    </Link>
                </div>
                
                <div className="language-switcher">
                    <button 
                        className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                        onClick={() => setLang('ar')}
                    >
                        <i className="fas fa-language"></i> العربية
                    </button>
                    <button 
                        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                        onClick={() => setLang('en')}
                    >
                        <i className="fas fa-language"></i> English
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;