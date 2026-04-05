const Steps = () => (

  <section
    id="steps"
    className="
      py-24
      bg-gradient-to-r
      from-[#0b1026]
      to-[#121a3a]
      text-white
      relative
    "
  >

    <div className="max-w-6xl mx-auto px-6">

      <h2 className="
        text-4xl
        font-bold
        text-center
        mb-16
      ">

        Three Steps to Contract Clarity

      </h2>


      {/* connecting line */}

      <div className="
        hidden md:block
        absolute
        left-1/2
        top-40
        w-[60%]
        h-[2px]
        bg-gradient-to-r
        from-indigo-500/20
        via-indigo-400
        to-indigo-500/20
        -translate-x-1/2
      "/>


      <div className="
        grid
        md:grid-cols-3
        gap-10
        relative
      ">

        <Step
          icon="📄"
          title="Upload Contract"
          desc="Upload PDF or DOCX securely. Your contract stays private."
        />

        <Step
          icon="🤖"
          title="AI Analysis"
          desc="AI scans clauses, detects risks and simplifies legal language."
        />

        <Step
          icon="📊"
          title="Get Insights"
          desc="Receive risk score, explanations and negotiation suggestions."
        />

      </div>

    </div>

  </section>

)



const Step = ({ icon, title, desc }) => (

  <div
    className="
      p-8
      rounded-2xl
      bg-white/5
      border
      border-white/10
      backdrop-blur
      hover:bg-white/10
      transition
      text-center
      shadow-lg
    "
  >

    <div className="
      w-16
      h-16
      mx-auto
      mb-6
      rounded-full
      bg-indigo-500/20
      flex
      items-center
      justify-center
      text-2xl
      shadow
    ">

      {icon}

    </div>


    <h3 className="
      font-semibold
      text-lg
      mb-2
    ">

      {title}

    </h3>


    <p className="
      text-sm
      text-white/60
      leading-relaxed
    ">

      {desc}

    </p>

  </div>

)

export default Steps