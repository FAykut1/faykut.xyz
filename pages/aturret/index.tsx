import Head from 'next/head';
import Link from 'next/link';

export default function ATurretPage() {
  return (
    <>
      <Head>
        <title>A-Turret | Mobile Game</title>
        <meta
          name="description"
          content="A-Turret by Fatih Aykut — an arcade mobile game available on Google Play."
        />
      </Head>

      <main className="min-h-screen px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="panel rounded-[2rem] border border-white/10 px-6 py-8 md:px-10 md:py-12">
            <p className="section-label">Mobile Game</p>
            <h1 className="section-title">A-Turret</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              A-Turret is my mobile game published on Google Play. This page acts as a
              simple landing page where players can find the store listing and the privacy policy.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-bold text-white">Get the game</h2>
                <p className="mt-3 text-slate-300">
                  Download A-Turret from Google Play.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.faykut.aturret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Open on Google Play
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-bold text-white">Privacy policy</h2>
                <p className="mt-3 text-slate-300">
                  Read the privacy policy for A-Turret.
                </p>
                <Link
                  href="/aturret/privacy-policy"
                  className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View privacy policy
                </Link>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">
                ← Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
