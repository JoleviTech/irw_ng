// import React, { useState } from 'react';

// import { ArrowUpRight, ChevronDown, Plus } from 'lucide-react';



// const services = [

//   { title: 'Recruitment', slug: 'recruitment', short: 'Quality talent, placed fast.', details: 'From role definition to placement and onboarding, we run the full hiring cycle so the right people join quickly and stay.' },

//   { title: 'Project Management', slug: 'project-management', short: 'Delivered on time.', details: 'Planning, vendors, reporting and risk. We keep projects on scope and on budget, and tell you early when they are not.' },

//   { title: 'Business Development', slug: 'business-development', short: 'Growth, executed.', details: 'We find the opportunities, shape the go-to-market plan and work the pipeline alongside your team.' },

//   { title: 'HR Services', slug: 'hr-services', short: 'HR that runs itself.', details: 'Payroll, compliance, policies and culture handled end to end, so your leaders can get back to strategy.' },

//   { title: 'Sales Support', slug: 'sales-support', short: 'Targets, actually hit.', details: 'Clear sales processes, trained teams and weekly accountability, so hitting target becomes routine.' },

// ];







// const points = [

//   ['A named account lead', 'One person who knows your business and picks up the phone.'],

//   ['Processes tested across industries', 'Banking, FMCG, logistics, tech. We have usually seen your problem before.'],

//   ['Live in weeks, not quarters', 'Most engagements start delivering inside 30 days.'],

//   ['A partner in the room', 'We question a brief when it needs it, and we say so early.'],

// ];



// const steps = [

//   ['Understand', 'We learn how your business makes money, where it hurts and what you want next.'],

//   ['Assess', 'We look at what you have today and mark out the gaps worth closing first.'],

//   ['Implement', 'We put people and process in place, working inside your team, not beside it.'],

//   ['Improve', 'We report monthly against agreed targets and keep tuning what we built.'],

// ];



// const clients = ['Meridian Bank', 'Kolade Foods', 'Atlas Logistics', 'Ferrous Energy', 'Northgate Insurance', 'Pelican Telecoms', 'Brightwell Health', 'Oriel Distillers'];



// const cases = [

//   { sector: 'Banking', client: 'Tier-one bank, Lagos', result: '62 hires in 8 weeks', note: 'Recruitment for a branch expansion across four states.', service: 'Recruitment' },

//   { sector: 'Logistics', client: 'Port logistics firm', result: '11 days saved per project', note: 'A project office set up to run a terminal upgrade on schedule.', service: 'Project Management' },

//   { sector: 'FMCG', client: 'Beverage distributor', result: '31% more monthly revenue', note: 'Sales process rebuilt and field team retrained in one quarter.', service: 'Sales Support' },

// ];



// const figures = [['100+', 'businesses served'], ['20+', 'years in operation'], ['98%', 'of clients renew']];



// const container = 'mx-auto max-w-7xl px-5 lg:px-10';

// const section = 'py-20 lg:py-28';

// const btn = 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06bb06]';



// const styles = `

// @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap');

// .irw { font-family: 'Instrument Sans', system-ui, sans-serif; }

// .irw .display { font-family: 'Bricolage Grotesque', 'Instrument Sans', sans-serif; letter-spacing: -0.03em; }
// .irw a { color: inherit; text-decoration: none; }
// .irw a:hover { text-decoration: none; }
// .irw a:focus-visible, .irw button:focus-visible { outline: 2px solid #06bb06; outline-offset: 3px; }
// .irw a:visited { color: inherit; }
// .irw .link-accent { color: #06bb06; }
// .irw .link-accent:hover { color: #ffffff; }

// @keyframes marquee { to { transform: translateX(-50%); } }

// @media (prefers-reduced-motion: reduce) { .irw * { animation: none !important; transition: none !important; } }

// `;



// function Services() {

//   const [open, setOpen] = useState(0);

//   return (

//     <ul className="border-t border-[#0C000E]/15">

//       {services.map((s, i) => {

//         const active = open === i;

//         return (

//           <li key={s.slug} className="border-b border-[#0C000E]/15">

//             <button

//               onClick={() => setOpen(active ? -1 : i)}

//               aria-expanded={active}

//               className="group flex w-full items-center justify-between gap-6 py-5 text-left lg:py-6"

//             >

//               <span className={`display text-xl font-bold transition-colors sm:text-2xl lg:text-3xl ${active ? 'text-[#033F2D]' : 'text-[#0C000E]/40 group-hover:text-[#0C000E]'}`}>

