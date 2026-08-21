import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Android apps by Muhtalip Dede. Independent software engineer shipping mobile products on Google Play.",
  alternates: { canonical: "https://muhtalipdede.github.io/apps" },
};

const PLAY_DEV =
  "https://play.google.com/store/apps/dev?id=6862159926694466208";

const APPS = [
  {
    name: "Don't Blink",
    status: "Coming soon",
    blurb: "It's easy. Until the game starts lying to you.",
    privacy: "/apps/dont-blink/privacy.html",
  },
  {
    name: "Brain Dump",
    status: "Coming soon",
    blurb: "Empty your mind. We’ll help you make sense of it.",
    privacy: "/apps/brain-dump/privacy.html",
  },
  {
    name: "Walk",
    status: "Coming soon",
    blurb: "Turn everyday steps into journeys, streaks, and simple goals.",
    privacy: "/apps/walk/privacy.html",
  },
  {
    name: "Quran Companion",
    status: "Coming soon",
    blurb: "A calm, private way to read and listen to the Quran every day.",
    privacy: "/apps/quran-companion/privacy.html",
  },
] as const;

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Muhtalip Dede
          </Link>
          <a
            href={PLAY_DEV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-300 hover:text-blue-200"
          >
            Google Play
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-blue-300 text-sm font-medium mb-3">Google Play developer</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Apps</h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
          Independent software engineer. I build and ship mobile apps across different
          categories. Support:{" "}
          <a href="mailto:muhtalipdede@gmail.com" className="text-blue-300 hover:text-blue-200">
            muhtalipdede@gmail.com
          </a>
        </p>

        <ul className="space-y-4 mb-12">
          {APPS.map((app) => (
            <li
              key={app.name}
              className="bg-white/10 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-xl font-semibold">{app.name}</h2>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full whitespace-nowrap">
                  {app.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{app.blurb}</p>
              <a
                href={app.privacy}
                className="text-sm text-blue-300 hover:text-blue-200"
              >
                Privacy Policy
              </a>
            </li>
          ))}
        </ul>

        <p className="text-gray-400 text-sm flex items-center gap-2">
          <EnvelopeIcon className="w-4 h-4" />
          App-specific listings go live on{" "}
          <a
            href={PLAY_DEV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200"
          >
            the Play developer page
          </a>
          .
        </p>
      </main>
    </div>
  );
}
