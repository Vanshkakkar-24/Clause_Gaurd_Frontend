import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (

    <footer className="bg-gradient-to-r from-[#0b1026] to-[#121a3a] border-t border-white/10 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">

        {/* BRAND */}

        <div>
          <h2 className="text-lg font-semibold text-indigo-400 mb-3">
            {t("nav.brand")}
          </h2>

          <p className="text-white/60 leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* PRODUCT */}

        <div>
          <h3 className="font-semibold mb-3">
            {t("footer.product")}
          </h3>
          <ul className="space-y-2 text-white/60">
            <li>{t("footer.items.analysis")}</li>
            <li>{t("footer.items.risk")}</li>
            <li>{t("footer.items.negotiation")}</li>
            <li>{t("footer.items.simplify")}</li>
          </ul>
        </div>

        {/* COMPANY */}

        <div>
          <h3 className="font-semibold mb-3">
            {t("footer.company")}
          </h3>
          <ul className="space-y-2 text-white/60">
            <li>{t("footer.items.about")}</li>
            <li>{t("footer.items.privacy")}</li>
            <li>{t("footer.items.terms")}</li>
            <li>{t("footer.items.contact")}</li>
          </ul>
        </div>

        {/* CTA */}

        <div>
          <h3 className="font-semibold mb-3">
            {t("footer.getStarted")}
          </h3>
          <p className="text-white/60 mb-3">
            {t("footer.ctaText")}
          </p>
          <button type="button" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm">
            {t("footer.ctaButton")}
          </button>
        </div>
      </div>

      {/* bottom bar */}

      <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs">
        {t("footer.copyright")}
      </div>

    </footer>
  );

};

export default Footer;
