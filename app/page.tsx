const services = [
  {
    title: "Dedicated Virtual Assistants",
    description:
      "Reliable professionals who manage your inbox, calendar, CRM, research and daily administration so you can focus on growing your business.",
  },
  {
    title: "Customer Support Representatives",
    description:
      "Professional phone, email and live chat support that delivers fast, friendly service and keeps your customers happy.",
  },
  {
    title: "Administrative Assistants",
    description:
      "Accurate support for documents, quotations, reporting, scheduling and day-to-day administration that keeps your business organised.",
  },
  {
    title: "Back-Office Operations",
    description:
      " Dedicated operational support that streamlines repetitive tasks, improves efficiency and frees your team to focus on growth.",
  },
];

const benefits = [
  {
    title: "Personal Service",
    description:
      "You receive direct, responsive support from a boutique partner that treats every placement as important.",
  },
  {
    title: "Dedicated Professionals",
    description:
      "Your remote professional works as an extension of your business, not as a shared or anonymous resource.",
  },
  {
    title: "Built to Grow",
    description:
      "Begin with one reliable team member and expand gradually when your business and systems are ready.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, workload, expectations and the exact support you need.",
  },
  {
    number: "02",
    title: "Recruitment",
    description:
      "We identify and assess suitable professionals based on your role requirements and company culture.",
  },
  {
    number: "03",
    title: "Interview & Selection",
    description:
      "You meet the shortlisted candidates and choose the person who best fits your business.",
  },
  {
    number: "04",
    title: "Onboarding",
    description:
      "We support the setup and onboarding process so your new team member can integrate smoothly.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Apex Assist remains involved to support communication, performance and long-term success.",
  },
];

const industries = [
  "Home Services",
  "Professional Services",
  "Property Management",
  "Healthcare Practices",
  "Legal Firms",
  "E-commerce",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 12.5 9.2 17 19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#top"
            className="text-xl font-extrabold tracking-[0.16em] text-white"
          >
            APEX <span className="text-blue-400">ASSIST</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#why-us" className="transition hover:text-white">
              Why Apex Assist
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>

          <a
            href="mailto:info@getapexassist.com?subject=Apex%20Assist%20Discovery%20Call"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Book a Discovery Call
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-blue-400">
              Remote Staffing Partner
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your Business.
              <br />
              <span className="text-blue-400">Our Team.</span>
              <br />
              Your Success.
            </h1>

            <p className="mt-8 max-w-2xl text-xl font-medium text-slate-200">
              Dedicated remote professionals who become an extension of your
              business.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Apex Assist recruits, supports and manages reliable remote
              professionals for growing businesses. Start with one person,
              build confidence in the process and expand when you are ready.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@getapexassist.com?subject=Build%20My%20Remote%20Team"
                className="rounded-xl bg-blue-500 px-7 py-4 text-center font-semibold text-white transition hover:bg-blue-400"
              >
                Build My Team
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                Start Small. Grow Properly.
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                One great team member can change how your business operates.
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  "Reduce pressure on your internal team",
                  "Improve response times and customer service",
                  "Free up management time",
                  "Add capacity without rushing into large local overheads",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-blue-400">
                      <CheckIcon />
                    </span>
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">
                <p className="font-semibold text-white">
                  Ideal for growing businesses needing one or two reliable
                  people to start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 text-sm font-semibold text-slate-300 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            "Dedicated Professionals",
            "Founder-Led Service",
            "Flexible Team Growth",
            "Long-Term Partnerships",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-blue-400">
                <CheckIcon />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="why-us" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
              Why Apex Assist
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Built for businesses that value quality, communication and
              reliability.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Apex Assist is intentionally starting as a focused, boutique
              remote staffing partner. That means every client receives
              personal attention, careful recruitment and ongoing support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-white/10 bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-400">
              Our Solutions
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Build a dedicated remote team that feels like your own.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Whether you need one dedicated professional 
              or an entire remote department, Apex Assist
              provides experienced people who integrate
              seamlessly with your business. Start with one
              team member and scale as your company grows.
          
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-blue-400/40"
              >
                <p className="text-sm font-bold text-blue-400">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-slate-50 px-6 py-24 text-slate-950 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              A clear path from first conversation to a working team member.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-extrabold text-blue-600">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
              Why South Africa
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Professional talent with strong communication and global
              business compatibility.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Strong English communication",
              "Professional and educated workforce",
              "Cultural compatibility with Western markets",
              "Cost-effective team growth",
              "Flexible support across time zones",
              "Strong customer-service culture",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5"
              >
                <span className="text-blue-600">
                  <CheckIcon />
                </span>
                <p className="font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-400">
              Industries
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Supporting growing businesses across practical, service-driven
              industries.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-950 p-10 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-400">
              Founder-Led
            </p>
            <h2 className="mt-4 text-4xl font-extrabold">
              Personal attention from the beginning.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              Apex Assist was founded by Alistair Stocker, a South African
              business owner with more than two decades of practical experience
              managing clients, teams and daily operations.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold">
              Start with one great person. Build from there.
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We are not trying to place large teams before our systems and
              service standards are proven. Our approach is deliberate: begin
              with manageable client requirements, deliver exceptionally and
              grow through trust, reviews and referrals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Quality before quantity",
                "Honest communication",
                "Reliable delivery",
                "Measured growth",
              ].map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-100">
            Let&apos;s Talk
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ready to build your remote team?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what is taking up too much of your time. We&apos;ll help you
            explore whether one dedicated remote professional could make the
            difference.
          </p>

          <a
            href="mailto:info@getapexassist.com?subject=Apex%20Assist%20Discovery%20Call"
            className="mt-9 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-extrabold tracking-[0.16em]">
              APEX <span className="text-blue-400">ASSIST</span>
            </p>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Dedicated remote professionals helping growing businesses create
              more capacity, reduce pressure and improve service.
            </p>
          </div>

          <div>
            <p className="font-bold">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#why-us" className="hover:text-white">
                Why Apex Assist
              </a>
              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold">Contact</p>
            <a
              href="mailto:info@getapexassist.com"
              className="mt-4 block text-blue-400 hover:text-blue-300"
            >
              info@getapexassist.com
            </a>
            <p className="mt-3 text-slate-400">
              Gauteng, South Africa
              <br />
              Serving businesses across the United States
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Apex Assist. All rights reserved.</p>
          <p>Your Business. Our Team. Your Success.</p>
        </div>
      </footer>
    </main>
  );
}
