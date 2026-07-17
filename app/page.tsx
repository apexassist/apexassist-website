const services = [
  {
    title: "Dedicated Virtual Assistants",
    description:
      "Reliable professionals who manage your inbox, calendar, CRM, research and daily administration so you can focus on growth.",
    icon: "VA",
  },
  {
    title: "Customer Support",
    description:
      "Professional phone, email and live-chat support that delivers fast, friendly service and keeps customers looked after.",
    icon: "CS",
  },
  {
    title: "Administrative Support",
    description:
      "Accurate support for documents, quotations, reporting, scheduling and the daily tasks that keep your business organised.",
    icon: "AS",
  },
  {
    title: "Back-Office Operations",
    description:
      "Dedicated operational support that streamlines repetitive work, improves efficiency and gives your internal team more capacity.",
    icon: "BO",
  },
];

const benefits = [
  ["Dedicated Professionals", "Your team member works as an extension of your business, not as a shared or anonymous resource."],
  ["Founder-Led Support", "You receive direct involvement, responsive communication and personal service from the beginning."],
  ["Careful Recruitment", "Candidates are assessed for communication, reliability, skills and fit before you interview them."],
  ["Start With One", "Begin with one manageable role, prove the process and expand your team when you are ready."],
  ["Clear Communication", "We believe in honest updates, realistic expectations and solving issues quickly."],
  ["Long-Term Partnership", "Our goal is not a quick placement. We want to help you build a dependable team over time."],
];

const steps = [
  ["01", "Discovery", "We learn about your business, workload, expectations and the exact support you need."],
  ["02", "Recruitment", "We identify and assess suitable professionals for your role and company culture."],
  ["03", "Interview", "You meet the shortlisted candidates and choose the person who fits best."],
  ["04", "Onboarding", "We support the setup process so your new team member integrates smoothly."],
  ["05", "Ongoing Support", "We remain involved to support communication, performance and long-term success."],
];

const industries = [
  ["HS", "Home Services", "Scheduling, quotations, customer updates and administration."],
  ["PS", "Professional Services", "Inbox, calendar, documents, CRM and client coordination."],
  ["PM", "Property Management", "Tenant communication, maintenance coordination and reporting."],
  ["HP", "Healthcare Practices", "Administrative support, scheduling and patient communication."],
  ["LF", "Legal Firms", "Document support, client follow-up and diary management."],
  ["EC", "E-commerce", "Customer service, order support and back-office operations."],
];

const faqs = [
  ["Can I start with just one team member?", "Yes. Most clients begin with one dedicated professional and grow their team as the business expands."],
  ["Can I interview candidates before hiring?", "Absolutely. We present shortlisted candidates and you make the final selection."],
  ["What if the person is not the right fit?", "If the placement is not working, we will recruit a suitable replacement so your business continues receiving support."],
  ["How long does recruitment take?", "Most placements are completed within one to three weeks, depending on the role and requirements."],
  ["Do you manage payroll and administration?", "Yes. We manage payroll and the related administration so you can focus on running your business."],
  ["Can my team grow later?", "Definitely. Apex Assist is designed to help you scale from one remote professional to a larger remote team."],
];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5 9.2 17 19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-lg font-extrabold tracking-[0.18em] sm:text-xl">
            <img
  src="/apex-assist-header.svg"
  alt="Apex Assist - Your Remote Staffing Partner"
  className="h-12 w-auto"
