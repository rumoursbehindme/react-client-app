import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import config from '../config.json';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        ns: 'common',
        lng: config.language,
        defaultNS: 'common',
        fallbackLng: 'en',
        backend: {
            loadPath: '/locale/{{lng}}/{{ns}}.json'
        }
    })

export default i18n;