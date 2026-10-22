import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { jobs, IMG, formatDate } from './new-jobs';
import { container, section, btnPrimary, btnSecondary, btnGreen, styles } from '../shared';

const Block = ({ title, children }) => (
  <section className="border-t border-[#0C000E]/10 py-8 first:border-t-0 first:pt-0">
    <h2 className="display text-xl font-bold sm:text-2xl">{title}</h2>
    <div className="mt-4">{children}</div>
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
          <Link to="/new-careers" className={`${btnPrimary} mt-8`}>See current openings</Link>
        </div>
      </div>
    );
  }

  const applyHref = `mailto:support@irw.ng?subject=${encodeURIComponent(`Application: ${job.title} (${job.client})`)}`;
  const related = jobs.filter((j) => j.slug !== job.slug).slice(0, 2);
  const facts = [['Client', job.client], ['Location', job.location], ['Work arrangement', job.arrangement], ['Employment type', job.type], ['Date posted', formatDate(job.posted)]];

  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      {/* Header with photo band */}
      <section className="relative bg-[#0C000E] text-white">
        <img src={IMG.office} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C000E] via-[#0C000E]/85 to-[#0C000E]/40" />
        <div className={`${container} relative pb-14 pt-8 lg:pb-20`}>
          <Link to="/new-careers" className="text-sm font-semibold text-white/70 transition-colors hover:text-[#00FF00]">Back to all openings</Link>
          <p className="mt-10 text-base font-semibold text-[#00FF00]">{job.client}</p>
          <h1 className="display mt-2 max-w-3xl text-[clamp(1.875rem,3.6vw,2.875rem)] font-extrabold leading-[1.1]">{job.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {[job.location, job.arrangement, job.type, `Posted ${formatDate(job.posted)}`].map((t) => (
              <span key={t} className="rounded-full border border-white/25 px-3.5 py-1.5 text-sm text-white/90">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} grid gap-12 py-14 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:py-20`}>
        <article>
          <Block title="About the role"><p className="text-base leading-relaxed text-[#0C000E]/80 sm:text-lg">{job.about}</p></Block>
          <Block title="Responsibilities"><Bullets items={job.responsibilities} /></Block>
          <Block title="Requirements"><Bullets items={job.requirements} /></Block>
          <Block title="Skills and experience">
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <span key={s} className="rounded-full bg-[#00FF00]/25 px-4 py-2 text-sm font-semibold">{s}</span>
              ))}
            </div>
          </Block>
          {job.offers?.length > 0 && <Block title={`What ${job.client} offers`}><Bullets items={job.offers} /></Block>}
          <Block title="How to apply">
            <p className="max-w-xl text-base leading-relaxed text-[#0C000E]/80">
              Send your CV and a short note on why this role fits. An IRW recruiter will reply within two working days. Applications are handled by IRW on behalf of {job.client}.
            </p>
            <a href={applyHref} className={`${btnGreen} mt-6`}>Apply for this role</a>
          </Block>
        </article>

        {/* Sticky summary card */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-[#0C000E] bg-[#F8F9FA]">
            <div className="bg-[#00FF00] px-6 py-4"><p className="display text-lg font-extrabold">Role at a glance</p></div>
            <dl className="divide-y divide-[#0C000E]/10 px-6">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3.5 text-sm">
                  <dt className="text-[#0C000E]/60">{k}</dt>
                  <dd className="text-right font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="space-y-3 p-6">
              <a href={applyHref} className={`${btnPrimary} w-full`}>Apply now</a>
              <Link to="/contact" className={`${btnSecondary} w-full`}>Ask a recruiter a question</Link>
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
          <div className={container}>
            <h2 className="display text-2xl font-bold sm:text-3xl">Other roles you might like</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((j) => (
                <Link key={j.slug} to={`/new-jobs/${j.slug}`} className="group rounded-2xl border border-[#0C000E]/10 border-l-4 border-l-[#00FF00] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#0C000E] hover:border-l-[#00FF00] hover:shadow-lg">
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