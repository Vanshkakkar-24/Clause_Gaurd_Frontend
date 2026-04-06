import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Features = () => {

  const { t } = useTranslation();

  const features = useMemo(() => ([
    { title: t("features.items.smartRisk.title"), desc: t("features.items.smartRisk.desc") },
    { title: t("features.items.simplifier.title"), desc: t("features.items.simplifier.desc") },
    { title: t("features.items.compare.title"), desc: t("features.items.compare.desc") },
    { title: t("features.items.negotiate.title"), desc: t("features.items.negotiate.desc") },
    { title: t("features.items.chat.title"), desc: t("features.items.chat.desc") },
    { title: t("features.items.multiLang.title"), desc: t("features.items.multiLang.desc") },
  ]), [t]);

  return (

    <section id="features" className="py-28 bg-white text-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-indigo-500 text-sm">

            {t("features.label")}

          </span>

          <h2 className="text-4xl font-bold mt-3">

            {t("features.title")}

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((f) => (

            <div
              key={f.title}
              className="border p-6 rounded-xl hover:shadow-lg"
            >

              <div className="text-indigo-500 font-semibold mb-2">

                {f.title}

              </div>

              <p className="text-gray-500 text-sm">

                {f.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Features;
