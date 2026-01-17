import useLang from '../stores/Language';
import { contentData } from '../data/content';

export const useContent = () => {
    const { lang } = useLang();
    const content = contentData[lang];
    
    return {
        lang,
        content,
        isArabic: lang === 'ar',
        isEnglish: lang === 'en'
    };
};