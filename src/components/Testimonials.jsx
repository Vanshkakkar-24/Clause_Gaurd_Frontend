import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {

  const { t } = useTranslation();

  const testimonials = useMemo(() => ([
    { name: t("testimonials.t1.name"), text: t("testimonials.t1.text") },
    { name: t("testimonials.t2.name"), text: t("testimonials.t2.text") },
    { name: t("testimonials.t3.name"), text: t("testimonials.t3.text") },
  ]), [t]);

  return (

    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14 text-gray-700">

          {t("testimonials.title")}

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="border p-6 rounded-xl"
            >

              ⭐⭐⭐⭐⭐

              <p className="text-gray-600 text-sm mt-3 ">

                {item.text}

              </p>

              <div className="mt-4 font-medium text-gray-600">

                {item.name}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Testimonials;
