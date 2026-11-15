import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "iOS and Android apps by Muhtalip Dede. Independent software engineer shipping on the App Store and Google Play.",
  alternates: { canonical: "https://muhtalipdede.github.io/apps" },
};

const PLAY_DEV =
  "https://play.google.com/store/apps/dev?id=6862159926694466208";
const APP_STORE_DEV =
  "https://apps.apple.com/developer/muhtalip-dede/id1583166446";

const APPS = [
  {
    name: "Don't Blink",
    blurb: "Tap / don't tap reaction game.",
    privacy: "/apps/dont-blink/privacy.html",
    store: "https://apps.apple.com/app/dont-blink-tap-dont-tap/id6805209467",
    play: "https://play.google.com/store/apps/details?id=com.muhtalipdede.dontblink",
  },
  {
    name: "Swipe Merge Colors",
    blurb: "Swipe same colors to merge — no numbers, only color.",
    privacy: "/apps/merge-colors/privacy.html",
    store: "https://apps.apple.com/app/swipe-merge-colors/id6806599894",
    play: "https://play.google.com/store/apps/details?id=com.muhtalipdede.mergecolors",
  },
  {
    name: "Cargo Jam",
    blurb: "Logistics truck puzzle.",
    privacy: "/apps/cargo-jam/privacy.html",
    play: "https://play.google.com/store/apps/details?id=com.muhtalipdede.cargojam",
  },
  {
    name: "Walk",
    blurb: "Turn everyday steps into journeys, streaks, and simple goals.",
    privacy: "/apps/walk/privacy.html",
    play: "https://play.google.com/store/apps/details?id=com.muhtalipdede.walk",
  },
  {
    name: "Quran Companion",
    blurb: "A calm, private way to read and listen to the Quran every day.",
    privacy: "/apps/quran-companion/privacy.html",
  },
  {
    name: "Harbor Stack",
    blurb: "Harbor cargo stacking puzzle.",
    privacy: "/apps/harbor-stack/privacy.html",
  },
  {
    name: "Brain Dump",
    blurb: "Empty your mind. We'll help you make sense of it.",
    privacy: "/apps/brain-dump/privacy.html",
  },
  {
    name: "My Body",
    blurb: "Personal body tracking, private on device.",
    privacy: "/apps/my-body/privacy.html",
  },
  {
    name: "Lane Lift",
    blurb: "Lane-based puzzle game.",
    privacy: "/apps/lane-lift/privacy.html",
  },
] as const;

export default function AppsPage() {
  return (
    <div className="site-shell min-h-screen">
      <header className="masthead w-full">
        <div className="page-frame flex flex-col gap-4 py-6 sm:flex-row sm:items-end sm:justify-between sm:py-8">
          <div>
            <Link href="/" className="font-sans text-sm text-muted hover:text-accent">
              ← Muhtalip Dede
            </Link>
            <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl lg:text-5xl">Apps</h1>
            <p className="mt-2 max-w-xl text-muted">
              Independent iOS &amp; Android apps. Support:{" "}
              <a href="mailto:muhtalipdede@gmail.com" className="link-accent">
                muhtalipdede@gmail.com
              </a>
            </p>
          </div>
          <p className="font-sans text-sm text-muted sm:text-right">
            <a
              href={APP_STORE_DEV}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              App Store
            </a>
            <span className="mx-2 text-line">·</span>
            <a href={PLAY_DEV} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              Google Play
            </a>
          </p>
        </div>
      </header>

      <main className="page-frame py-10 sm:py-14">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {APPS.map((app) => (
            <li key={app.name} className="border border-line bg-surface/50 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-xl text-ink">{app.name}</h2>
                {"store" in app || "play" in app ? (
                  <span className="font-sans text-xs text-accent">Live</span>
                ) : (
                  <span className="font-sans text-xs text-muted">Coming soon</span>
                )}
              </div>
              <p className="mt-3 text-muted">{app.blurb}</p>
              <p className="mt-4 font-sans text-sm">
                {"store" in app && app.store && (
                  <>
                    <a
                      href={app.store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                    >
                      App Store
                    </a>
                    <span className="mx-2 text-line">·</span>
                  </>
                )}
                {"play" in app && app.play && (
                  <>
                    <a
                      href={app.play}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                    >
                      Google Play
                    </a>
                    <span className="mx-2 text-line">·</span>
                  </>
                )}
                <a href={app.privacy} className="text-muted hover:text-accent">
                  Privacy Policy
                </a>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
