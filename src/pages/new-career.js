import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { jobs, IMG, formatDate } from './jobs/new-jobs';
import { container, section, btnPrimary, btnSecondary, btnGreen, styles } from './shared';

const filters = ['All', 'On-site', 'Hybrid', 'Remote'];

const perks = [
  ['Real clients, real stakes', 'Roles sit inside banks, food brands, ports and clinics, not in a stack of anonymous listings.'],
  ['A human on your side', 'An IRW consultant briefs you before every interview and debriefs you after.'],
  ['Feedback, always', 'If it is a no, you hear why, and what to work on.'],
];

const Chip = ({ children, tone = 'light' }) => (
  <span className={`rounded-full px-3 py-1 text-xs font-medium ${tone === 'green' ? 'bg-[#00FF00]/25 text-[#0C000E]' : 'bg-[#0C000E]/[0.06] text-[#0C000E]/80'}`}>
    {children}
  </span>
);

export const Careers = () => {
  const [filter, setFilter] = useState('All');
  const list = useMemo(() => (filter === 'All' ? jobs : jobs.filter((j) => j.arrangement === filter)), [filter]);

  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      {/* Hero: headline + tilted photo collage */}
      <section className={`${container} grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-16`}>
        <div>
          <h1 className="display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.08]">
            Your next role is already looking for you.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
            IRW recruits for banks, food brands, logistics firms and clinics across Nigeria. Browse what is open today, or join our talent network and we will call when the right role lands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#openings" className={btnPrimary}>See open roles</a>
            <Link to="/contact" className={btnSecondary}>Join the talent network</Link>
          </div>
          <p className="mt-8 text-sm text-[#0C000E]/60">
            <span className="font-semibold text-[#0C000E]">{jobs.length} roles</span> open across {new Set(jobs.map((j) => j.client)).size} clients right now.
          </p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[500px]">
          <img src={IMG.team} alt="Colleagues planning together around a table" className="absolute left-0 top-6 h-64 w-[62%] rounded-3xl object-cover shadow-xl sm:h-80" style={{ '--r': '-4deg', transform: 'rotate(-4deg)', animation: 'floaty 7s ease-in-out infinite' }} />
          <img src={IMG.talk} alt="Candidate smiling during an interview" className="absolute bottom-0 right-0 h-60 w-[58%] rounded-3xl object-cover shadow-xl sm:h-72" style={{ '--r': '3deg', transform: 'rotate(3deg)', animation: 'floaty 8s ease-in-out -2s infinite' }} />
          <div className="absolute right-2 top-0 flex h-28 w-28 items-center justify-center rounded-full bg-[#00FF00] text-center sm:h-32 sm:w-32" style={{ animation: 'spin-slow 24s linear infinite' }}>
            <span className="display -rotate-12 px-3 text-sm font-extrabold leading-tight sm:text-base">We are hiring</span>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-[#0C000E] bg-[#00FF00] py-4" aria-hidden="true">
        <div className="flex w-max gap-10" style={{ animation: 'marquee 30s linear infinite' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="display whitespace-nowrap text-xl font-extrabold sm:text-2xl">
              {['Banking', 'FMCG', 'Logistics', 'Telecoms', 'Healthcare', 'Energy'][i % 6]} roles now open
            </span>
          ))}
        </div>
      </div>

      {/* Openings */}
      <section id="openings" className={section}>
        <div className={container}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Current openings</h2>
              <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">
                Every role is placed by IRW on behalf of a client. Pick one to read the full brief and apply.
              </p>
            </div>
            <div role="group" aria-label="Filter by work arrangement" className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${filter === f ? 'border-[#0C000E] bg-[#0C000E] text-white' : 'border-[#0C000E]/20 hover:border-[#0C000E]'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-10 space-y-4">
            {list.map((j) => (
              <li key={j.slug}>
                <Link
                  to={`/new-jobs/${j.slug}`}
                  className="group relative grid gap-5 overflow-hidden rounded-2xl border border-[#0C000E]/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#0C000E] hover:shadow-lg lg:grid-cols-[1.5fr_1.6fr_auto] lg:items-center lg:gap-10 lg:p-8"
                >
                  <span className="absolute inset-y-0 left-0 w-1.5 bg-[#00FF00] transition-all group-hover:w-3" />
                  <div className="pl-2">
                    <p className="text-sm font-semibold text-[#0C000E]/60">{j.client}</p>
                    <h3 className="display mt-1 text-xl font-bold sm:text-2xl">{j.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Chip>{j.location}</Chip>
                      <Chip tone="green">{j.arrangement}</Chip>
                      <Chip>{j.type}</Chip>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-[#0C000E]/75 sm:text-base">{j.short}</p>
                    <p className="mt-2 text-xs text-[#0C000E]/50">Posted {formatDate(j.posted)}</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full bg-[#0C000E] px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#00FF00] group-hover:text-[#0C000E]">
                    View details and apply
                  </span>
                </Link>
              </li>
            ))}
            {list.length === 0 && (
              <li className="rounded-2xl border border-dashed border-[#0C000E]/25 p-10 text-center">
                <p className="display text-xl font-bold">No {filter.toLowerCase()} roles open right now.</p>
                <p className="mt-2 text-[#0C000E]/70">Switch the filter, or join the talent network and we will tell you when one opens.</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Why IRW: photo + reasons */}
      <section className="bg-[#0C000E] py-16 text-white lg:py-24">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
          <div className="relative">
            <img src={IMG.work} alt="Team collaborating at laptops in a bright office" className="h-[380px] w-full rounded-3xl object-cover sm:h-[460px]" />
            <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#00FF00] px-5 py-4 text-[#0C000E] sm:-right-6">
              <p className="display text-3xl font-extrabold">20+</p>
              <p className="text-sm font-medium">years placing people</p>
            </div>
          </div>
          <div>
            <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">Apply through people who pick up the phone.</h2>
            <ul className="mt-8 divide-y divide-white/15">
              {perks.map(([t, d]) => (
                <li key={t} className="py-5 first:pt-0">
                  <h3 className="display text-lg font-bold text-[#00FF00]">{t}</h3>
                  <p className="mt-1.5 max-w-md text-white/75">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Talent network CTA */}
      <section className="py-16 lg:py-20">
        <div className={`${container} grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]`}>
          <div>
            <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">Do not see your role?</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#0C000E]/75">
              Send us your CV. New briefs arrive every week, and we match people to them before they are advertised.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:support@irw.ng?subject=Talent%20network%20CV" className={btnGreen}>Send your CV</a>
            <Link to="/contact" className={btnSecondary}>Talk to a recruiter</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;