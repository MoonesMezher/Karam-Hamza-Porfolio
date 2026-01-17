import { useState } from 'react';
import { useContent } from '../../hooks/useContent';

const MegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { content } = useContent();

    return (
        <div className="mega-menu-container">
            <button 
                className="mega-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            {isOpen && (
                <div className="mega-menu-overlay">
                    <div className="mega-menu-content">
                        <div className="mega-menu-grid">
                            <div className="mega-menu-section">
                                <h3>Experience</h3>
                                {content.experiences.map((exp, index) => (
                                    <a 
                                        key={index}
                                        href={`#experience-${index}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <i className={exp.icon}></i>
                                        {exp.title}
                                    </a>
                                ))}
                            </div>
                            <div className="mega-menu-section">
                                <h3>Concepts</h3>
                                {content.concepts.map((concept, index) => (
                                    <a 
                                        key={index}
                                        href={`#concept-${index}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <i className={concept.icon}></i>
                                        {concept.title}
                                    </a>
                                ))}
                            </div>
                            <div className="mega-menu-section">
                                <h3>Contact</h3>
                                <a href="mailto:karamhamza529@gmail.com">
                                    <i className="far fa-envelope"></i>
                                    Email
                                </a>
                                <a href="tel:+963990375460">
                                    <i className="fas fa-phone"></i>
                                    Phone
                                </a>
                                <a 
                                    href="https://www.instagram.com/karam.hamzi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-instagram"></i>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MegaMenu