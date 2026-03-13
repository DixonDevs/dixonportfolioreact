export default function DanielDixonPortfolio() {
  const skills = {
    languages: ["Dart", "PHP", "JavaScript", "Swift", "SQL"],
    frameworks: ["Flutter", "Laravel"],
    web: ["HTML", "CSS", "REST APIs", "Responsive Web Design", "jQuery"],
    cloud: ["AWS", "Cloudflare", "Continuous Integration", "DNS Management", "Twilio"],
    tools: ["Git", "Jira", "Figma", "MSP360", "Canva"],
    systems: ["Computer Networking", "System Administration", "Identity & Access Management", "Microsoft Exchange", "Hardware Installation"],
    other: ["WordPress Development", "UX Mockups", "Technical Documentation", "SaaS Platforms", "Database Management"],
  };

  const experience = [
    {
      role: "Lead Flutter Developer",
      company: "Ace One Technologies",
      location: "Jonesboro, AR",
      period: "Oct 2023 – Present",
      points: [
        "Built and maintained cross-platform apps for iOS, Android, and Windows using Flutter and Dart.",
        "Used MVVM architecture to improve maintainability and scalability.",
        "Delivered web solutions with WordPress, PHP, Laravel, HTML, CSS, and JavaScript.",
        "Integrated REST APIs and backend services for mobile and web functionality.",
        "Collaborated on debugging, optimization, and production-ready deployments.",
      ],
    },
    {
      role: "Owner / Operator",
      company: "DBD Branding Co LLC",
      location: "Bono, AR",
      period: "Dec 2022 – Present",
      points: [
        "Founded and operated a digital services company focused on branding and web solutions.",
        "Designed and launched custom websites for local businesses.",
        "Managed client communication, marketing strategy, and technical delivery.",
        "Provided ongoing support, updates, and website maintenance.",
      ],
    },
    {
      role: "Computer Technician",
      company: "M3 IT Professionals",
      location: "Jonesboro, AR",
      period: "Dec 2022 – Sep 2023",
      points: [
        "Delivered remote and onsite IT support for hardware, software, and networking issues.",
        "Configured and maintained backup solutions using MSP360.",
        "Installed network infrastructure and workstation hardware.",
        "Supported users across Windows environments and enterprise tools.",
      ],
    },
    {
      role: "Patient Care Technician",
      company: "White River Medical Center",
      location: "Batesville, AR",
      period: "Mar 2020 – Jun 2021",
      points: [
        "Assisted nurses and physicians with patient monitoring and care during the COVID-19 pandemic.",
        "Recorded patient vitals and medical information.",
        "Supported critical care response situations and maintained BLS certification.",
      ],
    },
  ];

  const education = [
    {
      school: "Arkansas State University",
      detail: "Computer Science Coursework",
      meta: "Jonesboro, AR • 2021–2022 • Not Completed",
    },
    {
      school: "Ozarka College",
      detail: "Associate Degree – General Education",
      meta: "Melbourne, AR • 2018",
    },
    {
      school: "University of Arkansas Community College at Batesville",
      detail: "Nursing Assistant Certification",
      meta: "Batesville, AR • 2020",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-[30%] right-[-8%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[25%] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Remote-Ready Software Developer • Flutter • PHP • Laravel • Full-Stack Web & Mobile
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Daniel Dixon</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                I build practical software that works across
                <span className="text-cyan-300"> web, mobile, and desktop</span>.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                Full-stack developer with experience shipping cross-platform applications in Flutter and building modern web solutions with PHP, Laravel, JavaScript, and responsive frontend technologies. Known for solving hard technical problems, learning fast, and delivering reliable software in fast-paced environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:danieldixon.dev@gmail.com"
                className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-neutral-950 transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href="tel:+18706159088"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Call • (870) 615-9088
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Base", "Yakima, WA"],
                ["Status", "Open to Remote Roles"],
                ["Target", "$75k–$85k"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">{label}</p>
                  <p className="mt-2 text-sm font-medium text-white/90">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-neutral-900/80 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Core Stack</p>
                  <h2 className="mt-2 text-2xl font-semibold">What I work with</h2>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">MVVM • API-Driven</div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Flutter", "Laravel", "PHP", "JavaScript", "Dart", "REST APIs", "AWS", "Cloudflare"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-3xl font-semibold">3</p>
                  <p className="mt-1 text-sm text-white/60">Platforms shipped with Flutter</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-3xl font-semibold">Full-Stack</p>
                  <p className="mt-1 text-sm text-white/60">Mobile, web, backend, and support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">About</p>
            <h2 className="mt-3 text-3xl font-semibold">A developer with real-world range</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Cross-platform app development for iOS, Android, and Windows.",
              "Laravel, PHP, and JavaScript experience for web application delivery.",
              "Practical IT background in systems support, networking, and troubleshooting.",
              "Business ownership experience through DBD Branding Co LLC.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Experience</p>
              <h2 className="mt-3 text-3xl font-semibold">Work that shows versatility</h2>
            </div>
            <p className="max-w-2xl text-white/60">
              From software development and IT support to business ownership, my background helps me approach problems with both technical depth and practical perspective.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {experience.map((job) => (
              <article key={job.role} className="rounded-4xl border border-white/10 bg-white/4 p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">{job.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-white/65">{job.company} • {job.location}</p>
                  </div>
                  <ul className="space-y-3 text-white/75">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Technical Skills</p>
            <h2 className="mt-3 text-3xl font-semibold">Built for both product and implementation</h2>
            <div className="mt-8 space-y-4">
              {Object.entries(skills).map(([group, values]) => (
                <div key={group} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                    {group.replace(/([A-Z])/g, " $1")}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {values.map((value) => (
                      <span key={value} className="rounded-full bg-white/7 px-3 py-2 text-sm text-white/85">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-linear-to-b from-cyan-400/10 to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Education</p>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="text-lg font-semibold">{item.school}</h3>
                    <p className="mt-1 text-white/75">{item.detail}</p>
                    <p className="mt-2 text-sm text-white/45">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/4 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Certifications & Languages</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 p-5">
                  <h3 className="text-lg font-semibold">Certifications</h3>
                  <ul className="mt-3 space-y-2 text-white/75">
                    <li>Driver’s License</li>
                    <li>Basic Life Support (BLS)</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 p-5">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <ul className="mt-3 space-y-2 text-white/75">
                    <li>English — Native</li>
                    <li>Spanish — Beginner (actively studying)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Let’s build</p>
              <h2 className="mt-3 text-2xl font-semibold">Looking for a remote developer who can adapt fast and ship solid work?</h2>
              <p className="mt-3 max-w-xl text-white/75">
                I’m currently exploring remote software development roles where I can contribute across Flutter, Laravel, PHP, JavaScript, and full-stack product work.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="mailto:danieldixon.dev@gmail.com" className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950">
                  Email Daniel
                </a>
                <a href="tel:+18706159088" className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white">
                  Call Daniel
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
