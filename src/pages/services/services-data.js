const u = (id, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const otherServices = [
  { name: 'Recruitment', to: '/services/recruitment' },
  { name: 'HR Services', to: '/services/hr-services' },
  { name: 'Business Development', to: '/services/business-development' },
  { name: 'Business Process Optimisation', to: '/services/business-process-optimisation' },
  { name: 'Project Management', to: '/services/project-management' },
  { name: 'Sales Support', to: '/services/sales-support' },
  { name: 'Facilitation', to: '/services/facilitation' },
];

export const hr = {
  name: 'HR Services',
  headline: 'People do their best work when HR runs quietly in the background.',
  intro: 'We build the hiring, onboarding and performance systems your team needs, and take the paperwork off your leaders’ desks.',
  badge: 'People first',
  chip: 'Less admin, better teams',
  img: { hero: u('photo-1522071820081-009f0129c71c', 1000), inset: u('photo-1573496359142-b8d87734a5a2', 600), detail: u('photo-1521737711867-e3b97375f902', 900), outcomes: u('photo-1600880292203-757bb62b4baf', 1000), challenge: u('photo-1573497019940-1c28c88b4f3e', 900) },
  challenge: {
    title: 'HR usually breaks before anyone notices.',
    text: 'Growing teams hire fast, document late and manage performance by instinct. Then good people leave, and managers spend their week on admin.',
    problems: [
      'Hiring takes too long and every manager does it differently.',
      'New joiners are left to figure things out on their own.',
      'Nobody can say clearly who is performing and who needs help.',
      'Policies live in one person’s head, or in a folder nobody opens.',
    ],
  },
  does: [
    ['Recruitment', 'Role definition, sourcing, screening and shortlisting, so you meet people worth hiring.'],
    ['Employee onboarding', 'A first week and first ninety days that get new people productive and make them want to stay.'],
    ['HR advisory', 'Straight answers on contracts, conduct, compliance and the people decisions you are unsure about.'],
    ['Performance management', 'Clear goals, fair reviews and honest feedback loops managers can run without us.'],
    ['Training and development', 'Practical learning plans tied to the skills your business needs next.'],
    ['HR processes and documentation', 'Policies, handbooks, templates and records that are written down, current and easy to find.'],
  ],
  approach: 'We start with how your people work today, fix the processes that cost the most time, then train your managers to own them.',
  outcomes: ['Better people management', 'Stronger HR processes', 'Improved employee performance', 'Reduced administrative burden'],
  steps: [
    ['Understand', 'We review your current hiring, policies and pain points, and talk to the people who live with them.', 'A short HR health check'],
    ['Build', 'We set up the processes and documents you are missing and tidy the ones you have.', 'Working templates and policies'],
    ['Embed', 'We coach managers through the first cycles, then hand over with clear ownership.', 'Managers who run it themselves'],
  ],
  cta: { title: 'Tell us where your HR is stretched.', text: 'A short conversation is enough to find the first thing worth fixing. We reply within one working day.' },
};

export const bd = {
  name: 'Business Development',
  headline: 'Find the growth you are not reaching yet.',
  intro: 'We help you spot the right markets, win the right customers and keep a pipeline that fills itself.',
  badge: 'Growth, executed',
  chip: 'New markets, real pipeline',
  img: { hero: u('photo-1556761175-5973dc0f32e7', 1000), inset: u('photo-1507679799987-c73779587ccf', 600), detail: u('photo-1552664730-d307ca884978', 900), outcomes: u('photo-1542744173-8e7e53415bb0', 1000), challenge: u('photo-1460925895917-afdab827c52f', 900) },
  challenge: {
    title: 'Growth stalls when nobody owns it.',
    text: 'Most teams are too busy delivering to go looking for what comes next. Revenue then depends on referrals, timing and luck.',
    problems: [
      'Sales come from the same few referrals every quarter.',
      'It is unclear which customers are worth chasing.',
      'New markets feel risky because nothing has been tested.',
      'Partnerships get discussed at events and never closed.',
    ],
  },
  does: [
    ['Business development strategy', 'A plain plan for where to grow, who to win and what to do first.'],
    ['Market and opportunity identification', 'We research segments, competitors and gaps, and rank the opportunities by size and effort.'],
    ['Customer acquisition', 'Targeted outreach, offers and follow-up that turn cold names into conversations.'],
    ['Sales support', 'Proposals, pitches and pipeline discipline that help your team close what it opens.'],
    ['Partnership development', 'We find the right partners, shape the deal and carry it through to signature.'],
    ['Growth strategy', 'A twelve-month view of channels, pricing and capacity, tied to numbers you can track.'],
  ],
  approach: 'We pick a small number of opportunities, test them quickly and put weight behind the ones that respond.',
  outcomes: ['New growth opportunities', 'Stronger market positioning', 'Better customer acquisition', 'Higher sales performance'],
  steps: [
    ['Map', 'We study your market, customers and competitors, and shortlist the opportunities worth pursuing.', 'A ranked opportunity map'],
    ['Pursue', 'We run outreach, build proposals and open partnership talks alongside your team.', 'Live conversations and a growing pipeline'],
    ['Convert', 'We review what is working weekly, support the close and double down on what pays.', 'Deals won and a repeatable method'],
  ],
  cta: { title: 'Tell us where you want to grow.', text: 'Bring a market, a target or just a hunch. We will tell you honestly what we think. We reply within one working day.' },
};

export const bpo = {
  name: 'Business Process Optimisation',
  headline: 'Make the way you work as good as the work you do.',
  intro: 'We find where time and money leak out of your operations, and replace the workarounds with workflows that hold.',
  badge: 'Work smarter',
  chip: 'Fewer bottlenecks',
  img: { hero: u('photo-1454165804606-c3d57bc86b40', 1000), inset: u('photo-1553877522-43269d4ea984', 600), detail: u('photo-1431540015161-0bf868a2d407', 900), outcomes: u('photo-1497366216548-37526070297c', 1000), challenge: u('photo-1504384308090-c894fdcc538d', 900) },
  challenge: {
    title: 'Busy businesses run on habits nobody wrote down.',
    text: 'What worked at ten people strains at fifty. Tasks get done, but slowly, differently each time and only when the right person is in.',
    problems: [
      'The same task is done three different ways by three people.',
      'Approvals stall in inboxes and nobody knows where.',
      'Knowledge sits with a few people, and leaves when they do.',
      'When something goes wrong, nobody is clearly accountable.',
    ],
  },
  does: [
    ['Process assessment', 'We measure how work really flows today, where it waits and what it costs.'],
    ['Process mapping', 'Clear visual maps of each process, with owners, handoffs and decision points.'],
    ['Workflow optimisation', 'We cut steps, remove duplicate effort and redesign flows around how your team works.'],
    ['SOP development', 'Step-by-step procedures a new hire can follow on day one.'],
    ['Business documentation', 'Policies, checklists and records organised so anyone can find what they need.'],
    ['Operational reviews', 'Regular check-ins that test whether the new way is holding and where it slips.'],
    ['Implementation support', 'We stay through the rollout, train the team and fix what the first weeks reveal.'],
  ],
  approach: 'We change the few processes that matter most first, prove the gain, then move to the next. No big-bang overhauls.',
  outcomes: ['Improved operational efficiency', 'Clearer workflows', 'Robust accountability', 'Fewer operational bottlenecks'],
  steps: [
    ['Assess', 'We map and measure your current processes and mark the bottlenecks that cost the most.', 'A process map with the gaps marked'],
    ['Redesign', 'We rebuild the workflows and write the SOPs with the people who will use them.', 'New workflows and procedures'],
    ['Embed', 'We support the rollout, train the team and review results until the change sticks.', 'Faster work with clear owners'],
  ],
  cta: { title: 'Tell us what keeps slowing your team down.', text: 'Describe the process that frustrates you most and we will start there. We reply within one working day.' },
};

export const pm = {
  name: 'Project Management',
  headline: 'Projects that finish when you said they would.',
  intro: 'We plan, coordinate and report on your projects so everyone sees the same picture and problems surface early.',
  badge: 'On time, on scope',
  chip: 'Full visibility, from day one',
  img: { hero: u('photo-1531482615713-2afd69097998', 1000), inset: u('photo-1517048676732-d65bc937f952', 600), detail: u('photo-1559136555-9303baea8ebd', 900), outcomes: u('photo-1556761175-4b46a572b786', 1000), challenge: u('photo-1600880292089-90a7e086ee0c', 900) },
  challenge: {
    title: 'Most projects slip quietly.',
    text: 'Deadlines rarely fail in one dramatic moment. They drift a day at a time while teams, vendors and sponsors each hold a different version of the plan.',
    problems: [
      'Timelines move and nobody says so until it is late.',
      'Teams and vendors work from different assumptions.',
      'Risks are noticed only after they have already cost money.',
      'Stakeholders hear different stories depending on who they ask.',
    ],
  },
  does: [
    ['Project planning', 'Scope, milestones, budget and resources set out clearly before work starts.'],
    ['Project coordination', 'One person keeping teams and vendors in step, every day.'],
    ['Timeline management', 'A live schedule that shows slippage early, with a fix proposed alongside it.'],
    ['Stakeholder management', 'Regular, honest updates so sponsors and partners are never surprised.'],
    ['Risk management', 'A running log of what could go wrong, who owns it and what we do about it.'],
    ['Monitoring and reporting', 'Short weekly reports on progress, spend and risks that leaders actually read.'],
    ['Implementation support', 'Hands-on help to get deliverables over the line and handed over cleanly.'],
  ],
  approach: 'We set one plan everyone agrees to, report against it weekly and raise problems while they are still small.',
  outcomes: ['Complete project visibility', 'Improved coordination across teams', 'Clear accountability', 'Timely project delivery'],
  steps: [
    ['Plan', 'We agree scope, timeline, budget and owners, and log the risks we can already see.', 'One agreed project plan'],
    ['Coordinate', 'We run the day-to-day with your teams and vendors, and keep the schedule current.', 'Teams moving in step'],
    ['Deliver', 'We report weekly, handle issues early and close the project with a clean handover.', 'Delivery on time with a clear record'],
  ],
  cta: { title: 'Tell us about the project that worries you.', text: 'Share the scope and the deadline and we will tell you what we would do first. We reply within one working day.' },
};

export const facilitation = {
  name: 'Facilitation',
  headline: 'Get everyone in the room pulling the same way.',
  intro: 'We run workshops, training and strategy sessions that end with decisions, skills and a plan people will actually follow.',
  badge: 'Aligned teams',
  chip: 'Sessions that end in action',
  img: { hero: u('photo-1515187029135-18ee286d815b', 1000), inset: u('photo-1524178232363-1fb2b075b655', 600), detail: u('photo-1517048676732-d65bc937f952', 900), outcomes: u('photo-1522071820081-009f0129c71c', 1000), challenge: u('photo-1556761175-5973dc0f32e7', 900) },
  challenge: {
    title: 'Good strategy dies in the gap between the meeting and Monday.',
    text: 'Teams leave offsites energised and return to the same habits. Without structure, alignment fades and skills gaps keep slowing delivery.',
    problems: [
      'People nod in the meeting and drift once it ends.',
      'Nobody can explain the strategy in a sentence.',
      'Skills gaps hold back work that should be routine.',
      'Workshops finish with lots of ideas and no owners.',
    ],
  },
  does: [
    ['Workshops', 'Focused, hands-on sessions built around one problem and one outcome.'],
    ['Corporate training', 'Practical training for teams and managers, tailored to your sector and your real cases.'],
    ['Strategy sessions', 'Structured conversations that turn direction into priorities, owners and dates.'],
    ['Team sessions', 'Time to fix how a team communicates, decides and shares the load.'],
    ['Capacity-building', 'Ongoing programmes that grow the skills of your people and your managers.'],
    ['Stakeholder engagement', 'Facilitated meetings that bring partners, regulators or customers into the conversation.'],
  ],
  approach: 'We design each session backwards from the decision you need, keep the conversation moving and write the actions down before anyone leaves.',
  outcomes: ['Better strategic alignment', 'Knowledge and skills development', 'Productive discussions', 'Clearer action plans'],
  steps: [
    ['Prepare', 'We talk to participants, agree the outcome and design the session around it.', 'A tailored session plan'],
    ['Facilitate', 'We run the session, keep it honest and productive, and capture decisions as they happen.', 'Decisions and shared understanding'],
    ['Follow through', 'We send a clear action plan, check in after two weeks and help the team stay on it.', 'Actions with owners and dates'],
  ],
  cta: { title: 'Tell us what your team needs to get aligned on.', text: 'Share the goal and the group and we will suggest the right format. We reply within one working day.' },
};