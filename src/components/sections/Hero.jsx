import { useContent } from '../../hooks/useContent';
import Image from "/public/Karam Hamza.jpeg"

const Hero = () => {
    const { content } = useContent();

    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: content.heroTitle }} />
                        <h2 className="hero-subtitle">{content.heroSubtitle}</h2>
                        <p className="hero-description">{content.heroDescription}</p>
                        <div className="social-links">
                            <a 
                                href="https://www.instagram.com/karam.hamzi" 
                                className="social-link" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="mailto:karamhamza529@gmail.com" className="social-link">
                                <i className="far fa-envelope"></i>
                            </a>
                            <a href="tel:+963990375460" className="social-link">
                                <i className="fas fa-phone"></i>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image" data-aos="zoom-up" data-aos-delay={100} data-aos-duration="500">
                        <div className="profile-img-container">
                            <img 
                                src={Image}
                                alt="Karam Hamza" 
                                className="profile-img" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;