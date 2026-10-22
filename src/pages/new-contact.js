import React, { useState } from 'react';
import { IMG } from './jobs/new-jobs';
import { container, section, btnPrimary, styles } from './shared';

const hours = [['Monday to Friday', '8:30am to 5:30pm'], ['Saturday', '10:00am to 2:00pm (by appointment)'], ['Sunday', 'Closed']];
const topics = ['Hiring for my business', 'Project management', 'HR services', 'Sales support', 'Looking for a job', 'Something else'];

const field = 'mt-2 w-full rounded-xl border border-[#0C000E]/20 bg-white px-4 py-3 text-base transition-colors placeholder:text-[#0C000E]/35 focus:border-[#0C000E]';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: topics[0], message: '' });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: replace with your API call. This opens the visitor's mail app so it works with no backend.
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nTopic: ${form.topic}\n\n${form.message}`;
    window.location.href = `mailto:support@irw.ng?subject=${encodeURIComponent(`${form.topic} - ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      {/* Hero: oversized contact lines */}
      <section className={`${container} grid items-center gap-12 pb-14 pt-10 lg:grid-cols-[1.2fr_1fr] lg:pb-20 lg:pt-16`}>
        <div>
          <h1 className="display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.08]">
            Tell us what is weighing on your team.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
            A short conversation is enough to start. We reply within one working day.
          </p>
          <div className="mt-8 space-y-1">
            <a href="mailto:support@irw.ng" className="display block w-fit border-b-4 border-[#00FF00] text-xl font-bold transition-colors hover:bg-[#00FF00] sm:text-3xl">support@irw.ng</a>
            <a href="tel:+2349065996599" className="display mt-4 block w-fit border-b-4 border-[#00FF00] text-xl font-bold transition-colors hover:bg-[#00FF00] sm:text-3xl">+234 906 599 6599</a>
          </div>
        </div>
        <div className="relative">
          <img src={IMG.meeting} alt="IRW consultant talking through a plan with a client" className="h-[320px] w-full rounded-3xl object-cover sm:h-[400px]" />
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-[#0C000E] px-5 py-3 text-white shadow-xl sm:-left-6">
            <span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF00] opacity-75" /><span className="relative inline-flex h-3 w-3 rounded-full bg-[#00FF00]" /></span>
            <span className="text-sm font-semibold">Replies within one working day</span>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16`}>
          <div className="rounded-3xl border border-[#0C000E]/10 bg-white p-6 sm:p-10">
            <h2 className="display text-2xl font-bold sm:text-3xl">Send us a message</h2>
            {sent ? (
              <div role="status" className="mt-6 rounded-2xl border-l-4 border-l-[#00FF00] bg-[#00FF00]/10 p-6">
                <p className="display text-xl font-bold">Your email is ready to send.</p>
                <p className="mt-2 text-[#0C000E]/75">Press send in your mail app and we will reply within one working day. Nothing happened? Write to support@irw.ng directly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">Full name
                  <input required value={form.name} onChange={set('name')} autoComplete="name" className={field} placeholder="Ada Okafor" />
                </label>
                <label className="text-sm font-semibold">Email
                  <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" className={field} placeholder="ada@company.com" />
                </label>
                <label className="text-sm font-semibold">Phone (optional)
                  <input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" className={field} placeholder="+234" />
                </label>
                <label className="text-sm font-semibold">What do you need help with?
                  <select value={form.topic} onChange={set('topic')} className={field}>
                    {topics.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <label className="text-sm font-semibold sm:col-span-2">Message
                  <textarea required rows={5} value={form.message} onChange={set('message')} className={field} placeholder="Tell us about the hire, project or problem." />
                </label>
                <div className="sm:col-span-2"><button type="submit" className={btnPrimary}>Send message</button></div>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="display text-xl font-bold sm:text-2xl">Visit the office</h2>
              <p className="mt-3 text-base text-[#0C000E]/80">32 Ikosi Road, Ketu, Lagos</p>
              <iframe
                title="IRW office location on Google Maps"
                src="https://maps.google.com/maps?q=32+Ikosi+Road+Ketu+Lagos&output=embed"
                loading="lazy"
                className="mt-4 h-56 w-full rounded-2xl border border-[#0C000E]/10"
              />
            </div>
            <div>
              <h2 className="display text-xl font-bold sm:text-2xl">Business hours</h2>
              <dl className="mt-3 divide-y divide-[#0C000E]/10 border-y border-[#0C000E]/10">
                {hours.map(([d, t]) => (
                  <div key={d} className="flex justify-between gap-4 py-3 text-sm"><dt className="font-semibold">{d}</dt><dd className="text-right text-[#0C000E]/70">{t}</dd></div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="display text-xl font-bold sm:text-2xl">Follow along</h2>
              <a href="https://www.linkedin.com/company/irw-iranlowo" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-3 rounded-full border border-[#0C000E]/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#0C000E] hover:text-white">
                IRW on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;