// Example of a simple language switcher component
import { useTranslation } from "next-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => switchLanguage("en")}>EN</button>
      <button onClick={() => switchLanguage("lt")}>LT</button>
    </div>
  );
};

export default LanguageSwitcher;
