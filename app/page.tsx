const services = [
  "Customer Support",
  "Virtual Assistants",
  "Admin Support",
  "Back Office Operations",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 md:px-16">
        <nav className="mb-24 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">APEX ASSIST</h1>
          <a
            href="mailto:info@getapexassist.com"
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold"
          >
            Contact Us
          </a>
        </nav>

        <div className="max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Remote Staffing Partner
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Your Business. <br />
            Your Goals.
          </h2>

          <p className="mb-8 max-w-2xl text-xl text-slate-300">
            Remote teams helping your business grow.
          </p>

          <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-400">
            Apex Assist builds and manages dedicated remote teams that help
            businesses reduce costs, improve customer service, and scale with
            confidence.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@getapexassist.com"
              className="rounded-full bg-blue-500 px-8 py-4 text-center font-semibold"
            >
              Build My Team
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20 text-slate-950 md:px-16">
        <h3 className="mb-4 text-4xl font-bold">How We Help</h3>
        <p className="mb-10 max-w-2xl text-slate-600">
          Flexible remote professionals built around your business needs.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border p-6 shadow-sm">
              <h4 className="mb-3 text-xl font-bold">{service}</h4>
              <p className="text-slate-600">
                Reliable support designed to free up your time and help your
                business grow.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <h3 className="mb-4 text-4xl font-bold">Ready to grow smarter?</h3>
        <p className="mb-8 max-w-2xl text-slate-300">
          Let’s build a remote team that supports your business goals.
        </p>
        <a
          href="mailto:info@getapexassist.com"
          className="rounded-full bg-blue-500 px-8 py-4 font-semibold"
        >
          Book a Free Consultation
        </a>
      </section>
    </main>
  );
}
