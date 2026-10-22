// import React from 'react';
// import { ServicePage } from './services-template';
// import { hr } from '../services/services-data';

// export const HRServices = () => <ServicePage service={hr} />;

// export default HRServices;

import React from 'react';
import { container, section } from '../shared';
import { Page, Check, HeroActions, Others, Cta } from './parts';
import { hr as s } from '../services/services-data';

export const HRServices = () => (
  <Page>
    <section className={`${container} grid items-center gap-14 pb-16 pt-10 lg:grid-cols-2 lg:pb-24 lg:pt-16`}>
      <div>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C000E]/70">
          <span className="h-2 w-2 rounded-full bg-[#00FF00] ring-2 ring-[#0C000E]" />
          {s.name}
        </p>
        <h1 className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06]">{s.headline}</h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.intro}</p>
        <HeroActions />
      </div>

      <div className="relative mx-auto grid h-[440px] w-full max-w-[500px] grid-cols-[1.1fr_1fr] grid-rows-[1.3fr_1fr] gap-4 sm:h-[520px]">
        <img src={s.img.hero} alt="" className="row-span-2 h-full w-full rounded-b-3xl rounded-t-[999px] bg-[#F8F9FA] object-cover" />
        <img src={s.img.inset} alt="" className="aspect-square w-full self-end rounded-full bg-[#F8F9FA] object-cover" style={{ animation: 'floaty 7s ease-in-out infinite' }} />
        <img src={s.img.detail} alt="" className="h-full w-full rounded-full bg-[#F8F9FA] object-cover" />
        <p className="display absolute -left-2 bottom-8 rounded-2xl bg-[#00FF00] px-5 py-3 text-base font-extrabold shadow-xl sm:-left-6" style={{ transform: 'rotate(-4deg)' }}>{s.chip}</p>
      </div>
    </section>

    <section className={`${section} bg-[#F8F9FA]`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{s.challenge.title}</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.challenge.text}</p>
        </div>
        <ul className="space-y-5">
          {s.challenge.problems.map((p, i) => (
            <li key={p} className={`max-w-lg rounded-3xl px-6 py-5 text-lg font-semibold leading-snug sm:text-xl ${i % 2 ? 'ml-auto rounded-br-md bg-[#0C000E] text-white' : 'rounded-bl-md border border-[#0C000E]/15 bg-white'}`}>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={section}>
      <div className={container}>
        <h2 className="display max-w-2xl text-2xl font-bold sm:text-3xl lg:text-4xl">What we do, across the life of an employee</h2>
        <ol className="relative mx-auto mt-14 max-w-4xl">
          <span className="absolute bottom-0 left-[7px] top-0 w-px bg-[#0C000E]/20 lg:left-1/2" />
          {s.does.map(([t, d], i) => (
            <li key={t} className="relative pb-12 pl-10 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-[#0C000E] bg-[#00FF00] lg:left-1/2 lg:-translate-x-1/2" />
              <div className={i % 2 ? 'lg:col-start-2' : 'lg:text-right'}>
                <h3 className="display text-xl font-bold sm:text-2xl">{t}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#0C000E]/75">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="border-y border-[#0C000E] bg-[#00FF00] py-16 lg:py-24">
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20`}>
        <div>
          <h2 className="display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">Our approach</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed sm:text-lg">{s.approach}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {s.outcomes.map((o) => (
            <li key={o} className="flex gap-3 rounded-3xl border border-[#0C000E] bg-white p-6">
              <Check />
              <span className="display text-lg font-bold leading-snug">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section id="how-we-work" className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
        <ol className="mt-10 divide-y divide-[#0C000E]/15 border-y border-[#0C000E]/15">
          {s.steps.map(([title, text, gets], i) => (
            <li key={title} className="grid items-start gap-4 py-8 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-10">
              <div className="flex items-center gap-4">
                <span className="display flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0C000E] bg-[#00FF00] text-lg font-extrabold">{i + 1}</span>
                <h3 className="display text-2xl font-bold">{title}</h3>
              </div>
              <p className="text-base leading-relaxed text-[#0C000E]/75">{text}</p>
              <p className="text-sm font-semibold lg:text-right">You get: {gets}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Others current={s.name} />
    <Cta cta={s.cta} tone="dark" />
  </Page>
);

export default HRServices;