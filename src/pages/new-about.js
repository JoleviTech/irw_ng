import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import titilayo from '../assets/about/team/titilayo.jpeg';
import oluwakemi from '../assets/about/team/oluwakemi.jpeg';
import constance from '../assets/about/team/constance.jpeg';
import abiodun from '../assets/about/team/abiodun.jpeg';
import opeyemi from '../assets/about/team/opeyemi.jpeg';

import tgllifescience from '../assets/about/clients/tgl-lifescience.png';
import logistikus from '../assets/about/clients/logistikus.jpeg';
import yconcept from '../assets/about/clients/y3ss-concept.png';


const teamMembers = [
  {
    name: 'Titilayo Ekundayo',
    role: 'Strategy | Operational Excellence | Venture Building',
    bio: 'A business strategist and operations leader with over a decade of experience driving growth, operational excellence and venture success across agribusiness, food services, entrepreneurship support and youth development. She brings expertise in strategic planning, business process optimisation, venture building and stakeholder engagement, with a track record of turning ideas into scalable, high-performing organisations.',
    photo: titilayo,
  },
  {
    name: 'Abiodun Akinnagbe',
    role: 'Business Performance & Operational Improvement Consultant',
    bio: 'A business and data analytics professional focused on helping organisations improve performance, optimise operations, and achieve measurable business outcomes. With experience across financial services and public sector operations, she brings expertise in data analysis, performance reporting, process improvement, and stakeholder management.',
    photo: abiodun,
  },
  {
    name: 'Constance Odiase',
    credentials: 'R.Eng (COREN), MNSE, MNIPE, MEM',
    role: 'Business Transformation | Operations | Commercial Growth',
    bio: 'Constance Odiase is an engineering and business operations executive with over a decade of experience in business transformation, operational management, commercial development, project delivery, and workforce performance across the energy, power, and engineering sectors.',
    photo: constance,
  },
  {
    name: 'Oluwakemi Ekundayo',
    role: 'Business Performance & Project Management Consultant',
    bio: 'A business and project management professional with experience supporting organisational performance, strategic initiatives, and operational effectiveness across the financial services and FMCG sectors. She brings expertise in stakeholder management, performance monitoring, process improvement, and project coordination.',
    photo: oluwakemi,
  },
  {
    name: 'Opeyemi Bioku',
    role: 'Digital Transformation Professional & Technology Consultant',
    bio: 'Opeyemi Bioku is a digital transformation professional with experience in building digital infrastructure for businesses, including websites, applications, and the systems that connect them. She works with business owners and teams to bring these into daily operations and customer experience.',
    photo: opeyemi,
  },
];

const clients = [
  { name: 'TGL Lifescience', logo: tgllifescience },
  { name: 'Logistikus', logo: logistikus },
  { name: 'Y3SSCONCEPT', logo: yconcept },

];

const marqueeLogos = Array.from({ length: 8 }, () => clients).flat();

