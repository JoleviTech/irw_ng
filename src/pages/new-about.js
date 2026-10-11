import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder team data - Replace photo URLs with actual assets
const teamMembers = [
  {
    name: 'Titi Ekundayo',
    role: 'Managing Partner & Founder',
    expertise: 'Business Strategy & Technical TPM',
    bio: 'Over a decade leading cross-functional teams across software architecture, project management, and business operations.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Titi Ekundayo',
    role: 'Head of People & HR Operations',
    expertise: 'Talent Acquisition & Organisational Design',
    bio: 'Specialises in talent pipelines, HR compliance, and designing sustainable workplace cultures across various sectors.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Titi Ekundayo',
    role: 'Lead, Business Process Optimisation',
    expertise: 'Process Re-engineering & Operations',
    bio: 'Helps growing enterprises identify operational bottlenecks and re-engineer workflows for high efficiency and scalability.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
];

const clients = [
  'Meridian Bank',
  'Kolade Foods',
  'Atlas Logistics',
  'Ferrous Energy',
  'Northgate Insurance',
  'Pelican Telecoms',
  'Brightwell Health',
  'Oriel Distillers',
];

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

export const AboutUs = () => {
  return (
    <div className="irw w-full overflow-x-hidden bg-white text-[#0C000E] antialiased">
      <style>{styles}</style>

      {/* Hero / Our Story & Philosophy Header */}
      <section className={`${container} pb-16 pt-10 lg:pb-20 lg:pt-16`}>
        <div className="max-w-3xl">
          {/* <div className="inline-flex items-center gap-2 rounded-md bg-[#00FF00]/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0C000E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FF00]"></span>
            About IRW
          </div> */}
          <h1 className="display mt-4 text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[1.05]">
            Building the engine that keeps enterprise moving.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#0C000E]/75 sm:text-lg">
            Practical support for the people, processes, and projects that enable businesses to perform, adapt, and scale sustainably.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
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

      {/* Vision & Mission */}
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

      {/* Our Values */}
      <section className={`${section} border-t border-[#0C000E]/10 bg-[#F8F9FA]`}>
        <div className={container}>
          <div className="max-w-2xl">
            <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our Values</h2>
            <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">
              The principles that guide how we engage with clients, support candidates, and deliver work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-xl border border-[#0C000E]/10 bg-white p-6 transition-all hover:shadow-sm">
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

      {/* Our Team */}
      <section className={section}>
        <div className={container}>
          <div className="max-w-2xl">
            <h2 className="display text-2xl font-bold sm:text-3xl lg:text-4xl">Our Team</h2>
            <p className="mt-3 text-base text-[#0C000E]/70 sm:text-lg">
              Experienced practitioners dedicated to solving operational challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-2xl border border-[#0C000E]/10 bg-white">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-64 w-full object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="display text-xl font-bold">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0C000E]/60">{member.role}</p>
                  <span className="mt-3 inline-block rounded-md bg-[#F8F9FA] px-2.5 py-1 text-xs font-medium text-[#0C000E]">
                    {member.expertise}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-[#0C000E]/75">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partnerships Marquee */}
      <section className="w-full overflow-hidden border-t border-[#0C000E]/10 bg-[#F8F9FA] py-16 text-[#0C000E] lg:py-20">
        <div className={container}>
          <h2 className="display text-center text-2xl font-bold sm:text-3xl">Trusted by Industry Leaders</h2>
        </div>

        <div className="mt-8 max-w-full overflow-hidden border-y border-[#0C000E]/10 py-5">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12 hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="display whitespace-nowrap text-2xl font-extrabold text-[#0C000E]/25 sm:text-3xl">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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