import { Link, useParams } from "react-router";
import { NewNavbar } from "../../components/navbar";
import { JobsPreviewHero } from "../../components/hero";
import work from "../../assets/jobs/work.png";
import location from "../../assets/jobs/location.png";

// ─────────────────────────────────────────────
// JOBS DATA — only edit here to add / remove jobs
// ─────────────────────────────────────────────
export const JOBS = [
  {
    id: "customer-support-officer",
    company: "Green Bistroo",
    posted: "9 Apr, 2026",
    title: "Customer Support Officer",
    type: "Physical",
    location: "Lekki, Lagos",
    applyLink: "https://forms.gle/DJNP6aamKfiKoRKS7",
    summary:
      "The Customer Support Officer is responsible for managing daily business operations, coordinating order fulfillment, maintaining customer relationships, and supporting production activities. This role ensures efficient logistics, accurate order processing, and excellent customer service across all sales platforms.",
    responsibilities: [
      "Actively manage Green Bistroo's WhatsApp Business account, including responding to inquiries and processing orders",
      "Coordinate delivery and riders for prompt and efficient delivery",
      "Communicate with customers on order status, delivery timelines, and updates",
      "Post daily/regular status updates including product ads, offers, and engaging content",
      "Send personalized greetings, promos, and follow-ups to customers on special occasions and holidays",
      "Build strong relationships to encourage repeat orders and customer loyalty",
      "Manage product listings, pricing, and orders across multiple platforms (e.g., Glovo)",
      "Liaise with platform account officers to resolve issues and optimize performance",
      "Ensure consistency of information across all sales channels",
      "Maintain detailed daily records of all transactions",
      "Capture key customer information (name, contact, address, order details)",
      "Track and organize data across all sales channels for accountability and growth insights",
      "Active involvement in fruit processing, juice extraction, and bottling",
      "Ensure proper storage and handling of products in line with hygiene standards",
      "Follow all hygiene and food safety standards strictly",
      "Support smooth day-to-day production operations",
      "Provide prompt, courteous, and professional responses to customer inquiries",
      "Handle complaints and feedback effectively to ensure customer satisfaction",
      "Build and maintain strong customer relationships to encourage repeat business",
      "Ensure every customer interaction reflects the Green Bistroo brand: fresh, warm, and reliable",
      "Ensure accurate packaging of orders according to customer specifications",
      "Double-check orders before dispatch to avoid errors",
      "Work closely with logistics/delivery riders to ensure timely delivery",
    ],
    requirements: [
      "Proven experience in customer service or a client-facing role",
      "Strong communication and interpersonal skills",
      "Excellent problem-solving abilities with a customer-first mindset",
      "Proficiency in basic computer tools and customer support systems",
      "Above one year work experience",
    ],
  },
  {
    id: "chef-healthy-drinks",
    company: "Green Bistroo",
    posted: "9 Apr, 2026",
    title: "Chef (Healthy Drinks & Light Bites)",
    type: "Physical",
    location: "Lekki, Lagos",
    applyLink: "https://forms.gle/Es5Z5JfnyNGeSNnd9",
    summary:
      "We are looking for a creative and detail-oriented Chef to lead the preparation of our healthy drink offerings alongside light food items such as sandwiches and banana bread. The ideal candidate is passionate about health-conscious meals, consistency, and delivering high-quality products in a fast-paced environment.",
    responsibilities: [
      "Prepare and serve healthy drinks (e.g., smoothies, juices, and specialty beverages) according to standard recipes",
      "Prepare fresh food items including sandwiches and banana bread, ensuring quality and consistency",
      "Develop and improve recipes aligned with the brand's healthy and nutritious focus",
      "Maintain cleanliness and organization of the kitchen in line with food safety standards",
      "Monitor inventory levels, manage stock, and minimize waste",
      "Ensure all orders are prepared quickly and accurately to meet customer expectations",
    ],
    requirements: [
      "Proven experience as a Chef, Cook, or similar role",
      "Knowledge of healthy food preparation and nutrition is an added advantage",
      "Ability to work efficiently in a fast-paced environment",
      "Strong attention to detail and presentation",
    ],
  },
  {
    id: "general-manager",
    company: "HD Network",
    posted: "9 Apr, 2026",
    title: "General Manager",
    type: "Physical",
    location: "Magodo Phase 2, Lagos",
    applyLink: "https://forms.gle/Mr9jM8BpnpaKPsaJ7",
    aboutOrg:
    "We are an IT, Media, and Broadcasting company partnering with satellite providers across Europe, Asia, and Africa to deliver innovative solutions for clients distributing bespoke content across Africa.",
  summary:
    "We are seeking a highly strategic, execution-driven General Manager to oversee operations across the organisation and its portfolio of business units. This role is suited for a commercially minded leader who combines strong financial acumen with operational excellence and the ability to scale systems across multiple entities. The successful candidate will act as a key partner to leadership, driving performance, efficiency, and growth across all areas of the business while ensuring alignment with the company's long-term vision.",
    responsibilities: [
      "Provide operational leadership across the company and its portfolio businesses, ensuring alignment with overall strategy and performance goals",
      "Oversee end-to-end business operations including administration, service delivery, and project execution across multiple entities",
      "Lead financial management across the portfolio, including budgeting, forecasting, cash flow management, and performance reporting",
      "Analyse financial and operational data with a strong eye for numbers, identifying trends, risks, and opportunities to drive profitability",
      "Establish and standardise processes, systems, and KPIs across all portfolio companies to improve efficiency and scalability",
      "Drive execution of strategic initiatives, partnerships, and expansion opportunities across markets",
      "Maintain oversight of all live services, contracts, and client relationships, ensuring delivery excellence and compliance",
      "Work closely with leadership to support decision-making through data-driven insights and business intelligence",
      "Build, lead, and mentor teams across functions, ensuring accountability and high performance",
      "Identify operational gaps and implement solutions to optimize workflows, reduce costs, and improve margins",
      "Manage cross-functional projects and ensure timely delivery of key business objectives",
      "Act as a central point of coordination across different business units, ensuring clarity, communication, and execution",
    ],
    requirements: [
      "Strong financial acumen with deep experience in budgeting, financial analysis, and performance tracking",
      "Proven experience in an operations leadership role (COO, General Manager, or similar), ideally across multiple business units or portfolio companies",
      "Strong analytical mindset with the ability to translate data into actionable insights and strategy",
      "Experience in media, technology, or related industries is an advantage",
      "Demonstrated ability to build systems, processes, and scalable operations",
      "Excellent leadership, communication, and stakeholder management skills",
      "Comfortable working in a fast-paced, dynamic environment with multiple priorities",
    ],
    values: {
      intro: "We are guided by a strong set of values that define how we work and what we expect from our team:",
      items: [
        { label: "Integrity", text: "We uphold the highest standards of honesty and transparency in all we do" },
        { label: "Honesty", text: "We communicate openly and take accountability for our actions" },
        { label: "Hard Work", text: "We are committed to delivering excellence through both smart and dedicated effort" },
      ],
      outro: `We are looking for a self-starter with a "can-do" attitude, strong ownership mindset, and the ability to learn quickly and adapt across different business environments.`,
    },
  },
];

