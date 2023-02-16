import styles from './App.module.css'
import {useTranslation} from 'react-i18next'
import {useState} from 'react'

function App() {

  const {t, i18n:{changeLanguage, language}} = useTranslation()

  const [lang, setLang] = useState(language)

  function handleChangeLanguage(){
    const newLang = lang === 'en' ? 'ptBR' : 'en'
    setLang(newLang)
    changeLanguage(newLang)
  }

  return (
    <div className={styles.wrapper}>
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
      <p>{t("text")}</p>
      <button onClick={handleChangeLanguage}>
        {t("button")}
      </button>
    </div>
  )
}

export default App
