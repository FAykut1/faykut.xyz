import Head from 'next/head';
import Link from 'next/link';

export default function ATurretPrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>A-Turret Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for the A-Turret mobile game."
        />
      </Head>

      <main className="min-h-screen px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-4xl">
          <article className="panel rounded-[2rem] border border-white/10 px-6 py-8 text-slate-200 md:px-10 md:py-12">
            <p className="section-label">Legal</p>
            <h1 className="section-title">Privacy Policy for A-Turret</h1>
            <p className="mt-4 text-sm text-slate-400">
              <strong>Effective date:</strong> 2026-04-26
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              This Privacy Policy explains how <strong>Aykut Studios</strong> (
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles information when you use the game{' '}
              <strong>A-Turret</strong> (the &quot;Game&quot;).
            </p>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              <p className="leading-8 text-slate-300">
                We do not directly collect or store personal information from players on our own servers.
                However, the Game uses third-party services that may collect certain information automatically.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Third-Party Services Used</h2>
              <p className="leading-8 text-slate-300">The Game uses the following third-party services:</p>
              <ul className="list-disc space-y-2 pl-6 text-slate-300">
                <li><strong>Google Play Games Services</strong> (leaderboards and achievements)</li>
                <li><strong>Google AdMob</strong> (advertising and related analytics)</li>
                <li><strong>Google Play Services / Firebase components</strong> if included by your app build (e.g., crash, diagnostics, analytics support)</li>
              </ul>
              <p className="leading-8 text-slate-300">
                These providers may collect data such as device identifiers, app interaction data, diagnostics,
                and approximate location (derived from IP address), depending on your device settings,
                account status, region, and whether personalized ads are enabled.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Why Data May Be Processed</h2>
              <ul className="list-disc space-y-2 pl-6 text-slate-300">
                <li>To provide gameplay features like achievements and leaderboards</li>
                <li>To display and measure ads</li>
                <li>To prevent fraud and abuse</li>
                <li>To maintain app performance and troubleshoot technical issues</li>
              </ul>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Legal Basis and Consent</h2>
              <p className="leading-8 text-slate-300">
                Where required by law (for example, in the EEA/UK), consent may be requested for personalized ads
                and certain types of data processing by third-party providers.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Data Sharing</h2>
              <p className="leading-8 text-slate-300">
                We do not sell personal information. Data processed through the Game may be collected or shared
                by third-party SDK providers as described in their own privacy policies.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Third-Party Privacy Policies</h2>
              <ul className="list-disc space-y-2 pl-6 text-slate-300 break-words">
                <li>
                  Google Privacy Policy:{' '}
                  <a className="text-cyan-200 hover:text-cyan-100" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/privacy
                  </a>
                </li>
                <li>
                  Google Play Games Services:{' '}
                  <a className="text-cyan-200 hover:text-cyan-100" href="https://support.google.com/googleplay/android-developer/answer/113469#zippy=%2Cplay-games-services" target="_blank" rel="noopener noreferrer">
                    https://support.google.com/googleplay/android-developer/answer/113469#zippy=%2Cplay-games-services
                  </a>
                </li>
                <li>
                  AdMob:{' '}
                  <a className="text-cyan-200 hover:text-cyan-100" href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">
                    https://support.google.com/admob/answer/6128543
                  </a>
                </li>
              </ul>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Children&apos;s Privacy</h2>
              <p className="leading-8 text-slate-300">
                If your Game is directed to children, you must configure ad settings and SDK behavior accordingly
                (for example, child-directed treatment and non-personalized ad handling where required).
                We encourage parents/guardians to contact us with any concerns.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Data Retention</h2>
              <p className="leading-8 text-slate-300">
                We do not directly retain personal data on our own servers. Any retention by third-party providers
                is governed by their policies.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Security</h2>
              <p className="leading-8 text-slate-300">
                We take reasonable steps to use reputable providers, but no method of electronic transmission or
                storage is 100% secure.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Your Rights</h2>
              <p className="leading-8 text-slate-300">
                Depending on your region, you may have rights to access, delete, or restrict processing of your data.
                Requests related to third-party processed data may need to be directed to the relevant provider
                (such as Google).
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Changes to This Privacy Policy</h2>
              <p className="leading-8 text-slate-300">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a new
                effective date.
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
              <p className="leading-8 text-slate-300">
                If you have any questions about this Privacy Policy, contact us at:<br />
                <strong>fatih00008@gmail.com</strong>
              </p>
            </section>

            <div className="mt-10">
              <Link href="/aturret" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">
                ← Back to A-Turret
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
