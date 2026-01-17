import { useContent } from '../hooks/useContent';

const Footer = () => {
    const { content } = useContent();

    return (
        <footer>
            <div className="container">
                <div className="copyright">
                    <p>{content.copyrightText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;