/>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why-us" className="hover:text-white">Why Us</a>
            <a href="#how-it-works" className="hover:text-white">How It Works</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <a href="mailto:info@getapexassist.com?subject=Apex%20Assist%20Discovery%20Call" className="rounded-full bg-blue-500 px-4 py-2.5 text-sm font-bold shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400 sm:px-5">
            Book a Call
          </a>
        </nav>
      </header>

      <section id="top" className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#020617_0%,#0f172a_48%,#0b2a55_100%)]" />
        <div className="absolute -left-48 top-24 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-40 -top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" /> Your Remote Staffing Partner
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Build your remote team.
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Without building local overhead.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              Dedicated South African professionals who work as an extension of your business—not another anonymous outsourced service.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:info@getapexassist.com?subject=Build%20My%20Remote%20Team" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-bold shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400">
                Build My Team <ArrowIcon />
              </a>
              <a href="#services" className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold transition hover:-translate-y-1 hover:bg-white/10">
                Explore Solutions
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 text-sm text-slate-300 sm:grid-cols-3">
              {["Dedicated staff", "Founder-led support", "Scale when ready"].map((item) => (
                <div key={item} className="flex items-center gap-2"><span className="text-blue-400"><CheckIcon /></span><span className="font-semibold">{item}</span></div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div><p className="text-sm text-slate-400">Your remote team</p><p className="mt-1 text-xl font-bold">Working inside your business</p></div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Active</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[["Inbox","Managed"],["Calendar","Organised"],["Customer Support","Covered"],["CRM","Updated"],["Administration","On track"],["Management Time","Protected"]].map(([label,status]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="flex items-center gap-2 text-blue-400"><CheckIcon className="h-4 w-4" /><span className="text-xs font-bold uppercase tracking-wider">{status}</span></div>
                    <p className="mt-3 font-semibold">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/15 to-cyan-400/10 p-5">
                <p className="text-sm text-blue-200">The Apex Assist approach</p>
                <p className="mt-2 text-2xl font-extrabold">Start with one. Grow with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[["20+ Years","Business leadership"],["Founder-Led","Personal support"],["South African","Professional talent"],["US-Focused","Built for your market"]].map(([title,subtitle]) => (
            <div key={title} className="flex items-center gap-4"><span className="h-10 w-1 rounded-full bg-blue-500" /><div><p className="font-extrabold">{title}</p><p className="mt-1 text-sm text-slate-400">{subtitle}</p></div></div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">Our Solutions</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Reliable support for the work that keeps your business moving.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">Start with one dedicated professional or build a broader remote department over time. Every placement is designed around your systems, workload and expectations.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service,index) => (
              <article key={service.title} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-blue-50 group-hover:bg-blue-100" />
                <div className="relative flex items-start justify-between gap-5"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20">{service.icon}</div><span className="text-sm font-extrabold text-blue-600">0{index+1}</span></div>
                <h3 className="relative mt-8 text-2xl font-extrabold">{service.title}</h3><p className="relative mt-4 max-w-xl leading-7 text-slate-600">{service.description}</p>
                <a href="mailto:info@getapexassist.com?subject=Apex%20Assist%20Service%20Enquiry" className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Discuss this role <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-hidden border-y border-white/10 bg-slate-950 px-6 py-24 lg:px-8">
        <div className="absolute -right-48 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-400">Why Apex Assist</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Personal service, reliable people and room to grow.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Every client receives direct attention, careful recruitment and ongoing support.</p></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title,description],index) => (
              <article key={title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 font-extrabold text-blue-300 group-hover:bg-blue-500 group-hover:text-white">{String(index+1).padStart(2,"0")}</div>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-4 leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">How It Works</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">A clear path from first conversation to a working team member.</h2></div>
          <div className="relative mt-16"><div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-5">
              {steps.map(([number,title,description]) => (
                <article key={number} className="relative text-center"><div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20">{number}</div><div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></div></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="border-y border-white/10 bg-slate-900 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-400">Industries</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Built for practical, service-driven businesses.</h2></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([icon,name,description]) => (
              <article key={name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-sm font-extrabold text-blue-300">{icon}</div><h3 className="mt-6 text-2xl font-bold">{name}</h3><p className="mt-3 leading-7 text-slate-400">{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">Why South Africa</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Professional talent with strong communication and global business compatibility.</h2><p className="mt-6 text-lg leading-8 text-slate-600">South Africa offers educated, service-minded professionals who communicate well and integrate naturally with Western businesses.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Strong English communication","Professional workforce","Cultural compatibility","Cost-effective growth","Flexible time-zone coverage","Strong service culture"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="mt-0.5 text-blue-600"><CheckIcon /></span><p className="font-semibold text-slate-700">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-slate-950 p-10 text-white sm:p-12"><div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" /><div className="relative"><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-400">Founder-Led</p><h2 className="mt-4 text-4xl font-extrabold">Personal attention from the beginning.</h2><p className="mt-6 leading-8 text-slate-300">Apex Assist was founded by Alistair Stocker, a South African business owner with more than two decades of practical experience managing clients, teams and daily operations.</p></div></div>
          <div className="flex flex-col justify-center p-10 sm:p-12"><h3 className="text-3xl font-extrabold">Start with one great person. Build from there.</h3><p className="mt-5 text-lg leading-8 text-slate-600">Our approach is deliberate: begin with manageable requirements, recruit carefully, deliver excellent service and grow through trust, results and referrals.</p><div className="mt-8 flex flex-wrap gap-3">{["Quality before quantity","Honest communication","Reliable delivery","Measured growth"].map((value) => <span key={value} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">{value}</span>)}</div></div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">Frequently Asked Questions</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Clear answers before you get started.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Starting a remote team should feel straightforward.</p></div>
          <div className="space-y-4">
            {faqs.map(([question,answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition open:border-blue-200 open:bg-white open:shadow-lg"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold"><span>{question}</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-700 transition group-open:rotate-45">+</span></summary><p className="mt-5 border-t border-slate-200 pt-5 leading-7 text-slate-600">{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-14 text-center shadow-2xl shadow-blue-950/40 sm:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-100">Start Small. Grow Confidently.</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">Ready to take work off your plate?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">Tell us which role would make the biggest difference in your business. We will help you explore the right person and next steps.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="mailto:info@getapexassist.com?subject=Apex%20Assist%20Discovery%20Call" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50">Book a Free Discovery Call <ArrowIcon /></a><a href="#services" className="rounded-xl border border-white/30 px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-white/10">Review Our Solutions</a></div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div><p className="text-xl font-extrabold tracking-[0.18em]">APEX <span className="text-blue-400">ASSIST</span></p><p className="mt-5 max-w-md leading-7 text-slate-400">Dedicated remote professionals helping growing businesses create more capacity, reduce pressure and improve service.</p><p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Your Remote Staffing Partner.</p></div>
          <div><p className="font-bold">Quick Links</p><div className="mt-5 flex flex-col gap-3 text-slate-400"><a href="#services" className="hover:text-white">Services</a><a href="#why-us" className="hover:text-white">Why Apex Assist</a><a href="#how-it-works" className="hover:text-white">How It Works</a><a href="#industries" className="hover:text-white">Industries</a><a href="#faq" className="hover:text-white">FAQ</a></div></div>
          <div><p className="font-bold">Contact</p><a href="mailto:info@getapexassist.com" className="mt-5 block font-semibold text-blue-400 hover:text-blue-300">info@getapexassist.com</a><p className="mt-4 leading-7 text-slate-400">Gauteng, South Africa<br />Serving businesses across the United States</p></div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Apex Assist. All rights reserved.</p><p>Your Business. Our Team. Your Success.</p></div>
      </footer>
    </main>
  );
}
