const Features = () => {

const features = [

{
title:"AI Contract Drafting",
desc:"Generate legally sound contracts from simple prompts"
},

{
title:"Contract Risk Analysis",
desc:"Detect risky clauses instantly using AI"
},

{
title:"Contract Comparison",
desc:"Compare multiple agreements clause by clause"
},

{
title:"Simplifier",
desc:"Convert legal jargon into easy language"
},

{
title:"Negotiation Suggestions",
desc:"AI suggests counter clauses to improve position"
},

]

return (

<section id="features" className="bg-[#050816] py-32 text-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-3xl mb-16 font-semibold">
Neural Contract Modules
</h2>

<div className="grid md:grid-cols-3 gap-8">

{features.map(f => (

<div
key={f.title}
className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
>

<h3 className="font-medium text-cyan-300 mb-2">
{f.title}
</h3>

<p className="text-sm text-slate-400">
{f.desc}
</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Features