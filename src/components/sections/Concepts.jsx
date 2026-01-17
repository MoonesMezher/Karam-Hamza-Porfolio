import { useContent } from '../../hooks/useContent';

const Concepts = () => {
    const { content } = useContent();

    return (
        <section id="concepts" className="section">
            <div className="container">
                <h2 className="section-title">{content.conceptsTitle}</h2>
                <div className="concepts-grid">
                    {content.concepts.map((concept, index) => (
                        <div 
                            key={index} 
                            className="concept-card"
                            data-aos="fade-up" 
                            data-aos-delay={index * 50}
                            data-aos-duration="500"
                        >
                            <div className="concept-icon">
                                <i className={concept.icon}></i>
                            </div>
                            <h3 className="concept-title">{concept.title}</h3>
                            <p className="concept-description">{concept.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Concepts;