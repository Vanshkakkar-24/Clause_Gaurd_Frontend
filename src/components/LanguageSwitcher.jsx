import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {

  const { i18n, t } = useTranslation();

  return (

    <label className="flex items-center gap-2 text-sm">

      <span className="text-slate-400 sr-only md:not-sr-only md:inline">
        {t("language.label")}
      </span>

      <select
        value={i18n.resolvedLanguage?.startsWith("hi") ? "hi" : "en"}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="
          bg-white/10
          border border-white/15
          text-slate-200
          rounded-lg
          px-2 py-1.5
          text-sm
          cursor-pointer
          hover:bg-white/15
          focus:outline-none focus:ring-2 focus:ring-indigo-500
        "
        aria-label={t("language.label")}
      >

        <option value="en">{t("language.en")}</option>

        <option value="hi">{t("language.hi")}</option>

      </select>

    </label>

  );

};

export default LanguageSwitcher;
