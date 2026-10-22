// import React from 'react';
// import { ServicePage } from './services-template';
// import { facilitation } from './services-data';

// export const Facilitation = () => <ServicePage service={facilitation} />;

// export default Facilitation;

import React from 'react';
import { container, section } from '../shared';
import { Page, Check, HeroActions, Others, Cta } from './parts';
import { facilitation as s } from '../services/services-data';

const notes = [
  'bg-[#00FF00] text-[#0C000E] -rotate-3',
  'bg-white text-[#0C000E] rotate-2',
  'bg-[#B8FFB8] text-[#0C000E] rotate-1',
  'bg-[#F8F9FA] text-[#0C000E] -rotate-2',
];

export const Facilitation = () => (
  <Page>
    <section className={`${container} pb-16 pt-8 lg:pb-24 lg:pt-12`}>
      <div className="relative">
        <img src={s.img.hero} alt="" className="h-[360px] w-full rounded-[2rem] bg-[#F8F9FA] object-cover sm:h-[460px] lg:h-[540px]" />
        <div className="relative -mt-24 max-w-2xl rounded-3xl border border-[#0C000E] bg-white p-7 shadow-xl sm:-mt-32 sm:ml-8 sm:p-10 lg:absolute lg:bottom-8 lg:left-8 lg:mt-0">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C000E]/70">
            <span className="h-2 w-2 rounded-full bg-[#00FF00] ring-2 ring-[#0C000E]" />
            {s.name}
          </p>
          <h1 className="display mt-4 text-[clamp(1.875rem,3.8vw,3.25rem)] font-extrabold leading-[1.06]">{s.headline}</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.intro}</p>
          <HeroActions />
        </div>
        <p className="display absolute right-4 top-4 w-36 rounded-sm bg-[#00FF00] p-4 text-base font-extrabold leading-snug shadow-xl sm:right-8 sm:top-8 sm:w-44" style={{ transform: 'rotate(4deg)' }}>{s.chip}</p>
      </div>
    </section>

    <section className="bg-[#0C000E] py-16 text-white lg:py-24">
      <div className={container}>
        <div className="max-w-2xl">
          <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{s.challenge.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{s.challenge.text}</p>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {s.challenge.problems.map((p, i) => (
            <li key={p} className={`relative flex aspect-square flex-col justify-center p-7 shadow-2xl transition-transform hover:rotate-0 ${notes[i]}`}>
              <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 bg-white/50" />
              <p className="display text-xl font-bold leading-snug">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">What we do</h2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {s.does.map(([t, d], i) => (
            <li key={t} className={`overflow-hidden rounded-3xl border border-[#0C000E] bg-white transition-transform hover:rotate-0 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
              <p className="display bg-[#00FF00] px-6 py-3 text-center text-sm font-extrabold">Hello, we run</p>
              <div className="px-6 pb-8 pt-7 text-center">
                <h3 className="display text-2xl font-extrabold leading-tight">{t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#0C000E]/75 sm:text-base">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-y border-[#0C000E]/10 bg-[#F8F9FA] py-16 lg:py-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20`}>
        <div>
          <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our approach</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.approach}</p>
          <img src={s.img.outcomes} alt="" className="mt-8 hidden h-56 w-full max-w-md rounded-3xl bg-white object-cover lg:block" />
        </div>
        <div className="relative rounded-2xl border border-[#0C000E] bg-white px-7 pb-10 pt-12 shadow-[8px_8px_0_#0C000E] sm:px-10">
          <div className="absolute inset-x-0 top-0 flex justify-around px-6" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => <span key={i} className="-mt-3 h-6 w-3 rounded-full border-2 border-[#0C000E] bg-[#F8F9FA]" />)}
          </div>
          <p className="display text-lg font-extrabold">By the end of the session</p>
          <ul className="mt-6 space-y-5">
            {s.outcomes.map((o) => (
              <li key={o} className="flex gap-3 border-b border-dashed border-[#0C000E]/25 pb-5 last:border-b-0 last:pb-0">
                <Check />
                <span className="display text-xl font-bold leading-snug">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section id="how-we-work" className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
        <ol className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {s.steps.map(([title, text, gets], i) => (
            <li key={title} className={`rounded-3xl border border-[#0C000E] p-7 sm:p-8 ${i === 1 ? 'bg-[#0C000E] text-white md:-my-6 md:py-14' : 'bg-white'}`}>
              <span className={`display inline-flex h-11 w-11 items-center justify-center rounded-full border text-lg font-extrabold ${i === 1 ? 'border-[#00FF00] bg-[#00FF00] text-[#0C000E]' : 'border-[#0C000E] bg-[#00FF00]'}`}>{i + 1}</span>
              <h3 className="display mt-5 text-2xl font-bold">{title}</h3>
              <p className={`mt-3 text-base leading-relaxed ${i === 1 ? 'text-white/80' : 'text-[#0C000E]/75'}`}>{text}</p>
              <p className={`mt-5 text-sm font-semibold ${i === 1 ? 'text-[#00FF00]' : ''}`}>You get: {gets}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Others current={s.name} />
    <Cta cta={s.cta}>
      <span className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[36px] border-[#0C000E]/10" />
    </Cta>
  </Page>
);

export default Facilitation;