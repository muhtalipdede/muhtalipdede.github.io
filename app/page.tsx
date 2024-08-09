import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen max-w-3xl mx-auto">
      <section className="flex flex-col justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
        </h1>
        <h2 className="text-s font-semibold text-gray-400 text-center mb-4">
          Albert Einstein, 1929 - Saturday Evening Post
        </h2>
        <Link href="/welcome" passHref className="text-center text-blue-700">
          <p className="text-center text-blue-700">
            Welcome alien! Click here to read my welcome message.
          </p>
        </Link>
      </section>
    </main>
  );
}
