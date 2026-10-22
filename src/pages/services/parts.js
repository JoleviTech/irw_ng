import React from 'react';
import { Link } from 'react-router-dom';
import { container, btnPrimary, btnSecondary, btnGreen, styles } from '../shared';
import { otherServices } from './services-data';

const extra = `
@keyframes grow-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes grow-y { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
.irw .grow-x { transform-origin: left; animation: grow-x 1.1s cubic-bezier(.2,.8,.2,1) both; }
.irw .grow-y { transform-origin: bottom; animation: grow-y 1.1s cubic-bezier(.2,.8,.2,1) both; }
.irw .draw { stroke-dasharray: 1; animation: draw 1.8s ease-out both; }
`;

export const Page = ({ children }) => (
  <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
    <style>{styles}{extra}</style>
    {children}
  </div>
);

export const Check = () => (
  <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#00FF00" />
    <path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#0C000E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeroActions = () => (
  <div className="mt-8 flex flex-wrap gap-3">
    <Link to="/contact" className={btnPrimary}>Work With Us</Link>
    <a href="#how-we-work" className={btnSecondary}>See how we work</a>
  </div>
);

export const Others = ({ current }) => (
  <section className="border-t border-[#0C000E]/10 bg-[#F8F9FA] py-12">
    <div className={`${container} flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between`}>
      <p className="display text-xl font-bold">Looking for something else?</p>
      <ul className="flex flex-wrap gap-2">
        {otherServices.filter((o) => o.name !== current).map((o) => (
          <li key={o.to}>
            <Link to={o.to} className="inline-flex rounded-full border border-[#0C000E]/20 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-[#0C000E] hover:bg-[#00FF00]">{o.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const Cta = ({ cta, tone = 'green', children }) => {
  const dark = tone === 'dark';
  return (
    <section className={dark ? 'bg-[#0C000E] py-16 text-white lg:py-24' : 'py-16 lg:py-24'}>
      <div className={container}>
        <div className={`relative overflow-hidden ${dark ? '' : 'rounded-[2rem] border border-[#0C000E] bg-[#00FF00] p-8 sm:p-12 lg:p-16'}`}>
          {children}
          <div className="relative grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">{cta.title}</h2>
              <p className={`mt-4 max-w-xl text-base leading-relaxed sm:text-lg ${dark ? 'text-white/75' : 'text-[#0C000E]/80'}`}>{cta.text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={dark ? btnGreen : btnPrimary}>Work With Us</Link>
              <a href="mailto:support@irw.ng" className={dark ? 'inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#0C000E]' : btnSecondary}>Send a message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};