//                 {s.title}

//               </span>

//               <span className="hidden text-lg text-[#0C000E]/60 md:block">{s.short}</span>

//               <Plus size={28} className={`shrink-0 text-[#033F2D] transition-transform duration-300 ${active ? 'rotate-45' : ''}`} />

//             </button>

//             <div className={`grid transition-[grid-template-rows] duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>

//               <div className="overflow-hidden">

//                 <div className="flex flex-col gap-5 pb-8 md:flex-row md:items-center md:justify-between">

//                   <p className="max-w-xl text-base leading-relaxed text-[#0C000E]/75">{s.details}</p>

//                   <a href={`/services/${s.slug}`} className={`${btn} self-start bg-[#033F2D] text-white hover:bg-[#0C000E]`}>

//                     See {s.title}

//                     <ArrowUpRight size={16} />

//                   </a>

//                 </div>

//               </div>

//             </div>

//           </li>

//         );

//       })}

//     </ul>

//   );

// }



// const IRWHomepage = () => {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   return (

//   <div className="irw bg-white text-[#0C000E] antialiased">

//     <style>{styles}</style>

//     <section className={`${container} grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28 lg:pt-16`}>

//       <div>

//         <h1 className="display text-[clamp(3rem,7.4vw,6.5rem)] font-extrabold leading-[0.93]">

//           Growth happens when you focus.

//         </h1>

//         <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#0C000E]/75">

//           IRW takes on the hiring, the projects, the payroll and the pipeline that pull your team away from what it does best. Two decades of practice, a named lead on every account, results you can measure.

//         </p>

//         <div className="mt-9 flex flex-wrap gap-3">

//           <a href="/contact" className={`${btn} bg-[#033F2D] text-white hover:bg-[#0C000E]`}>Work with us</a>

//           <a href="#services" className={`${btn} border border-[#0C000E]/25 hover:border-[#033F2D] hover:text-[#033F2D]`}>Explore services</a>

//         </div>

//       </div>

//       <div className="rounded-3xl bg-[#F4F7F3] p-6 sm:p-8">
//         <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#033F2D]/70">How we support you</p>
//         <h2 className="display mt-3 text-2xl font-bold leading-tight sm:text-3xl">More focus for the work that moves your business forward.</h2>
//         <ul className="mt-6 divide-y divide-[#0C000E]/10">
//           {[
//             ['People and HR', 'Recruitment, payroll and people operations'],
//             ['Projects and processes', 'Planning, delivery and process improvement'],
//             ['Growth and execution', 'Business development, sales support and facilitation'],
//           ].map(([title, description]) => (
//             <li key={title} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
//               <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#033F2D] text-white"><ArrowUpRight size={12} /></span>
//               <span><span className="block text-sm font-semibold">{title}</span><span className="mt-1 block text-sm leading-relaxed text-[#0C000E]/65">{description}</span></span>
//             </li>
//           ))}
//         </ul>
//       </div>

//     </section>



//     <section id="services" className={`${section} border-t border-[#0C000E]/10`}>

//       <div className={container}>

//         <div className="mb-12 max-w-2xl">

//           <h2 className="display text-3xl font-bold lg:text-4xl">Five ways we take work off your plate</h2>

//           <p className="mt-4 text-lg text-[#0C000E]/70">Pick one, or bring us all five. Each has its own team and its own page.</p>

//         </div>

//         <Services />

//       </div>

//     </section>



//     <section className={`${section} bg-[#033F2D] text-white`}>

//       <div className={`${container} grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24`}>

//         <div className="lg:sticky lg:top-24 lg:self-start">

//           <h2 className="display text-3xl font-bold leading-tight lg:text-4xl">We stay until it works.</h2>

//           <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">

//             Plenty of providers hand over a deliverable and disappear. We set targets with you, assign someone accountable, and report against those targets every month.

//           </p>

//         </div>

//         <ul>

//           {points.map(([title, text]) => (

//             <li key={title} className="border-t border-white/20 py-7 first:border-t-0 first:pt-0">

//               <h3 className="display text-lg font-bold text-white">{title}</h3>

//               <p className="mt-2 max-w-md text-white/75">{text}</p>

//             </li>

//           ))}

//         </ul>

//       </div>

//     </section>



//     <section className={section}>

//       <div className={container}>

//         <h2 className="display text-3xl font-bold lg:text-4xl">How we work</h2>

