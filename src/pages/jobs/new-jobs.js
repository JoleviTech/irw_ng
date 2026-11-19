// Shared job data. Replace with your API/CMS later. `slug` drives the /careers/:slug route.
export const IMG = {
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  work: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  talk: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  meeting: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
};

export const jobs = [
  {
    slug: 'sales-and-partnerships-executive',
    client: 'Brein and Accion Limited',
    product: 'Bikita',
    aboutTitle: 'About Bikita',
    title: 'Sales and Partnerships Executive',
    location: 'Lagos, Nigeria',
    arrangement: 'On-site',
    type: 'Full-time',
    applyLink: 'https://forms.gle/ZftqHahgAsxPYEDS8',
    posted: '2026-11-19',
    short: "We are seeking a proactive, target-driven Sales & Partnerships Executive to drive customer acquisition, partner recruitment and business development for Bikita.",
    about: 'Bikita is a digital vehicle management and automobile services platform connecting vehicle owners to services such as motor insurance through licensed partners, vehicle repair financing, towing and automobile workshops.',
    overview: "We are seeking a proactive, target-driven Sales & Partnerships Executive to drive customer acquisition, partner recruitment and business development for Bikita. The successful candidate will build relationships across the automobile industry, onboard business partners and grow the platform's customer base and service usage.",
    responsibilities: ['Identify, prospect and onboard new and used-car dealers, automobile workshops, mechanics, towing companies and other service providers.', 'Develop relationships with business owners, dealership managers and other decision-makers to establish strategic partnerships.', 'Drive customer registrations and vehicle additions through field sales, dealership partnerships, automobile markets and community engagement.', 'Promote available Bikita services and convert prospects into active customers and partners.', 'Support partner onboarding, activation, engagement and referral generation.', 'Identify new market opportunities, execute sales campaigns and support promotional activities.', 'Maintain a pipeline of prospects, track sales performance and submit regular business development reports.'],
    requirements: ['2–4 years experience in sales, business development, field marketing or partnership acquisition.', 'Experience in automobile sales, insurance, fintech, credit, lending or technology products is an advantage.', 'Demonstrable experience in prospecting, negotiation, relationship management and closing partnerships.'],
    kpis: {
    title: "Key Performance Indicators (Monthly Targets)",
    items: [
    { n: "40", label: "new business prospects identified" },
    { n: "15", label: "qualified business meetings" },
    { n: "8", label: "new partners onboarded" },
    { n: "5", label: "active partners generating referrals or service enquiries" },
    { n: "100", label: "new customer registrations" },
    { n: "60", label: "customers adding vehicles to the platform" },
    { n: "20", label: "qualified service enquiries generated" },
  ],
},
    skills: ['Excellent communication, presentation and negotiation skills.', 'Strong prospecting, networking and relationship management abilities.', 'Results-oriented with the ability to work independently and meet targets.', 'Comfortable with field sales and regular business visits across Lagos.', 'Good reporting skills and familiarity with spreadsheets, CRM tools and digital platforms.'],
    offers: ['Competitive salary with performance bonus', 'HMO for you and your family', 'Structured path to regional management'],
  },
];

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });