const Testimonials = () => (

  <section className="py-28 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-14">

        Trusted by Students, Freelancers & Businesses

      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map(t => (

          <div
            key={t.name}
            className="border p-6 rounded-xl"
          >

            ⭐⭐⭐⭐⭐

            <p className="text-gray-600 text-sm mt-3">

              {t.text}

            </p>

            <div className="mt-4 font-medium">

              {t.name}

            </div>

          </div>

        ))}

      </div>

    </div>

  </section>

)

const testimonials = [

  {
    name: "Sarah Chen",
    text: "Helped me detect hidden clause"
  },

  {
    name: "Marcus Williams",
    text: "Saved hours of manual review"
  },

  {
    name: "Priya Mehta",
    text: "Perfect for students"
  }

]

export default Testimonials