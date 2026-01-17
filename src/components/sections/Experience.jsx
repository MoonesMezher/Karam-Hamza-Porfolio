import { useContent } from '../../hooks/useContent';

const Experience = () => {
    const { content } = useContent();

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">{content.experienceTitle}</h2>
                <div className="experience-grid">
                    {content.experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="experience-card"
                            data-aos="fade-up" 
                            data-aos-delay={index * 50}
                            data-aos-duration="500"
                        >
                            <div className="experience-icon">
                                <i className={exp.icon}></i>
                            </div>
                            <h3 className="experience-title">{exp.title}</h3>
                            <div className="experience-content">
                                <p>{exp.description}</p>
                                <ul className="experience-list">
                                    {exp.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;