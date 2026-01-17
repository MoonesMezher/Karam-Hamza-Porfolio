import { useContent } from '../../hooks/useContent';

const Contact = () => {
    const { content } = useContent();

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">{content.contactTitle}</h2>
                
                <div className="contact-grid">
                    <div className="contact-card" data-aos="fade-up" data-aos-delay={0} data-aos-duration="500">
                        <h3>{content.contactInfoTitle}</h3>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4>{content.phoneLabel}</h4>
                                <p dir="ltr">+963990375460</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="far fa-envelope"></i>
                            </div>
                            <div>
                                <h4>{content.emailLabel}</h4>
                                <p>karamhamza529@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div>
                                <h4>{content.instagramLabel}</h4>
                                <p>karam.hamzi</p>
                            </div>
                        </div>
                        
                        <div className="social-links">
                            <a href="tel:+963990375460" className="social-link">
                                <i className="fas fa-phone"></i>
                            </a>
                            <a href="mailto:karamhamza529@gmail.com" className="social-link">
                                <i className="far fa-envelope"></i>
                            </a>
                            <a 
                                href="https://www.instagram.com/karam.hamzi" 
                                className="social-link" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="contact-card" data-aos="fade-up" data-aos-delay={0} data-aos-duration="500">
                        <h3>{content.skillsTitle}</h3>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <div>
                                <h4>{content.operationsLabel}</h4>
                                <p>{content.operationsDesc}</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div>
                                <h4>{content.customerServiceLabel}</h4>
                                <p>{content.customerServiceDesc}</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div>
                                <h4>{content.inventoryLabel}</h4>
                                <p>{content.inventoryDesc}</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div>
                                <h4>{content.salesLabel}</h4>
                                <p>{content.salesDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;