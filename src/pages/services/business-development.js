// import React from 'react';
// import { ServicePage } from './services-template';
// import { bd } from '../services/services-data';

// export const BusinessDevelopment = () => <ServicePage service={bd} />;

// export default BusinessDevelopment;

import React from 'react';
import { Link } from 'react-router-dom';
import { container, section, btnGreen } from '../shared';
import { Page, Others, Cta } from './parts';
import { bd as s } from '../services/services-data';

const bars = [28, 38, 34, 52, 66, 88];
const tiles = [
  'lg:col-span-2 bg-[#0C000E] text-white',
  'border border-[#0C000E]/15 bg-white',
  'bg-[#00FF00] border border-[#0C000E]',
  'lg:col-span-2 border border-[#0C000E]/15 bg-[#F8F9FA]',
  'border border-[#0C000E]/15 bg-white',
  'lg:col-span-2 bg-[#0C000E] text-white',
];
const widths = ['100%', '86%', '72%', '58%'];

export const BusinessDevelopment = () => (
  <Page>
    <section className="relative overflow-hidden bg-[#0C000E] text-white">
      <img src={s.img.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className={`${container} relative grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20`}>
        <div>
          <p className="text-sm font-semibold text-[#00FF00]">{s.name}</p>
          <h1 className="display mt-4 text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[1.04]">{s.headline}</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className={btnGreen}>Work With Us</Link>
            <a href="#how-we-work" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#0C000E]">See how we work</a>
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/20 bg-[#0C000E]/70 p-6 backdrop-blur sm:p-8">
          <p className="display text-base font-bold text-white/80">Pipeline, quarter by quarter</p>
          <div className="mt-6 flex h-56 items-end gap-3 border-b border-white/25 sm:h-64">
            {bars.map((h, i) => (
              <div key={i} className={`grow-y flex-1 rounded-t-lg ${i === bars.length - 1 ? 'bg-[#00FF00]' : 'bg-white/25'}`} style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
          <p className="display absolute right-4 top-4 rounded-full bg-[#00FF00] px-4 py-2 text-sm font-extrabold text-[#0C000E] sm:right-8">{s.chip}</p>
        </div>
      </div>
    </section>

    <section className={section}>
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20`}>
        <div>
          <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{s.challenge.title}</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.challenge.text}</p>
        </div>
        <ul className="space-y-3">
          {s.challenge.problems.map((p, i) => (
            <li key={p} className="rounded-2xl border border-[#0C000E]/15 border-l-4 border-l-[#00FF00] bg-[#F8F9FA] px-6 py-5" style={{ width: widths[i], marginLeft: 'auto' }}>
              <p className="display text-base font-bold leading-snug sm:text-lg">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={`${section} border-t border-[#0C000E]/10`}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">What we do</h2>
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {s.does.map(([t, d], i) => (
            <li key={t} className={`relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1 ${tiles[i]}`}>
              {i === 0 && <img src={s.img.detail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
              {i === 5 && <img src={s.img.challenge} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
              <div className="relative">
                <h3 className="display text-xl font-extrabold sm:text-2xl">{t}</h3>
                <p className={`mt-2 max-w-md text-sm leading-relaxed sm:text-base ${tiles[i].includes('text-white') ? 'text-white/80' : 'text-[#0C000E]/75'}`}>{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-y border-[#0C000E]/10 bg-[#F8F9FA] py-16 lg:py-24">
      <div className={container}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our approach</h2>
          <p className="max-w-xl text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.approach}</p>
        </div>
        <ul className="mt-12 grid border-t border-[#0C000E] sm:grid-cols-2 lg:grid-cols-4">
          {s.outcomes.map((o) => (
            <li key={o} className="flex min-h-[150px] flex-col justify-between border-b border-[#0C000E]/15 py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:border-[#0C000E]/15 lg:px-6 lg:first:pl-0 lg:last:border-r-0">
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true"><path d="M5 17L17 5M8 5h9v9" fill="none" stroke="#0C000E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="display mt-6 text-xl font-bold leading-snug">{o}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section id="how-we-work" className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
        <ol className="mt-10 grid items-end gap-5 md:grid-cols-3">
          {s.steps.map(([title, text, gets], i) => (
            <li key={title} className={`rounded-3xl border border-[#0C000E] p-7 ${i === 2 ? 'bg-[#00FF00]' : 'bg-white'} ${['md:pb-12', 'md:pb-24', 'md:pb-36'][i]}`}>
              <p className="display text-sm font-extrabold">Step {i + 1}</p>
              <h3 className="display mt-3 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#0C000E]/80">{text}</p>
              <p className="mt-5 text-sm font-semibold">You get: {gets}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Others current={s.name} />
    <Cta cta={s.cta} />
  </Page>
);

export default BusinessDevelopment;