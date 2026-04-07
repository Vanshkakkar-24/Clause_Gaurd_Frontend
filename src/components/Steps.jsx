const Steps = () => (

<section
id="steps"
className="py-32 bg-gradient-to-b from-[#050816] via-[#04050f] to-black text-white"
>

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-semibold mb-4 tracking-wide">
Precision Scan
</h2>

<p className="text-slate-400 mb-16">
AI powered contract understanding in 3 simple steps
</p>

<div className="grid md:grid-cols-3 gap-10">

{[
{
title: "Upload contract",
desc: "Upload PDF, DOCX or TXT securely"
},
{
title: "AI scans clauses",
desc: "Our AI detects risky legal language"
},
{
title: "Get risk insights",
desc: "Clear insights with safer suggestions"
}
].map((step, i) => (

<div
key={i}
className="
group
p-8
rounded-2xl
bg-gradient-to-b from-white/5 to-white/[0.02]
border border-white/10
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
transition
duration-300
"
>

<div className="text-cyan-400 text-sm mb-3">
0{i + 1}
</div>

<h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition">
{step.title}
</h3>

<p className="text-slate-400 text-sm">
{step.desc}
</p>

</div>

))}

</div>

</div>

</section>

)

export default Steps