//         <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">

//           {steps.map(([title, text], i) => (

//             <li key={title} className="border-t-4 border-[#033F2D] pt-5">

//               <p className="display text-sm font-extrabold text-[#06bb06]">Step {i + 1}</p>

//               <h3 className="display mt-2 text-2xl font-bold">{title}</h3>

//               <p className="mt-3 text-[#0C000E]/70">{text}</p>

//             </li>

//           ))}

//         </ol>

//       </div>

//     </section>



//     <section id="our-work" className="overflow-hidden bg-[#0C000E] py-20 text-white lg:py-28">

//       <div className={container}>

//         <h2 className="display max-w-3xl text-3xl font-bold leading-tight lg:text-4xl">

//           Businesses that handed us the heavy parts

//         </h2>

//       </div>



//       <div className="mt-12 border-y border-white/15 py-6">

//         <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-14 hover:[animation-play-state:paused]">

//           {[...clients, ...clients].map((c, i) => (

//             <span key={i} className="display whitespace-nowrap text-3xl font-extrabold text-white/45">{c}</span>

//           ))}

//         </div>

//       </div>



//       <div className={`${container} mt-16`}>

//         <dl className="grid gap-8 sm:grid-cols-3">

//           {figures.map(([n, label]) => (

//             <div key={label}>

//               <dt className="display text-4xl font-bold text-[#06bb06]">{n}</dt>

//               <dd className="mt-1 text-white/65">{label}</dd>

//             </div>

//           ))}

//         </dl>



//         <ul className="mt-20 border-t border-white/15">

//           {cases.map((c) => (

//             <li key={c.result} className="grid gap-4 border-b border-white/15 py-8 lg:grid-cols-[1.1fr_1.4fr_auto] lg:items-center lg:gap-10">

//               <div>

//                 <p className="display text-2xl font-bold sm:text-3xl">{c.result}</p>

//                 <p className="mt-1 text-sm text-white/55">{c.sector}, {c.client}</p>

//               </div>

//               <p className="max-w-md text-white/75">{c.note}</p>

//               <a href="/our-work" className="link-accent inline-flex items-center gap-1.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#06bb06]">

//                 Read the {c.service} case

//                 <ArrowUpRight size={15} />

//               </a>

//             </li>

//           ))}

//         </ul>

//       </div>

//     </section>



//     <section className="bg-[#033F2D] py-16 text-white lg:py-20">

//       <div className={`${container} grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]`}>

//         <h2 className="display text-3xl font-bold leading-tight sm:text-4xl">

//           Tell us what is weighing on your team.

//         </h2>

//         <div>

//           <p className="text-base leading-relaxed text-white/80">

//             Whether it is a hire, a project, a new market or a messy back office, a short conversation is enough to start. We reply within one working day.

//           </p>

//           <div className="mt-7 flex flex-wrap gap-3">

//             <a href="/contact" className={`${btn} bg-white text-[#033F2D] hover:bg-[#F3F6F2]`}>Schedule a conversation</a>

//             <a href="mailto:hello@irw.example" className={`${btn} border border-white/50 text-white hover:bg-white/10`}>Send a message</a>

//           </div>

//         </div>

//       </div>

//     </section>


//   </div>

// );
// };

// export default IRWHomepage;

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const services = [
  { title: 'Recruitment', slug: 'recruitment', short: 'Quality talent, placed fast.', details: 'From role definition to placement and onboarding, we run the full hiring cycle so the right people join quickly and stay.' },
  { title: 'Project Management', slug: 'project-management', short: 'Delivered on time.', details: 'Planning, vendors, reporting and risk. We keep projects on scope and on budget, and tell you early when they are not.' },
  { title: 'Business Development', slug: 'business-development', short: 'Growth, executed.', details: 'We find the opportunities, shape the go-to-market plan and work the pipeline alongside your team.' },
  { title: 'HR Services', slug: 'hr-services', short: 'HR that runs itself.', details: 'Payroll, compliance, policies and culture handled end to end, so your leaders can get back to strategy.' },
  { title: 'Sales Support', slug: 'sales-support', short: 'Targets, actually hit.', details: 'Clear sales processes, trained teams and weekly accountability, so hitting target becomes routine.' },
];

const points = [
  ['A named account lead', 'One person who knows your business and picks up the phone.'],
  ['Processes tested across industries', 'Banking, FMCG, logistics, tech. We have usually seen your problem before.'],
  ['Live in weeks, not quarters', 'Most engagements start delivering inside 30 days.'],
  ['A partner in the room', 'We question a brief when it needs it, and we say so early.'],
];

