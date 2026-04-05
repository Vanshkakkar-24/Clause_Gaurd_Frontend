export default function Marquee() {

  const items = [

    'University Students',
    'Freelancers',
    'SaaS Founders',
    'Upwork Professionals',
    'Product Designers',
    'Small Businesses',
    'Startup Teams',
    'Remote Workers',

  ]

  return (

    <div className="
      overflow-hidden
      py-4
      border-y
      border-white/5
      bg-slate-800
    ">

      <div
        className="
          flex
          gap-10 md:gap-14
          whitespace-nowrap
          animate-marquee
        "
      >

        {[...items, ...items].map((item, i) => (

          <span
            key={i}
            className="
              inline-flex
              items-center
              gap-2
              text-xs md:text-sm
              font-semibold
              text-white/40
            "
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
            >

              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>

              <circle cx="9" cy="7" r="4"/>

            </svg>

            {item}

          </span>

        ))}

      </div>

    </div>

  )

}