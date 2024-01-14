// App.js

import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("desc");

  return (
    <>
      <div className="bg-slate-900 w-full h-screen p-12 flex flex-col gap-3">
        <LanguageSelector />
        <h1 className="font-medium text-3xl text-white">
          {t("greeting", {
            myName: "Subhajit",
          })}
        </h1>
        <p className="text-xl text-white">{line1}</p>
        <p className="text-xl text-white">{line2}</p>
      </div>
    </>
  );
}

export default App;