const steps = [
  ['Understand', 'We learn how your business makes money, where it hurts and what you want next.'],
  ['Assess', 'We look at what you have today and mark out the gaps worth closing first.'],
  ['Implement', 'We put people and process in place, working inside your team, not beside it.'],
  ['Improve', 'We report monthly against agreed targets and keep tuning what we built.'],
];

const clients = ['Meridian Bank', 'Kolade Foods', 'Atlas Logistics', 'Ferrous Energy', 'Northgate Insurance', 'Pelican Telecoms', 'Brightwell Health', 'Oriel Distillers'];

const cases = [
  { sector: 'Banking', client: 'Tier-one bank, Lagos', result: '62 hires in 8 weeks', note: 'Recruitment for a branch expansion across four states.', service: 'Recruitment' },
  { sector: 'Logistics', client: 'Port logistics firm', result: '11 days saved per project', note: 'A project office set up to run a terminal upgrade on schedule.', service: 'Project Management' },
  { sector: 'FMCG', client: 'Beverage distributor', result: '31% more monthly revenue', note: 'Sales process rebuilt and field team retrained in one quarter.', service: 'Sales Support' },
];

const figures = [['100+', 'businesses served'], ['20+', 'years in operation'], ['98%', 'of clients renew']];

const container = 'mx-auto max-w-7xl px-5 lg:px-10';
const section = 'py-16 lg:py-24';
const btnPrimary = 'inline-flex items-center justify-center rounded-full bg-[#0C000E] px-6 py-3 text-sm font-semibold text-white no-underline transition-all hover:bg-[#251B27] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E]';
const btnSecondary = 'inline-flex items-center justify-center rounded-full border border-[#0C000E]/20 px-6 py-3 text-sm font-semibold text-[#0C000E] no-underline transition-all hover:border-[#0C000E] hover:bg-[#0C000E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E]';

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap');

