// LanguageSelector.js

import React from "react";
import i18n from "i18next";

const languages = [
  {
    code: "hi",
    lang: "Hindi",
  },
  {
    code: "bn",
    lang: "Bengali",
  },
  {
    code: "en",
    lang: "English",
  },
  {
    code: "fr",
    lang: "French",
  },

  {
    code: "es",
    lang: "Spanish",
  },
  {
    code: "de",
    lang: "German",
  },
  {
    code: "ta",
    lang: "Tamil",
  },
  {
    code: "te",
    lang: "Telugu",
  },
  {
    code: "kn",
    lang: "Kannada",
  },
  {
    code: "ml",
    lang: "Malayalam",
  },
  {
    code: "gu",
    lang: "Gujarati",
  },
  {
    code: "mr",
    lang: "Marathi",
  },
];

const LanguageSelector = () => {
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="w-full mb-4 p-3">
      {languages.map((el) => {
        return (
          <button
            className={`py-2.5 px-5 me-2 mb-2 text-white font-medium rounded-md text-  ${
              el.code === i18n.language ? "bg-white text-black" : ""
            }`}
            key={el.code}
            onClick={() => changeLanguage(el.code)}
          >
            {el.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
