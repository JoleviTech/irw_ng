// import React from 'react';
// import { ServicePage } from './services-template';
// import { bpo } from '../services/services-data';

// export const BusinessProcessOptimisation = () => <ServicePage service={bpo} />;

// export default BusinessProcessOptimisation;

import React from 'react';
import { container, section } from '../shared';
import { Page, HeroActions, Others, Cta } from './parts';
import { bpo as s } from '../services/services-data';

const grid = {
  backgroundImage: 'linear-gradient(rgba(12,0,14,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12,0,14,.06) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
};

const Cross = () => (
  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#0C000E" />
    <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Tick = () => (
  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#00FF00" stroke="#0C000E" />
    <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#0C000E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Flow = () => (
  <svg viewBox="0 0 520 260" className="w-full" role="img" aria-label="A tangled process on the left becomes a clean flow on the right">
    <g stroke="#0C000E" strokeOpacity=".35" strokeWidth="2" fill="none" strokeLinejoin="round">
      <path className="draw" pathLength="1" d="M40 60L100 200L160 90L60 150L140 170L40 60L160 90M100 200L60 150" />
    </g>
    {[[40, 60], [100, 200], [160, 90], [60, 150], [140, 170]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="9" fill="#fff" stroke="#0C000E" strokeWidth="2" />)}
    <path d="M200 130h50m-12-12l12 12-12 12" fill="none" stroke="#0C000E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path className="draw" pathLength="1" d="M300 130H480" stroke="#0C000E" strokeWidth="3" style={{ animationDelay: '.8s' }} />
    {[300, 360, 420, 480].map((x) => <circle key={x} cx={x} cy="130" r="13" fill="#00FF00" stroke="#0C000E" strokeWidth="2.5" />)}
    <text x="40" y="244" fontSize="15" fontWeight="600" fill="#0C000E" opacity=".6">Today</text>
    <text x="300" y="244" fontSize="15" fontWeight="700" fill="#0C000E">With a working process</text>
  </svg>
);

export const BusinessProcessOptimisation = () => (
  <Page>
    <section style={grid} className="border-b border-[#0C000E]/10">
      <div className={`${container} grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1fr_1.1fr] lg:pb-24 lg:pt-16`}>
        <div>
          <p className="display inline-block rounded-md border border-[#0C000E] bg-[#00FF00] px-3 py-1 text-sm font-bold">{s.name}</p>
          <h1 className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06]">{s.headline}</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.intro}</p>
          <HeroActions />
        </div>
        <div className="rounded-3xl border border-[#0C000E] bg-white p-5 shadow-[8px_8px_0_#0C000E] sm:p-8">
          <Flow />
        </div>
      </div>
    </section>

    <section className={section}>
      <div className={container}>
        <div className="max-w-2xl">
          <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{s.challenge.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.challenge.text}</p>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-[#0C000E] md:grid-cols-2">
          <div className="bg-[#F8F9FA] p-7 sm:p-10">
            <p className="display text-lg font-extrabold text-[#0C000E]/60">What it looks like now</p>
            <ul className="mt-6 space-y-5">
              {s.challenge.problems.map((p) => (
                <li key={p} className="flex gap-3 text-base leading-snug text-[#0C000E]/80 sm:text-lg"><Cross />{p}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[#0C000E] bg-[#00FF00] p-7 sm:p-10 md:border-l md:border-t-0">
            <p className="display text-lg font-extrabold">What it looks like after</p>
            <ul className="mt-6 space-y-5">
              {s.challenge.fixes.map((p) => (
                <li key={p} className="flex gap-3 text-base font-semibold leading-snug sm:text-lg"><Tick />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section style={grid} className={`${section} border-y border-[#0C000E]/10`}>
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16`}>
        <div className="rounded-3xl border border-[#0C000E] bg-white shadow-[8px_8px_0_#0C000E]">
          <div className="border-b border-[#0C000E] px-6 py-5 sm:px-8">
            <h2 className="display text-xl font-extrabold sm:text-2xl">What we do</h2>
            <p className="mt-1 text-sm text-[#0C000E]/60">Everything on this checklist can be taken on its own.</p>
          </div>
          <ul className="divide-y divide-[#0C000E]/15">
            {s.does.map(([t, d]) => (
              <li key={t} className="flex gap-4 px-6 py-5 sm:px-8">
                <Tick />
                <div>
                  <h3 className="display text-lg font-bold">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#0C000E]/75 sm:text-base">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:sticky lg:top-24">
          <img src={s.img.detail} alt="" className="h-72 w-full rounded-3xl border border-[#0C000E] bg-white object-cover lg:h-[28rem]" />
        </div>
      </div>
    </section>

    <section className="bg-[#0C000E] py-16 text-white lg:py-24">
      <div className={container}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our approach</h2>
          <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{s.approach}</p>
        </div>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-white/30 md:block" />
          {s.outcomes.map((o) => (
            <li key={o} className="relative flex gap-4 md:block">
              <span className="relative block h-10 w-10 shrink-0 rounded-full border-2 border-[#00FF00] bg-[#0C000E]"><span className="absolute inset-2.5 rounded-full bg-[#00FF00]" /></span>
              <p className="display text-xl font-bold leading-snug md:mt-6">{o}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section id="how-we-work" className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
        <ol className="mt-10 border border-[#0C000E]">
          {s.steps.map(([title, text, gets], i) => (
            <li key={title} className="grid border-b border-[#0C000E] last:border-b-0 md:grid-cols-[14rem_1fr_16rem]">
              <div className={`flex items-center gap-3 p-6 ${i === 1 ? 'bg-[#00FF00]' : 'bg-[#0C000E] text-white'}`}>
                <span className="display text-sm font-extrabold">Step {i + 1}</span>
                <h3 className="display text-xl font-bold">{title}</h3>
              </div>
              <p className="p-6 text-base leading-relaxed text-[#0C000E]/80">{text}</p>
              <p className="border-t border-[#0C000E]/15 bg-[#F8F9FA] p-6 text-sm font-semibold md:border-l md:border-t-0">You get: {gets}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Others current={s.name} />
    <Cta cta={s.cta} />
  </Page>
);

export default BusinessProcessOptimisation;