.irw { font-family: 'Instrument Sans', system-ui, sans-serif; }
.irw .display { font-family: 'Bricolage Grotesque', 'Instrument Sans', sans-serif; letter-spacing: -0.02em; }
.irw a { color: inherit; text-decoration: none !important; }
.irw a:hover { text-decoration: none !important; }
.irw a:focus-visible, .irw button:focus-visible { outline: 2px solid #00FF00; outline-offset: 3px; }
.irw a:visited { color: inherit; }

@keyframes marquee { 
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) { .irw * { animation: none !important; transition: none !important; } }
`;

function Services() {
  const [open, setOpen] = useState(0);
  return (
    <ul className="border-t border-[#0C000E]/15">
      {services.map((s, i) => {
        const active = open === i;
        return (
          <li key={s.slug} className="border-b border-[#0C000E]/15">
            <button
              onClick={() => setOpen(active ? -1 : i)}
              aria-expanded={active}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left lg:py-6"
            >
              <span className={`display text-xl font-bold transition-colors sm:text-2xl lg:text-3xl ${active ? 'text-[#0C000E]' : 'text-[#0C000E]/40 group-hover:text-[#0C000E]'}`}>
                {s.title}
              </span>
              <span className="hidden text-base text-[#0C000E]/60 md:block">{s.short}</span>
              <Plus size={24} className={`shrink-0 transition-transform duration-300 ${active ? 'rotate-45 text-[#0C000E]' : 'text-[#0C000E]/60'}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col gap-5 pb-8 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-xl text-base leading-relaxed text-[#0C000E]/75">{s.details}</p>
                  <a href={`/services/${s.slug}`} className={`${btnPrimary} self-start`}>
                    See {s.title}
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export const IRWHomepage = () => {
  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      {/* Hero Section */}
      <section className={`${container} grid items-center gap-10 pb-16 pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-24 lg:pt-12`}>
        <div>
          <h1 className="display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[1.05]">
            Growth happens when you focus.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
            IRW takes on the hiring, the projects, the payroll and the pipeline that pull your team away from what it does best. Two decades of practice, a named lead on every account, results you can measure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className={btnPrimary}>Work with us</a>
            <a href="#services" className={btnSecondary}>Explore services</a>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F8F9FA] p-6 border-l-4 border-l-[#00FF00] border-y border-r border-[#0C000E]/10 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-md bg-[#00FF00]/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0C000E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF00]"></span>
            How we support you
          </div>
          <h2 className="display mt-4 text-xl font-bold leading-snug sm:text-2xl">More focus for the work that moves your business forward.</h2>
          <ul className="mt-6 divide-y divide-[#0C000E]/10">
            {[
              ['People and HR', 'Recruitment, payroll and people operations'],
              ['Projects and processes', 'Planning, delivery and process improvement'],
              ['Growth and execution', 'Business development, sales support and facilitation'],
            ].map(([title, description]) => (
              <li key={title} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00FF00]"></span>
                <span><span className="block text-sm font-semibold">{title}</span><span className="mt-0.5 block text-xs leading-relaxed text-[#0C000E]/65 sm:text-sm">{description}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${section} border-t border-[#0C000E]/10`}>
        <div className={container}>
          <div className="mb-10 max-w-2xl">
            <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Five ways we take work off your plate</h2>
            <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">Pick one, or bring us all five. Each has its own team and its own page.</p>
          </div>
          <Services />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className={`${section} bg-[#F8F9FA] border-y border-[#0C000E]/10`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="display text-2xl font-bold leading-tight text-[#0C000E] sm:text-3xl lg:text-4xl">We stay until it works.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
              Plenty of providers hand over a deliverable and disappear. We set targets with you, assign someone accountable, and report against those targets every month.
            </p>
          </div>
          <ul>
            {points.map(([title, text]) => (
              <li key={title} className="border-t border-[#0C000E]/15 py-6 first:border-t-0 first:pt-0">
                <h3 className="display text-base font-bold text-[#0C000E] sm:text-lg">{title}</h3>
                <p className="mt-1.5 max-w-md text-sm text-[#0C000E]/75 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={section}>
        <div className={container}>
          <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">How we work</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map(([title, text], i) => (
              <li key={title} className="border-t-2 border-[#0C000E] pt-4">
                <span className="inline-block rounded-full bg-[#00FF00]/20 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider text-[#0C000E]">
                  Step {i + 1}
                </span>
                <h3 className="display mt-2.5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-[#0C000E]/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Social Proof & Case Studies */}
      <section id="our-work" className="w-full overflow-hidden bg-[#F8F9FA] border-t border-[#0C000E]/10 py-16 text-[#0C000E] lg:py-24">
        <div className={container}>
          <h2 className="display max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Businesses that handed us the heavy parts
          </h2>
        </div>

        {/* Constrained Marquee Wrapper */}
        <div className="mt-10 max-w-full overflow-hidden border-y border-[#0C000E]/10 py-5">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="display whitespace-nowrap text-2xl font-extrabold text-[#0C000E]/25 sm:text-3xl">{c}</span>
            ))}
          </div>
        </div>

        <div className={`${container} mt-12`}>
          <dl className="grid gap-6 sm:grid-cols-3">
            {figures.map(([n, label]) => (
              <div key={label} className="border-l-2 border-[#00FF00] pl-4">
                <dt className="display text-3xl font-extrabold text-[#0C000E] sm:text-4xl">{n}</dt>
                <dd className="mt-1 text-xs text-[#0C000E]/65 sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-14 border-t border-[#0C000E]/10">
            {cases.map((c) => (
              <li key={c.result} className="grid gap-3 border-b border-[#0C000E]/10 py-6 lg:grid-cols-[1.1fr_1.4fr_auto] lg:items-center lg:gap-8">
                <div>
                  <p className="display text-xl font-bold sm:text-2xl">{c.result}</p>
                  <p className="mt-0.5 text-xs text-[#0C000E]/55 sm:text-sm">{c.sector}, {c.client}</p>
                </div>
                <p className="max-w-md text-sm text-[#0C000E]/75">{c.note}</p>
                <a href="/our-work" className="text-sm font-semibold text-[#0C000E] no-underline transition-colors hover:text-[#0C000E]/60">
                  Read the {c.service} case
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-14 text-[#0C000E] border-t border-[#0C000E]/10 lg:py-18">
        <div className={`${container} grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]`}>
          <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Tell us what is weighing on your team.
          </h2>
          <div>
            <p className="text-sm leading-relaxed text-[#0C000E]/75 sm:text-base">
              Whether it is a hire, a project, a new market or a messy back office, a short conversation is enough to start. We reply within one working day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className={btnPrimary}>Schedule a conversation</a>
              <a href="mailto:support@irw.ng" className={btnSecondary}>Send a message</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IRWHomepage;