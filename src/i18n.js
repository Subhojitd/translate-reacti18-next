// i18n.js

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    lng: "hi",

    resources: {
      hi: {
        translation: {
          greeting: "नए साल की शुभकामनाएँ {{myName}} 🎉🎊",
          desc: {
            line1:
              "नए साल का आगमन नई उम्मीदों के साथ लाता है, खुशियों से भरा हर पल हमारे लिए मिठास लाता है।",
            line2: "नए साल की शुरुआत नए सपनों के साथ, नए उम्मीदों के साथ।",
          },
        },
      },
      bn: {
        translation: {
          greeting: "নববর্ষের শুভেচ্ছা {{myName}} 🎉🎊",
          desc: {
            line1:
              "নববর্ষের সাথে নতুন আশা, নতুন আকাঙ্ক্ষা এবং আনন্দে আমাদের স্বপ্ন পুনরায় অনুসরণ করতে একটি নতুন উৎসাহ আনুক।",
            line2:
              "নতুন বছরের আগমন একটি নতুন সময় স্বপ্ন দেখার এবং নতুন আকাঙ্ক্ষা অনুসরণ করার একটি সুযোগ।",
          },
        },
      },
      en: {
        translation: {
          greeting: "Happy New Year {{myName}} 🎉🎊",
          desc: {
            line1:
              "As the New Year dawns, may it bring new hopes, new aspirations, and a renewed zest to chase our dreams with joy.",
            line2:
              "The onset of the New Year is a chance to dream new dreams and pursue new aspirations.",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Bonne année {{myName}} 🎉🎊",
          desc: {
            line1:
              "Le nouvel an apporte avec lui de nouvelles opportunités, de nouvelles aventures et une chance renouvelée de poursuivre nos rêves avec enthousiasme.",
            line2:
              "Le début de la nouvelle année est l'occasion de rêver de nouveaux rêves et de poursuivre de nouvelles aspirations.",
          },
        },
      },

      es: {
        translation: {
          greeting: "¡Feliz Año Nuevo {{myName}} 🎉🎊",
          desc: {
            line1:
              "Con el comienzo del nuevo año, que la alegría y la prosperidad llenen cada día de tu vida.",
            line2:
              "Que el nuevo año traiga consigo momentos llenos de amor y éxito.",
          },
        },
      },
      de: {
        translation: {
          greeting: "Frohes neues Jahr {{myName}} 🎉🎊",
          desc: {
            line1:
              "Mit dem Beginn des neuen Jahres möge es neue Hoffnungen, neue Aspirationen und einen erneuerten Eifer bringen, unsere Träume mit Freude zu verfolgen.",
            line2:
              "Der Anfang des neuen Jahres ist eine Gelegenheit, neue Träume zu träumen und neue Aspirationen zu verfolgen.",
          },
        },
      },
      ml: {
        translation: {
          greeting: "പുതുവത്സരാശംസകൾ {{myName}} 🎉🎊",
          desc: {
            line1:
              "പുതുവത്സരം പ്രാരംഭിച്ചത് പുതിയ ആകാശങ്ങളും, പുതിയ ആഗ്രഹങ്ങളും കൊണ്ടുവരട്ടെ.",
            line2:
              "പുതുവത്സരം പുതിയ സ്വപ്നങ്ങൾ കാണുകയും പുതിയ ആശയങ്ങൾ പിന്തുടരുകയും ചെയ്യുക.",
          },
        },
      },
      te: {
        translation: {
          greeting: "నూతన సంవత్సర శుభాకాంక్షలు {{myName}} 🎉🎊",
          desc: {
            line1:
              "నూతన సంవత్సరం తొలగించేటప్పుడు, అందరూ నవ్వుతూ, హర్షాన్వితంగా ఉండాలని కోరుకుంటున్నారు.",
            line2:
              "నూతన సంవత్సరం కోసం పునఃపునః కోరుకుని, నేపథ్యాలను అనుసరించి, అమలులు నడపడాలని కోరుకుంటున్నారు.",
          },
        },
      },
      kn: {
        translation: {
          greeting: "ಹೊಸ ವರ್ಷದ ಹಾರ್ದಿಕ ಶುಭಾಷಯಗಳು {{myName}} 🎉🎊",
          desc: {
            line1:
              "ಹೊಸ ವರ್ಷ ಹೊಸ ನಿರೀಕ್ಷೆಗಳು, ಹೊಸ ಆಸೆಗಳು ಮತ್ತು ನಮ್ಮ ಸ್ವಪ್ರೇರಿತ ಸಾಗರದ ಜೊತೆಗೆ ಬಂದಿವೆ.",
            line2:
              "ಹೊಸ ವರ್ಷದ ಆರಂಭ ಹೊಸ ಕನಸುಗಳನ್ನು ಕನಸಿಸುವ ಮತ್ತು ಹೊಸ ಆಸೆಗಳನ್ನು ಹಿಡಿಯುವ ಅವಕಾಶವಾಗಿದೆ.",
          },
        },
      },
      gu: {
        translation: {
          greeting: "નૂતન વર્ષાભિનંદન {{myName}} 🎉🎊",
          desc: {
            line1:
              "નવા વર્ષ સાથે, તે નવા આશાઓ, નવા આકાંક્ષાઓ અને આનંદની સાથે આવી શકે, આવી શકે.",
            line2:
              "નવા વર્ષનો આરંભ નવા સપનાઓ દેખવાનો અને નવા આકાંક્ષાઓ અનેજસથી મોકલવાનો એક અવસર છે.",
          },
        },
      },

      mr: {
        translation: {
          greeting: "नववर्षाच्या शुभेच्छा {{myName}} 🎉🎊",
          desc: {
            line1:
              "नववर्षाच्या सुरुवाती, हे नवीन आशाएं, नवीन आकांक्षांचं आणि आमचं सपने पूर्ण करण्यासाठी उत्साह घेऊन यावंता येईल.",
            line2:
              "नववर्षाची सुरुवात नवीन स्वप्ने दाखवण्याची आणि नवीन आकांक्षांचं पुर्सकृत करण्याची एक अवसर आहे.",
          },
        },
      },
    },
  });

export default i18n;
