// import React from 'react';
// import { ServicePage } from './services-template';
// import { pm } from '../services/services-data';

// export const ProjectManagement = () => <ServicePage service={pm} />;

// export default ProjectManagement;

import React from 'react';
import { container, section } from '../shared';
import { Page, HeroActions, Others, Cta } from './parts';
import { pm as s } from '../services/services-data';

const rows = [
  ['Plan', 0, 24, false],
  ['Build', 18, 46, false],
  ['Test', 52, 22, true],
  ['Handover', 72, 24, false],
];
const board = [
  ['Before kickoff', [0, 2, 4]],
  ['During delivery', [1, 3]],
  ['At handover', [5, 6]],
];

const Flag = () => (
  <svg viewBox="0 0 28 36" className="h-9 w-7" aria-hidden="true">
    <path d="M4 2v32" stroke="#0C000E" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M4 4h20l-5 7 5 7H4z" fill="#00FF00" stroke="#0C000E" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const ProjectManagement = () => (
  <Page>
    <section className={`${container} grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1fr_1.15fr] lg:pb-24 lg:pt-16`}>
      <div>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C000E]/70">
          <span className="h-2 w-2 rounded-full bg-[#00FF00] ring-2 ring-[#0C000E]" />
          {s.name}
        </p>
        <h1 className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06]">{s.headline}</h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.intro}</p>
        <HeroActions />
      </div>

      <div className="relative rounded-3xl border border-[#0C000E] bg-[#F8F9FA] p-5 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="display text-base font-bold">Terminal upgrade, week by week</p>
          <p className="rounded-full bg-[#00FF00] px-3 py-1 text-xs font-bold">{s.chip}</p>
        </div>
        <div className="relative mt-6 space-y-4">
          <span className="absolute inset-y-[-8px] left-[56%] z-10 w-0.5 bg-[#0C000E]"><span className="display absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#0C000E] px-2 py-0.5 text-[11px] font-bold text-white">Today</span></span>
          {rows.map(([name, start, width, risk], i) => (
            <div key={name} className="grid grid-cols-[4.5rem_1fr] items-center gap-3 sm:grid-cols-[5.5rem_1fr]">
              <p className="text-sm font-semibold">{name}</p>
              <div className="relative h-9 rounded-lg bg-[#0C000E]/[0.06]">
                <div className={`grow-x absolute top-0 flex h-full items-center rounded-lg border border-[#0C000E] px-3 text-xs font-bold ${risk ? 'bg-white' : 'bg-[#00FF00]'}`} style={{ left: `${start}%`, width: `${width}%`, animationDelay: `${i * 0.2}s` }}>
                  {risk && 'Risk logged'}
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src={s.img.hero} alt="" className="mt-8 h-40 w-full rounded-2xl bg-white object-cover sm:h-48" />
      </div>
    </section>

    <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
      <div className={container}>
        <div className="max-w-2xl">
          <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{s.challenge.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.challenge.text}</p>
        </div>
        <img src={s.img.challenge} alt="" className="mt-10 h-48 w-full rounded-3xl bg-white object-cover sm:h-64" />
        <ul className="mt-10 grid gap-8 md:grid-cols-4 md:gap-6">
          {s.challenge.problems.map((p, i) => (
            <li key={p} className="border-t-2 border-dashed border-[#0C000E] pt-0">
              <span className="relative -top-2.5 block h-5 w-5 rounded-full border-2 border-[#0C000E] bg-white" style={{ marginLeft: `${i * 22}px` }}>
                <span className="absolute inset-1 rounded-full bg-[#00FF00]" />
              </span>
              <p className="display mt-1 text-lg font-bold leading-snug">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">What we do</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {board.map(([col, ids]) => (
            <div key={col} className="rounded-3xl border border-[#0C000E]/15 bg-[#F8F9FA] p-4">
              <div className="flex items-center justify-between px-2 pb-4 pt-2">
                <h3 className="display text-lg font-extrabold">{col}</h3>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0C000E] text-xs font-bold text-white">{ids.length}</span>
              </div>
              <ul className="space-y-3">
                {ids.map((id) => (
                  <li key={id} className="rounded-2xl border border-[#0C000E]/15 border-l-4 border-l-[#00FF00] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#0C000E] hover:border-l-[#00FF00] hover:shadow-lg">
                    <h4 className="display text-base font-bold sm:text-lg">{s.does[id][0]}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#0C000E]/75">{s.does[id][1]}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#0C000E] py-16 text-white lg:py-24">
      <div className={container}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our approach</h2>
          <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{s.approach}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.outcomes.map((o) => (
            <li key={o} className="rounded-2xl border border-white/20 p-6">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#00FF00]"><span className="h-2.5 w-2.5 rounded-full bg-[#00FF00]" />On track</p>
              <p className="display mt-8 text-xl font-bold leading-snug">{o}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section id="how-we-work" className={section}>
      <div className={container}>
        <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {s.steps.map(([title, text, gets], i) => (
            <li key={title} className="relative md:pr-10">
              <div className="flex items-end gap-4 border-b-2 border-[#0C000E] pb-0">
                <Flag />
                <span className="display pb-1 text-sm font-extrabold">Milestone {i + 1}</span>
              </div>
              <h3 className="display mt-6 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#0C000E]/75">{text}</p>
              <p className="mt-5 inline-block rounded-full bg-[#00FF00]/30 px-3.5 py-1.5 text-sm font-semibold">You get: {gets}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <Others current={s.name} />
    <Cta cta={s.cta} />
  </Page>
);

export default ProjectManagement;