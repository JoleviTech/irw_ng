import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { container, section, btnPrimary, btnSecondary, styles } from '../shared';
import { otherServices } from './services-data';

const Check = () => (
  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#00FF00" />
    <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#0C000E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Capabilities = ({ items, image }) => {
  const [active, setActive] = useState(0);
  const [title, desc] = items[active];

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
      <ul role="tablist" aria-orientation="vertical" className="border-t border-[#0C000E]/15">
        {items.map(([t], i) => (
          <li key={t} className="border-b border-[#0C000E]/15">
            <button
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="group relative flex w-full items-center justify-between gap-4 py-5 pl-5 text-left"
            >
              <span className={`absolute left-0 top-1/2 w-1.5 -translate-y-1/2 rounded-full bg-[#00FF00] transition-all duration-300 ${active === i ? 'h-8' : 'h-0'}`} />
              <span className={`display text-lg font-bold transition-colors sm:text-xl lg:text-2xl ${active === i ? 'text-[#0C000E]' : 'text-[#0C000E]/45 group-hover:text-[#0C000E]'}`}>{t}</span>
            </button>
          </li>
        ))}
      </ul>

      <div role="tabpanel" className="overflow-hidden rounded-3xl border border-[#0C000E] bg-[#00FF00] lg:sticky lg:top-24 lg:self-start">
        <img src={image} alt="" className="h-52 w-full border-b border-[#0C000E] object-cover sm:h-64" />
        <div className="p-6 sm:p-8">
          <h3 className="display text-2xl font-extrabold">{title}</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[#0C000E]/85 sm:text-lg">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const ServicePage = ({ service: s }) => {
  const ticker = [...s.does, ...s.does, ...s.does, ...s.does];
  const others = otherServices.filter((o) => o.name !== s.name);

  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      {/* Hero */}
      <section className={`${container} grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-16`}>
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C000E]/70">
            <span className="h-2 w-2 rounded-full bg-[#00FF00] ring-2 ring-[#0C000E]" />
            {s.name}
          </p>
          <h1 className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06]">{s.headline}</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className={btnPrimary}>Work With Us</Link>
            <a href="#how-we-work" className={btnSecondary}>See how we work</a>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[500px]">
          <img src={s.img.hero} alt="" className="absolute right-0 top-0 h-[82%] w-[76%] rounded-[2.5rem] bg-[#F8F9FA] object-cover shadow-xl" style={{ '--r': '3deg', transform: 'rotate(3deg)', animation: 'floaty 8s ease-in-out infinite' }} />
          <img src={s.img.inset} alt="" className="absolute bottom-0 left-0 h-40 w-40 rounded-full border-8 border-white bg-[#F8F9FA] object-cover shadow-xl sm:h-52 sm:w-52" style={{ '--r': '0deg', animation: 'floaty 7s ease-in-out -3s infinite' }} />
          <div className="absolute left-0 top-12 rounded-2xl bg-[#0C000E] px-5 py-4 text-white shadow-xl">
            <p className="display text-base font-bold sm:text-lg">{s.chip}</p>
          </div>
          <div className="absolute bottom-6 right-0 flex h-28 w-28 items-center justify-center rounded-full bg-[#00FF00] text-center sm:h-32 sm:w-32" style={{ animation: 'spin-slow 24s linear infinite' }}>
            <span className="display -rotate-12 px-3 text-sm font-extrabold leading-tight sm:text-base">{s.badge}</span>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-[#0C000E] bg-[#00FF00] py-4" aria-hidden="true">
        <div className="flex w-max gap-10" style={{ animation: 'marquee 40s linear infinite' }}>
          {ticker.map(([t], i) => (
            <span key={i} className="display whitespace-nowrap text-xl font-extrabold sm:text-2xl">{t}</span>
          ))}
        </div>
      </div>

      {/* Challenge */}
      <section className={`${section} bg-[#F8F9FA]`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{s.challenge.title}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">{s.challenge.text}</p>
            <img src={s.img.challenge} alt="" className="mt-8 hidden h-64 w-full max-w-md rounded-3xl bg-white object-cover lg:block" />
          </div>
          <ul className="divide-y divide-[#0C000E]/15 border-y border-[#0C000E]/15">
            {s.challenge.problems.map((p) => (
              <li key={p} className="flex gap-4 py-7 sm:py-9">
                <span className="mt-2.5 h-0.5 w-6 shrink-0 bg-[#0C000E]" />
                <p className="display text-xl font-bold leading-snug sm:text-2xl">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className={section}>
        <div className={container}>
          <div className="max-w-2xl">
            <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">What we do</h2>
            <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">Pick one piece, or bring us the whole thing.</p>
          </div>
          <Capabilities items={s.does} image={s.img.detail} />
        </div>
      </section>

      {/* Approach and outcomes */}
      <section className="bg-[#0C000E] py-16 text-white lg:py-24">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
          <div className="relative">
            <img src={s.img.outcomes} alt="" className="h-[360px] w-full rounded-3xl bg-white/10 object-cover sm:h-[440px]" />
            <div className="absolute -bottom-5 -right-2 max-w-[15rem] rounded-2xl bg-[#00FF00] px-5 py-4 text-[#0C000E] sm:-right-6">
              <p className="display text-base font-extrabold leading-snug">What you can expect</p>
            </div>
          </div>
          <div>
            <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">Our approach</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">{s.approach}</p>
            <ul className="mt-10 grid gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-2">
              {s.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <Check />
                  <span className="display text-lg font-bold leading-snug">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className={section}>
        <div className={container}>
          <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
          <ol className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {s.steps.map(([title, text, gets], i) => (
              <li key={title} className="relative">
                {i < s.steps.length - 1 && <span className="absolute left-16 right-[-1rem] top-7 hidden h-px bg-[#0C000E]/25 md:block" />}
                <span className="display relative flex h-14 w-14 items-center justify-center rounded-full border border-[#0C000E] bg-[#00FF00] text-xl font-extrabold">{i + 1}</span>
                <h3 className="display mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-[#0C000E]/75">{text}</p>
                <p className="mt-5 inline-block rounded-full bg-[#0C000E]/[0.06] px-3.5 py-1.5 text-sm font-semibold">You get: {gets}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-[#0C000E]/10 bg-[#F8F9FA] py-12">
        <div className={`${container} flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between`}>
          <p className="display text-xl font-bold">Looking for something else?</p>
          <ul className="flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.to}>
                <Link to={o.to} className="inline-flex rounded-full border border-[#0C000E]/20 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-[#0C000E] hover:bg-[#00FF00]">{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#0C000E] bg-[#00FF00] p-8 sm:p-12 lg:p-16">
            <span className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-[#0C000E]/10" />
            <div className="relative grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">{s.cta.title}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#0C000E]/80 sm:text-lg">{s.cta.text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className={btnPrimary}>Work With Us</Link>
                <a href="mailto:support@irw.ng" className={btnSecondary}>Send a message</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;