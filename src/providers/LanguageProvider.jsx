import { useEffect } from 'react';
import useLang from '../stores/Language';

const LanguageProvider = ({ children }) => {
    const { lang } = useLang();

    useEffect(() => {
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            document.documentElement.lang = 'ar';
        } else {
            document.body.setAttribute('dir', 'ltr');
            document.documentElement.lang = 'en';
        }
    }, [lang]);

    return <>{children}</>;
};

export default LanguageProvider;