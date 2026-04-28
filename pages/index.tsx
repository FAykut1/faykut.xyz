import Head from 'next/head';
import Footer from '../components/Footer';
import ReactTypingEffect from 'react-typing-effect';
import ITag from '../components/ITag';
import { NextPage } from 'next';
import Image from 'next/image';
import ExperienceCard from '../components/ExperienceCard';
import { useQuery } from 'react-query';

type WorkExperience = {
  name: string;
  summary: string;
  position?: string;
  startDate?: string;
  endDate?: string;
};

type Education = {
  name: string;
  degree: string;
  startDate?: string;
  endDate?: string;
};

type ResumeData = {
  header: string;
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  highlights: string[];
  skills: string[];
  workExperiences: WorkExperience[];
  education: Education[];
};

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery<ResumeData>('resume', () =>
    fetch('api/data').then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>Fatih Aykut | Backend-Focused Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Fatih Aykut, a backend-focused full-stack developer building scalable products for enterprise and high-traffic platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="panel overflow-hidden rounded-[2rem] border border-white/10">
            <section className="grid gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  <ReactTypingEffect text={[data?.header || '<FatihAykut />']} speed={120} eraseDelay={5000} />
                </div>

                <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                  {isLoading ? 'Loading...' : data?.name}
                </h1>
                <p className="mt-3 text-lg font-medium text-slate-300 md:text-2xl">
                  {data?.role}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                  {data?.location}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  {data?.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${data?.email}`}
                    className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    {data?.email}
                  </a>
                  <a
                    href={`tel:${data?.phone?.replace(/\s+/g, '')}`}
                    className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                  >
                    {data?.phone}
                  </a>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {data?.highlights?.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-lg shadow-black/10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" />
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <Image
                    className="w-full rounded-[1.5rem] object-cover"
                    src="/faykut.jpg"
                    width={500}
                    height={500}
                    alt="Fatih Aykut"
                    priority
                  />
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-slate-400">Focus</div>
                      <div className="mt-1 font-semibold text-white">Backend & APIs</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-slate-400">Domain</div>
                      <div className="mt-1 font-semibold text-white">Livestream & Insurance</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-slate-400">Core stack</div>
                      <div className="mt-1 font-semibold text-white">Python, Java, SQL</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-slate-400">Cloud</div>
                      <div className="mt-1 font-semibold text-white">AWS & GCP tools</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-white/10 px-6 py-8 md:px-10 md:py-10">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="section-label">Expertise</p>
                  <h2 className="section-title">Skills & technologies</h2>
                </div>
              </div>
              <ul className="flex flex-wrap gap-3">
                {data?.skills?.map((skill) => <ITag key={skill} title={skill} />)}
              </ul>
            </section>

            <section className="border-t border-white/10 px-6 py-8 md:px-10 md:py-10">
              <div className="mb-6">
                <p className="section-label">Career</p>
                <h2 className="section-title">Work experience</h2>
              </div>
              <div className="grid gap-4">
                {data?.workExperiences?.map((item, index) => (
                  <ExperienceCard
                    key={`${item.name}-${index}`}
                    name={item.name}
                    summary={item.summary}
                    position={item.position}
                    startDate={item.startDate}
                    endDate={item.endDate}
                  />
                ))}
              </div>
            </section>

            <section className="border-t border-white/10 px-6 py-8 md:px-10 md:py-10">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="section-label">Background</p>
                  <h2 className="section-title">Education</h2>
                </div>
                <div className="grid gap-4">
                  {data?.education?.map((item) => (
                    <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.name}</h3>
                          <p className="mt-1 text-slate-300">{item.degree}</p>
                        </div>
                        <div className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                          {item.startDate} — {item.endDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {error ? (
              <div className="border-t border-red-400/20 bg-red-500/10 px-6 py-4 text-sm text-red-200 md:px-10">
                Failed to load portfolio data.
              </div>
            ) : null}

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
