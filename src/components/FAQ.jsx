import { useState } from "react"

const FAQ = () => {

  const [open, setOpen] = useState(null)

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

            FAQ

          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">

            Frequently Asked Questions

          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                border
                rounded-xl
                shadow-sm
              "
            >

              <button
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

  )

}

const faqs = [

  {
    q: "Is my contract data secure?",
    a: "Yes. Contracts are encrypted with AES-256 and stored securely in isolated cloud infrastructure."
  },

  {
    q: "What file formats are supported?",
    a: "We support PDF and DOCX formats."
  },

  {
    q: "Is it free to use?",
    a: "Yes. Core features are completely free."
  },

  {
    q: "Can it replace a lawyer?",
    a: "No. It helps you understand contracts better but does not replace professional legal advice."
  },

  {
    q: "Does it work for all contract types?",
    a: "Yes. Works for employment, freelance, NDA, SaaS, vendor agreements and more."
  },

  {
    q: "How accurate is the AI analysis?",
    a: "AI provides highly accurate insights but we recommend reviewing critical agreements carefully."
  }

]

export default FAQ