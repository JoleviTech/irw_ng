import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { jobs, IMG, formatDate } from './new-jobs';
import { container, section, btnPrimary, btnSecondary, btnGreen, styles } from '../shared';

const Block = ({ title, children }) => (
  <section>
    <h2 className="display text-xl font-bold sm:text-2xl">{title}</h2>
    <div className="mt-3">{children}</div>
  </section>
);

const Bullets = ({ items }) => (
  <ul className="space-y-3">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-base leading-relaxed text-[#0C000E]/80">
        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#00FF00] ring-2 ring-[#0C000E]" />
        {t}
      </li>
    ))}
  </ul>
);

export const JobDetail = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="irw bg-white text-[#0C000E]">
        <style>{styles}</style>
        <div className={`${container} py-28`}>
          <h1 className="display text-4xl font-extrabold">That role is no longer open.</h1>
          <p className="mt-4 max-w-md text-[#0C000E]/70">It may have been filled or removed. See what is open now, or send us your CV and we will match you to the next one.</p>
          <Link to="/careers" className={`${btnPrimary} mt-8`}>See current openings</Link>
        </div>
      </div>
    );
  }

const applyHref = job.applyLink || `mailto:support@irw.ng?subject=${encodeURIComponent(`Application: ${job.title} (${job.client})`)}`;
const isExternal = Boolean(job.applyLink);
  const related = jobs.filter((j) => j.slug !== job.slug).slice(0, 2);
  const facts = [['Client', job.client], ['Location', job.location], ['Work arrangement', job.arrangement], ['Employment type', job.type], ['Date posted', formatDate(job.posted)]];

  return (
    <div className="irw w-full [overflow-x:clip] bg-white text-[#0C000E] antialiased">
    <style>{styles}</style>

    {/* Hero */}
    <section className="relative bg-[#0C000E] text-white">
      <img src={IMG.office} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C000E] via-[#0C000E]/85 to-[#0C000E]/40" />
      <div className={`${container} relative pb-10 pt-6 lg:pb-12`}>
        <Link to="/careers" className="text-sm font-semibold text-white/70 transition-colors hover:text-[#00FF00]">Back to all openings</Link>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-base font-semibold text-[#00FF00]">
              {job.client}{job.product && ` | Product: ${job.product}`}
            </p>
            <h1 className="display mt-2 max-w-3xl text-[clamp(1.875rem,3.6vw,2.875rem)] font-extrabold leading-[1.1]">{job.title}</h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {[job.location, job.arrangement, job.type, `Posted ${formatDate(job.posted)}`].map((t) => (
                <span key={t} className="rounded-full border border-white/25 px-3.5 py-1.5 text-sm text-white/90">{t}</span>
              ))}
            </div>
          </div>
          <a
            href={applyHref}
            className={`${btnGreen} shrink-0`}
            {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
          >
            Apply for this role
          </a>
        </div>
      </div>
    </section>

    {/* Body */}
    <section className={`${container} grid items-start gap-8 py-10 lg:grid-cols-[1fr_340px] lg:gap-10 lg:py-14`}>
      <article className="space-y-8">
        {/* Intro card */}
        <div className="rounded-3xl bg-[#F8F9FA] p-6 sm:p-8">
          <h2 className="display text-xl font-bold sm:text-2xl">{job.aboutTitle || 'About the company'}</h2>
          <p className="mt-3 text-base leading-relaxed text-[#0C000E]/80">{job.about}</p>
          {job.overview && (
            <>
              <h3 className="display mt-6 text-base font-bold">Role overview</h3>
              <p className="mt-2 text-base leading-relaxed text-[#0C000E]/80">{job.overview}</p>
            </>
          )}
        </div>

        <Block title="Responsibilities"><Bullets items={job.responsibilities} /></Block>

        {/* Requirements and Skills side by side */}
        <div className="grid gap-8 border-t border-[#0C000E]/10 pt-8 md:grid-cols-2">
          <Block title="Requirements"><Bullets items={job.requirements} /></Block>
          <Block title="Skills and experience"><Bullets items={job.skills} /></Block>
        </div>

        {/* Offers strip */}
        {job.offers?.length > 0 && (
          <div className="rounded-3xl bg-[#00FF00]/20 p-6 sm:p-8">
            <h2 className="display text-xl font-bold sm:text-2xl">What {job.client} offers</h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-base font-medium">
              {job.offers.map((o) => (
                <li key={o} className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0C000E]" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* Sidebar */}
      <aside className="space-y-5 lg:sticky lg:top-24">
        <div className="overflow-hidden rounded-3xl border border-[#0C000E] bg-[#F8F9FA]">
          <div className="bg-[#00FF00] px-6 py-3"><p className="display text-lg font-extrabold">Role at a glance</p></div>
          <dl className="divide-y divide-[#0C000E]/10 px-6">
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-[#0C000E]/60">{k}</dt>
                <dd className="text-right font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-3 p-6">
            <a
              href={applyHref}
              className={`${btnPrimary} w-full`}
              {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
            >
              Apply now
            </a>
            <Link to="/contact" className="block text-center text-sm font-semibold underline-offset-4 hover:underline">
              Ask a recruiter a question
            </Link>
          </div>
        </div>

      {job.kpis && (
  <div className="rounded-3xl bg-[#0C000E] p-6 text-white">
    <h2 className="display text-lg font-bold">Monthly targets</h2>
    <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-6">
      {job.kpis.items.map((k, i) => (
        <li
          key={k.label}
          className={i === job.kpis.items.length - 1 && job.kpis.items.length % 2 === 1 ? 'col-span-2' : ''}
        >
          <p className="display text-3xl font-extrabold leading-none text-[#00FF00]">{k.n}</p>
          <p className="mt-1.5 text-xs leading-snug text-white/70">{k.label}</p>
        </li>
      ))}
    </ul>
  </div>
)}
      </aside>
    </section>

    {related.length > 0 && (
      <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
        <div className={container}>
          <h2 className="display text-2xl font-bold sm:text-3xl">Other roles you might like</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((j) => (
              <Link key={j.slug} to={`/jobs/${j.slug}`} className="group rounded-2xl border border-[#0C000E]/10 border-l-4 border-l-[#00FF00] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#0C000E] hover:border-l-[#00FF00] hover:shadow-lg">
                <p className="text-sm font-semibold text-[#0C000E]/60">{j.client}</p>
                <h3 className="display mt-1 text-xl font-bold">{j.title}</h3>
                <p className="mt-2 text-sm text-[#0C000E]/70">{j.location}, {j.arrangement}, {j.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )}
  </div>
  );
};

export default JobDetail;