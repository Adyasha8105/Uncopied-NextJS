// import React, { ChangeEvent, useState } from "react"
import React, { useState } from "react"
import { useTranslation } from 'react-i18next';

const LangLib = () => {
    const defaultLanguage = localStorage.getItem('i18nextLng') || "fr"
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(defaultLanguage);

    const changeLanguage = (event) => {
        let language = event.target.value;
        localStorage.setItem('i18nextLng', language);
        setLang(language);
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <div>
                <select className="lang" defaultValue={lang} value={lang} name="language" onChange={changeLanguage}>
                    <option className="center" value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    )
}

export default LangLib;