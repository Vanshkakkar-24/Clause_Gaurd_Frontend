import { useState } from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-ethereal-dark relative z-10 selection:bg-ethereal-brand selection:text-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ethereal-brand/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Precision Intelligence, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ethereal-brandLight to-ethereal-brandDark">Predictable</span> Pricing.
          </h2>
          <p className="text-ethereal-textMuted max-w-2xl mx-auto text-[15px]">
            Unlock synthetic intelligence designed for modern legal architects.<br/>
            Scale your contract analysis with absolute confidence.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-ethereal-textMuted'}`}>Monthly</span>
          <button 
            className="w-12 h-6 rounded-full bg-ethereal-surface border border-ethereal-border relative transition flex items-center px-1"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={`w-4 h-4 rounded-full bg-ethereal-brand transition-all ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-ethereal-textMuted'} flex items-center gap-2`}>
            Yearly <span className="text-[10px] uppercase tracking-wider text-ethereal-brandLight px-2 py-0.5 rounded-full border border-ethereal-brand/30 bg-ethereal-brand/10">Save 20%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Free */}
          <div className="bg-ethereal-card border border-ethereal-border rounded-[24px] p-8 flex flex-col h-full hover:border-ethereal-border/80 transition">
            <h3 className="text-xl font-semibold text-white mb-1">Free</h3>
            <p className="text-ethereal-textMuted text-sm mb-6">For individuals</p>
            <div className="text-4xl font-bold text-white mb-8">
              ₹0 <span className="text-lg text-ethereal-textMuted font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-auto text-[14px] text-ethereal-text">
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> 3 contracts/mo</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> 50 AI credits</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> 500 MB storage</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> Basic risk analysis</li>
            </ul>
            <button className="mt-8 w-full py-3 rounded-lg border border-ethereal-border bg-transparent text-ethereal-textMuted hover:text-white hover:bg-ethereal-surface transition font-semibold text-sm tracking-wider uppercase">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-gradient-to-b from-[#082221] to-[#041010] border border-ethereal-brand rounded-[24px] p-8 flex flex-col h-[105%] shadow-[0_0_30px_rgba(45,212,191,0.15)] z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ethereal-brand text-[#041010] text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.4)]">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">Pro</h3>
            <p className="text-ethereal-brandLight text-sm mb-6">For professionals</p>
            <div className="text-4xl font-bold text-white mb-8">
              ₹{isYearly ? '399' : '499'} <span className="text-lg text-ethereal-textMuted font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-auto text-[14px] text-ethereal-text">
              <li className="flex items-center gap-3"><span className="text-ethereal-brandLight text-lg">✓</span> 15 contracts/mo</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brandLight text-lg">✓</span> 300 AI credits</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brandLight text-lg">✓</span> 2 GB storage</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brandLight text-lg">✓</span> Advanced risk scoring</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brandLight text-lg">✓</span> Contract comparison</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brandLight text-lg">✓</span> Negotiation suggestions</li>
            </ul>
            <button className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-ethereal-brandLight to-ethereal-brand text-[#041010] shadow-[0_0_15px_rgba(45,212,191,0.4)] hover:shadow-[0_0_25px_rgba(45,212,191,0.6)] transition font-bold text-sm tracking-wider uppercase">
              Upgrade Now
            </button>
          </div>

          {/* Gold */}
          <div className="bg-ethereal-card border border-ethereal-border rounded-[24px] p-8 flex flex-col h-full hover:border-ethereal-border/80 transition">
            <h3 className="text-xl font-semibold text-white mb-1">Gold</h3>
            <p className="text-ethereal-textMuted text-sm mb-6">For organizations</p>
            <div className="text-4xl font-bold text-white mb-8">
              ₹{isYearly ? '719' : '899'} <span className="text-lg text-ethereal-textMuted font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-auto text-[14px] text-ethereal-text">
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> 60 contracts/mo</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> 1500 AI credits</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> 10 GB storage</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> Priority AI processing</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> Bulk analysis</li>
              <li className="flex items-center gap-3"><span className="text-ethereal-brand text-lg">✓</span> Advanced insights</li>
            </ul>
            <button className="mt-8 w-full py-3 rounded-lg border border-ethereal-border bg-transparent text-ethereal-textMuted hover:text-white hover:bg-ethereal-surface transition font-semibold text-sm tracking-wider uppercase">
              Go Premium
            </button>
          </div>

        </div>

        {/* Engineered for Accuracy section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10 text-white">Engineered for Accuracy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#061717] to-[#030a0a] border border-ethereal-border rounded-2xl p-8">
              <div className="text-[10px] text-ethereal-brand font-bold tracking-widest uppercase mb-3">Synthetic Vision</div>
              <h4 className="text-lg font-semibold text-white mb-2">Contextual Risk Engine</h4>
              <p className="text-sm text-ethereal-textMuted">
                Our AI doesn't just read words; it understands legal liability. Identify toxic clauses before they become legal debt.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#061717] to-[#030a0a] border border-ethereal-border rounded-2xl p-8">
              <div className="text-ethereal-brand text-xl mb-3">🛡️</div>
              <h4 className="text-lg font-semibold text-white mb-2">Immutable Security</h4>
              <p className="text-sm text-ethereal-textMuted">
                Zero-knowledge encryption for all document storage and AI processing logs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
