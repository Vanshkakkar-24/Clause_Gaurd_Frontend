import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {

  const { t } = useTranslation();

  const [open, setOpen] = useState(null);

  const faqs = useMemo(() => ([
    { q: t("faq.items.q1.q"), a: t("faq.items.q1.a") },
    { q: t("faq.items.q2.q"), a: t("faq.items.q2.a") },
    { q: t("faq.items.q3.q"), a: t("faq.items.q3.a") },
    { q: t("faq.items.q4.q"), a: t("faq.items.q4.a") },
    { q: t("faq.items.q5.q"), a: t("faq.items.q5.a") },
    { q: t("faq.items.q6.q"), a: t("faq.items.q6.a") },
  ]), [t]);

  return (

    <section id="faq" className="py-28 bg-gray-50">

      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="
            bg-indigo-100
            text-indigo-600
            px-4 py-1
            rounded-full
            text-sm
            font-medium
          ">

            {t("faq.badge")}

          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">

            {t("faq.title")}

          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((item, index) => (

            <div
              key={item.q}
              className="
                bg-white
                border
                rounded-xl
                shadow-sm
              "
            >

              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  px-6 py-4
                  text-left
                  font-medium
                  text-gray-900
                "
              >

                {item.q}

                <span className="text-indigo-600 text-xl">

                  {open === index ? "−" : "+"}

                </span>

              </button>

              {open === index && (

                <div className="
                  px-6 pb-5
                  text-gray-600
                  text-sm
                ">

                  {item.a}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default FAQ;
