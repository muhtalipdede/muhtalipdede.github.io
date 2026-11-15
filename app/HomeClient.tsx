"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ARTICLES, STACK, content, type Locale } from "./i18n";

const STORAGE_KEY = "md-locale";

function ExternalIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function linkifyWingieOne(text: string) {
  const parts = text.split("WingieOne");
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href="https://wingieone.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          WingieOne
        </a>
      )}
    </span>
  ));
}

export default function HomeClient() {
  const [locale, setLocale] = useState<Locale>("en");
  const [ready, setReady] = useState(false);
  const t = content[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "tr") {
      setLocale(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const nav = [
    { href: "#work", label: t.nav.work },
    { href: "#open-source", label: t.nav.openSource },
    { href: "/apps", label: t.nav.apps },
    { href: "#writing", label: t.nav.writing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>

      <div className="site-shell min-h-screen">
        <header className="masthead w-full">
          <div className="page-frame flex flex-col gap-4 py-6 sm:flex-row sm:items-end sm:justify-between sm:py-8">
            <div>
              <p className="section-kicker">{t.personalSite}</p>
              <a href="#" className="mt-1 block font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
                Muhtalip Dede
              </a>
              <p className="mt-1 font-sans text-sm text-muted">
                {t.taglineSoftware}, {t.taglineMath}{" "}
                <a
                  href="https://www.yildiz.edu.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline hover:underline-offset-4"
                >
                  @ytu
                </a>
                , {t.taglineOss}{" "}
                <a
                  href="https://kprompt.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline hover:underline-offset-4"
                >
                  @kprompt.ai
                </a>{" "}
                <a
                  href="https://github.com/coppergateai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline hover:underline-offset-4"
                >
                  @coppergateai
                </a>
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <nav
                className="flex flex-wrap gap-x-5 gap-y-1 font-sans text-sm sm:justify-end"
                aria-label="Primary"
              >
                {nav.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link key={item.href} href={item.href} className="text-muted hover:text-accent">
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.href} href={item.href} className="text-muted hover:text-accent">
                      {item.label}
                    </a>
                  )
                )}
              </nav>
              <div
                className="flex items-center gap-1 font-sans text-xs"
                role="group"
                aria-label="Language"
              >
                <button
                  type="button"
                  onClick={() => setLocale("tr")}
                  className={
                    locale === "tr"
                      ? "font-medium text-accent underline underline-offset-4"
                      : "text-muted hover:text-ink"
                  }
                  aria-pressed={locale === "tr"}
                >
                  TR
                </button>
                <span className="text-line" aria-hidden="true">
                  /
                </span>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={
                    locale === "en"
                      ? "font-medium text-accent underline underline-offset-4"
                      : "text-muted hover:text-ink"
                  }
                  aria-pressed={locale === "en"}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="page-frame">
          <div className="lg:grid lg:grid-cols-[minmax(260px,22vw)_minmax(0,1fr)] xl:grid-cols-[minmax(280px,20vw)_minmax(0,1fr)] lg:gap-0">
            <aside className="sidebar-rail border-b border-line py-10 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:py-12 lg:pr-8 xl:pr-10">
              <div className="animate-rise">
                <Image
                  src="/muhtalipdede.png"
                  alt={t.portraitAlt}
                  width={280}
                  height={280}
                  priority
                  unoptimized
                  className="portrait w-full max-w-[220px] object-cover sm:max-w-[240px] lg:max-w-none"
                />
              </div>
              <p className="mt-6 font-display text-xl text-ink">{t.hello}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {locale === "tr" ? (
                  <>
                    <a
                      href="https://www.wingie.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                    >
                      Wingie Enuygun Group
                    </a>
                    {t.sidebarLead}
                    {t.sidebarTrail}
                  </>
                ) : (
                  <>
                    {t.sidebarLead}{" "}
                    <a
                      href="https://www.wingie.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                    >
                      Wingie Enuygun Group
                    </a>
                    {t.sidebarTrail}
                  </>
                )}
              </p>
              <p className="mt-6 flex flex-col gap-2 font-sans text-sm">
                <a
                  href="https://github.com/muhtalipdede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent w-fit"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/muhtalipdede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent w-fit"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/muhtalipdede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent w-fit"
                >
                  X
                </a>
                <a href="mailto:muhtalipdede@gmail.com" className="link-accent w-fit">
                  Email
                </a>
              </p>
              <div
                className="mt-8 flex items-center gap-1 font-sans text-xs lg:flex"
                role="group"
                aria-label="Language"
              >
                <button
                  type="button"
                  onClick={() => setLocale("tr")}
                  className={
                    locale === "tr"
                      ? "font-medium text-accent underline underline-offset-4"
                      : "text-muted hover:text-ink"
                  }
                  aria-pressed={locale === "tr"}
                >
                  TR
                </button>
                <span className="text-line" aria-hidden="true">
                  /
                </span>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={
                    locale === "en"
                      ? "font-medium text-accent underline underline-offset-4"
                      : "text-muted hover:text-ink"
                  }
                  aria-pressed={locale === "en"}
                >
                  EN
                </button>
              </div>
            </aside>

            <main id="main" className="lg:pl-12 xl:pl-16">
              <section
                className="border-b border-line py-10 sm:py-12 lg:pt-12"
                aria-labelledby="note-2095-heading"
              >
                <p className="section-kicker">{t.noteKicker}</p>
                <h1 id="note-2095-heading" className="section-title mt-2">
                  {t.noteTitle}
                </h1>
                <blockquote className="mt-8 max-w-3xl border border-line bg-surface/70 px-6 py-6 sm:px-8 sm:py-7">
                  <div className="space-y-4 font-display text-lg leading-relaxed text-ink sm:text-xl">
                    {t.noteBody.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <footer className="mt-6 font-sans text-sm text-muted">{t.noteSignoff}</footer>
                </blockquote>
              </section>

              <section className="border-b border-line py-10 sm:py-12" aria-labelledby="currently-heading">
                <p className="section-kicker">{t.now}</p>
                <h2 id="currently-heading" className="section-title mt-2">
                  {t.currently}
                </h2>
                <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                  {t.currentlyItems.map((item) => (
                    <li key={item.name} className="border border-line bg-surface/60 p-4 leading-relaxed">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent font-medium"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-medium text-ink">{item.name}</span>
                      )}
                      <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="work" className="scroll-mt-6 border-b border-line py-10 sm:py-12">
                <p className="section-kicker">{t.career}</p>
                <h2 className="section-title mt-2">{t.work}</h2>
                <p className="mt-3 max-w-2xl text-muted">{t.workIntro}</p>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {t.experience.map((job) => (
                    <article key={job.org} className="border-t border-line pt-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-xl text-ink">{job.role}</h3>
                        <span className="font-sans text-xs text-muted">{job.period}</span>
                      </div>
                      <p className="mt-1 text-accent">{job.org}</p>
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-muted">
                        {job.points.map((p) => (
                          <li key={p}>{linkifyWingieOne(p)}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="section-kicker">{t.stack}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                    {STACK.join(" · ")}
                  </p>
                </div>
              </section>

              <section id="open-source" className="scroll-mt-6 border-b border-line py-10 sm:py-12">
                <p className="section-kicker">{t.projects}</p>
                <h2 className="section-title mt-2">{t.openSource}</h2>
                <p className="mt-3 max-w-2xl text-muted">{t.openSourceIntro}</p>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {t.openSourceItems.map((proj) => (
                    <article key={proj.name} className="border border-line bg-surface/50 p-6">
                      <h3 className="font-display text-2xl text-ink">{proj.name}</h3>
                      <p className="mt-3 leading-relaxed text-muted">{proj.blurb}</p>
                      <p className="mt-5 font-sans text-sm">
                        <a
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 link-accent"
                        >
                          GitHub <ExternalIcon />
                        </a>
                        <span className="mx-2 text-line">·</span>
                        <a
                          href={proj.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent"
                        >
                          {proj.site.replace("https://", "")}
                        </a>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="border-b border-line py-10 sm:py-12">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="section-kicker">{t.mobile}</p>
                    <h2 className="section-title mt-2">{t.apps}</h2>
                  </div>
                  <Link href="/apps" className="font-sans text-sm link-accent">
                    {t.allApps}
                  </Link>
                </div>
                <p className="mt-3 text-muted">{t.appsIntro}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {t.appsItems.map((app) => (
                    <li key={app.name} className="border-t border-line pt-4">
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ink hover:text-accent"
                      >
                        {app.name}
                      </a>
                      <span className="mt-1 block text-sm text-muted">{app.blurb}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="writing" className="scroll-mt-6 border-b border-line py-10 sm:py-12">
                <p className="section-kicker">{t.blog}</p>
                <h2 className="section-title mt-2">{t.writing}</h2>
                <p className="mt-3 text-muted">{t.writingIntro}</p>
                <ul className="mt-8 grid gap-x-10 gap-y-0 sm:grid-cols-2">
                  {ARTICLES.map((a) => (
                    <li key={a.href} className="border-b border-line">
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-baseline justify-between gap-4 py-3.5 text-ink hover:text-accent"
                      >
                        <span>{a.title}</span>
                        <ExternalIcon className="mt-1 w-3.5 h-3.5 shrink-0 text-muted" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-sans text-sm">
                  <a
                    href="https://muhtalipdede.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    {t.moreMedium}
                  </a>
                </p>
              </section>

              <section className="border-b border-line py-10 sm:py-12">
                <p className="section-kicker">{t.background}</p>
                <h2 className="section-title mt-2">{t.educationRecognition}</h2>
                <dl className="mt-8 grid gap-8 md:grid-cols-3">
                  <div>
                    <dt className="font-display text-lg text-ink">{t.education}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{t.educationBody}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-lg text-ink">{t.recognition}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{t.recognitionBody}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-lg text-ink">{t.community}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">
                      {locale === "tr" ? (
                        <>
                          <a
                            href="https://thecoderverse.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-accent"
                          >
                            The Coderverse
                          </a>{" "}
                          kurucu ortaklarından — canlı kodlama, açık kaynak ve Türk geliştiriciler
                          için konuşmalar
                        </>
                      ) : (
                        <>
                          Co-founder of{" "}
                          <a
                            href="https://thecoderverse.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-accent"
                          >
                            The Coderverse
                          </a>{" "}
                          — live coding, open source, and talks for Turkish developers
                        </>
                      )}
                    </dd>
                  </div>
                </dl>
              </section>

              <footer id="contact" className="scroll-mt-6 py-12 sm:py-14">
                <p className="section-kicker">{t.getInTouch}</p>
                <h2 className="section-title mt-2">{t.contact}</h2>
                <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="max-w-md leading-relaxed text-muted">{t.contactBody}</p>
                    <p className="mt-6 font-sans text-sm">
                      <a href="mailto:muhtalipdede@gmail.com" className="link-accent">
                        muhtalipdede@gmail.com
                      </a>
                      <span className="mx-2 text-line">·</span>
                      <a
                        href="https://linkedin.com/in/muhtalipdede"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        LinkedIn
                      </a>
                      <span className="mx-2 text-line">·</span>
                      <a
                        href="https://github.com/muhtalipdede"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        GitHub
                      </a>
                      <span className="mx-2 text-line">·</span>
                      <a
                        href="https://thecoderverse.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        The Coderverse
                      </a>
                    </p>
                  </div>
                  <blockquote className="border-l-2 border-line pl-4 font-display text-base italic leading-relaxed text-muted md:border-l-0 md:border-t md:pl-0 md:pt-4">
                    {t.quote}
                  </blockquote>
                </div>
                <p className="mt-12 font-sans text-xs text-muted">
                  © {new Date().getFullYear()} Muhtalip Dede
                  {" · "}
                  <Link href="/apps" className="hover:text-ink">
                    {t.nav.apps}
                  </Link>
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