const values = [
  {
    title: 'Professionalism',
    description: 'We hold ourselves to rigorous standards in execution, delivery, and communication across every engagement.',
  },
  {
    title: 'Integrity',
    description: 'We give honest assessments early and maintain complete transparency in our processes and partnerships.',
  },
  {
    title: 'Discipline',
    description: 'Growth requires consistency. We stay dedicated to structured execution until targets are achieved.',
  },
  {
    title: 'People-centred Organisation',
    description: 'Businesses thrive when their people do. We design processes that empower human potential.',
  },
  {
    title: 'Loyalty',
    description: 'We operate as long-term strategic partners, standing alongside our clients through every growth milestone.',
  },
  {
    title: 'Knowledge',
    description: 'Grounding our solutions in practical experience, industry insights, and continuous learning.',
  },
  {
    title: 'Excellence',
    description: 'We do not settle for average output. We aim for high quality in the smallest details of our work.',
  },
];

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

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) { .irw * { animation: none !important; transition: none !important; } }
`;

const TeamCard = ({ member, className = '' }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl border border-[#0C000E]/10 bg-white ${className}`}>
      <img
        src={member.photo}
        alt={member.name}
        className="aspect-[5/4] w-full object-cover object-top"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="display m-0 text-xl font-bold leading-tight">{member.name}</h3>
        {member.credentials && (
          <p className="m-0 text-xs font-medium leading-4 text-[#0C000E]/60">
            {member.credentials}
          </p>
        )}
        <p className="m-0 text-xs font-semibold uppercase leading-4 tracking-wider text-[#0C000E]/60">
          {member.role}
        </p>
       <p className={`m-0 mt-1 text-justify text-sm leading-6 text-[#0C000E]/75 hyphens-auto ${open ? '' : 'line-clamp-3'}`}>
          {member.bio}
        </p>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-auto w-fit pt-2 text-sm font-semibold underline underline-offset-4"
        >
          {open ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      <section className={`${container} pb-16 pt-10 lg:pb-20 lg:pt-16`}>
        <div className="max-w-3xl">
          <h1 className="display mt-4 text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[1.05]">
            Building the engine that keeps enterprise moving.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
            Practical support for the people, processes, and projects that enable businesses to perform, adapt, and scale sustainably.
          </p>
        </div>
      </section>

      <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <h2 className="display text-2xl font-bold sm:text-3xl">Our Story</h2>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
              IRW was established to solve a recurring challenge faced by growing companies: internal teams getting bogged down by routine operational friction, hiring pressures, and project execution hurdles.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
              Starting as an advisory group, IRW quickly expanded into a full-service operational partner. Over two decades of practice, we have evolved through key stages—building robust recruitment engines, setting up dedicated project offices, and running end-to-end people operations across multiple sectors.
            </p>
          </div>

          <div>
            <h2 className="display text-2xl font-bold sm:text-3xl">Our Philosophy</h2>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
              We believe growth is not an accident; it is the natural byproduct of clarity, focus, and systematic execution.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
              Our approach treats businesses as living ecosystems. When you streamline processes and place the right people in environment-fit roles, leaders gain the bandwidth required to focus on strategy and expansion.
            </p>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={`${container} grid gap-8 md:grid-cols-2`}>
          <div className="rounded-2xl border border-[#0C000E]/10 border-l-4 border-l-[#00FF00] bg-white p-8 sm:p-10">
            <span className="inline-block rounded-full bg-[#00FF00]/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0C000E]">
              Vision
            </span>
            <h3 className="display mt-4 text-2xl font-bold">Changing the world one business at a time.</h3>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75">
              To us, this means strengthening the economic foundation of communities by building resilient, highly efficient organizations that create value, foster innovation, and offer long-term employment.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0C000E]/10 border-l-4 border-l-[#0C000E] bg-[#F8F9FA] p-8 sm:p-10">
            <span className="inline-block rounded-full bg-[#0C000E]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0C000E]">
              Mission
            </span>
            <h3 className="display mt-4 text-2xl font-bold">To improve living standards by helping people build lasting businesses.</h3>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75">
              We deliver practical, reliable, hands-on support in HR, project delivery, and sales operations so businesses survive market shifts and achieve sustainable longevity.
            </p>
          </div>
        </div>
      </section>

      <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
        <div className={container}>
          <div className="max-w-2xl">
            <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our Values</h2>
            <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">
              The principles that guide how we engage with clients, support candidates, and deliver work.
            </p>
          </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
            {values.map((v, i) => (
            <div
  key={v.title}
  className="w-full rounded-xl border border-[#0C000E]/10 bg-white p-6 transition-all hover:shadow-sm sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00FF00]/20 text-xs font-bold text-[#0C000E]">
                    0{i + 1}
                  </span>
                  <h3 className="display text-lg font-bold">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#0C000E]/75">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={container}>
          <div className="max-w-2xl">
            <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our Team</h2>
            <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">
              Experienced practitioners dedicated to solving operational challenges.
            </p>
          </div>

    <div className="mt-12 flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
            <TeamCard
  key={member.name}
  member={member}
  className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
/>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden border-t border-[#0C000E]/10 bg-[#F8F9FA] py-16 text-[#0C000E] lg:py-20">
        <div className={container}>
          <h2 className="display text-center text-2xl font-bold sm:text-3xl">Trusted by Industry Leaders</h2>
        </div>

        {/* <div className="mt-8 max-w-full overflow-hidden border-y border-[#0C000E]/10 py-5">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
              <img
                key={i}
                src={c.logo}
                alt={c.name}
                className="mx-8 h-10 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div> */}

        
        <div className="mt-8 max-w-full overflow-hidden border-y border-[#0C000E]/10 py-5">
  <div className="flex w-max animate-[marquee_60s_linear_infinite] items-center hover:[animation-play-state:paused]">
    {marqueeLogos.map((c, i) => (
      <img
        key={i}
        src={c.logo}
        alt={c.name}
        className="mx-8 h-10 w-auto object-contain mix-blend-multiply opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
      />
    ))}
  </div>
</div>
      </section>

      <section className="border-t border-[#0C000E]/10 bg-white py-16 text-[#0C000E] lg:py-20">
        <div className={`${container} grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]`}>
          <div>
            <h2 className="display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Ready to take work off your plate?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0C000E]/75">
              Let's discuss how IRW can support your team, optimize your processes, and drive measurable results.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className={btnPrimary}>Work With Us</Link>
            <a href="mailto:support@irw.ng" className={btnSecondary}>Send a message</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;