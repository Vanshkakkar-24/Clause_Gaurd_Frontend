const Testimonials = () => {

const data = [

{
name:"Julian Vance",
text:"Synthic AI flagged risky clauses instantly."
},

{
name:"Elena Ros",
text:"Saved hours of legal review time."
},

{
name:"Marcus Chen",
text:"Contract review became effortless."
},

]

return (

<section className="bg-gradient-to-b from-[#050816] via-[#04050f] to-black py-32 text-white">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-semibold mb-4">
Trusted by professionals
</h2>

<p className="text-slate-400 mb-16">
Helping teams review contracts faster with AI precision
</p>

<div className="grid md:grid-cols-3 gap-10">

{data.map((t,i) => (

<div
key={t.name}
className="
group
p-8
rounded-2xl
bg-gradient-to-b from-white/5 to-white/[0.02]
border border-white/10
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
transition duration-300
text-left
"
>

<div className="text-cyan-400 text-3xl mb-4">
“
</div>

<p className="text-slate-300 leading-relaxed">
{t.text}
</p>

<div className="mt-6">

<div className="text-cyan-400 font-medium">
{t.name}
</div>

<div className="text-xs text-slate-500">
Verified User
</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default Testimonials