import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        ru: {
            translation: {
                button: 'Подать заявку',
                li: {
                  0: 'Проекты', 
                  1: 'Как мы работаем', 
                  2: 'Команда', 
                  3: 'Контакты'
                }
            },
        },
        en: {
            translation: {
                button: 'Send',
                li: {
                  0: 'Projects', 
                  1: 'Our work', 
                  2: 'Team', 
                  3: 'Contacts'
                }
            }
        }    
    }
  })

export default i18n;