// ─────────────────────────────────────────────
// SHARED PILL COMPONENT
// ─────────────────────────────────────────────
const Pill = ({ src, label, iconWidth = 14 }) => (
  <span className="JobMetaPill">
    <img src={src} alt="" width={iconWidth} />
    {label}
  </span>
);

// ─────────────────────────────────────────────
// JOBS LISTING PAGE
// ─────────────────────────────────────────────
export const JobsPreview = () => (
  <>
    <NewNavbar />
    <JobsPreviewHero />
    <AllJobs />
  </>
);

export const AllJobs = () => (
  <div className="JobsSection WhatWeDoBg">
    <p className="JobsEyebrow">Job Openings</p>
    <p className="JobsSub">
      {JOBS.length} open position{JOBS.length !== 1 ? "s" : ""} across our partner companies
    </p>
    <div className="JobsGrid">
      {JOBS.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
);

const JobCard = ({ job }) => (
  <div className="JobsCard">
    <div className="JobsCardBody">
      <div className="JobsCardTop">
        <span className="JobCompanyBadge">{job.company}</span>
        <span className="JobPosted">{job.posted}</span>
      </div>
      <h4 className="JobsCardTitle">{job.title}</h4>
      <div className="JobMetaRow">
        <Pill src={work} label={job.type} iconWidth={15} />
        <Pill src={location} label={job.location} iconWidth={13} />
      </div>
      <p className="JobsCardDesc">{job.summary}</p>
    </div>
    <div className="JobsCardFooter">
      <div className="JobsCardDivider" />
      <Link to={`/jobs/${job.id}`} className="MainBtn JobsCardBtn">
        View Details &amp; Apply
      </Link>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// JOB DESCRIPTION PAGE
// ─────────────────────────────────────────────
export const JobDescription = () => {
  const { jobId } = useParams();
  const job = JOBS.find((j) => j.id === jobId);

  if (!job) {
    return (
      <>
        <NewNavbar />
        <div className="JDWrap JDNotFound">
          <h4>Job not found.</h4>
          <Link to="/jobs" className="MainBtn">
            Back to Job Openings
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <NewNavbar />
      <div className="JDWrap">

        {/* Top bar */}
        <div className="JDTopBar">
          <Link to="/jobs" className="JDBackLink">
            ← Back to Job Openings
          </Link>
          <a href={job.applyLink} className="JDApplyLinkTop" target="_blank" rel="noreferrer">
            Apply Now →
          </a>
        </div>

        {/* Header */}
        <div className="JDHeader">
          <h1 className="JDTitle">{job.title}</h1>
          <div className="JDMetaRow">
            <Pill src={work} label={job.type} iconWidth={15} />
            <Pill src={location} label={job.location} iconWidth={13} />
          </div>
          <p className="JDCompanyLine">
            {job.company}&nbsp;&nbsp;·&nbsp;&nbsp;Posted {job.posted}
          </p>
        </div>

     {/* About the Org */}
{job.aboutOrg && (
  <>
    <h5 className="JDSectionHeading">About the Organisation</h5>
    <p className="JDPlainText">{job.aboutOrg}</p>
  </>
)}

{/* Summary */}
<h5 className="JDSectionHeading">Job Summary</h5>
<p className="JDPlainText">{job.summary}</p>

        {/* Responsibilities */}
        <h5 className="JDSectionHeading">Responsibilities</h5>
        <ul className="JDList">
          {job.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Requirements */}
        <h5 className="JDSectionHeading">Requirements</h5>
        <ul className="JDList">
          {job.requirements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Our Values — only shown if field exists */}
{job.values && (
  <>
    <h5 className="JDSectionHeading">Our Values</h5>
    <div className="JDSummary">
      <p style={{ margin: "0 0 12px" }}>{job.values.intro}</p>
      <ul className="JDList" style={{ margin: "0 0 12px" }}>
        {job.values.items.map((v, i) => (
          <li key={i}>
            <strong>{v.label}</strong> – {v.text}
          </li>
        ))}
      </ul>
      <p style={{ margin: 0 }}>{job.values.outro}</p>
    </div>
  </>
)}

        {/* Bottom CTA */}
        <a href={job.applyLink} className="MainBtn JDApplyBottom" target="_blank" rel="noreferrer">
          Apply for this role →
        </a>
      </div>
    </>
  );
};