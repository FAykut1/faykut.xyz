import Head from 'next/head';
import Footer from '../components/Footer';
import ReactTypingEffect from 'react-typing-effect';
import ITag from '../components/ITag';
import { NextPage } from 'next';
import { NextResponse } from 'next/server';
import Image from 'next/image';
import ExperienceCard from '../components/ExperienceCard';
import { useQuery } from 'react-query';

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery('resume', () =>
    fetch('api/data').then((res) => res.json())
  );

  return (
    <>
      <Head>
        <title>Fatih Aykut</title>
        <meta name="description" content="My personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center bg-gray-900 text-white font-mono max-w-screen-lg">
            <header className="text-4xl font-extrabold tracking-widest md:text-5xl lg:text-7xl pt-16">
              <ReactTypingEffect
                text={[data?.header]}
                speed={300}
                typingDelay={1000}
              />
            </header>
            <div className="py-10" />
            <section className="w-full mb-8 items-start grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Image
                className="rounded-full grayscale"
                src="/faykut.jpg"
                width={400}
                height={400}
                alt="pp"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2 md:text-2xl lg:text-3xl">
                  Welcome
                </h1>
                <p className="text-xl">
                  I am a full-stack software developer with almost 2 years of
                  experience in the field. I have a strong foundation in
                  computer science principles. <br /> I have experience building
                  both back-end and front-end applications, and am comfortable
                  working with a variety of technologies. I am also experienced
                  in agile development methodologies and have a track record of
                  delivering high-quality software on time. In addition to my
                  technical skills, I am a strong communicator and team player.{' '}
                  <br />I am always eager to learn and improve my skills, and
                  have a track record of staying up-to-date with the latest
                  industry trends.
                </p>
              </div>
            </section>
            <section className="w-full mb-8">
              <h3 className="text-3xl font-bold mb-2 md:text-2xl lg:text-3xl">
                Skills
              </h3>
              <ul className="list-none flex flex-wrap md:flex-no-wrap">
                {data?.skills
                  ? data.skills.map((v: string) => <ITag key={v} title={v} />)
                  : null}
              </ul>
            </section>

            <section className="w-full mb-8">
              <h3 className="text-3xl font-bold mb-2 md:text-2xl lg:text-3xl">
                Work Experience
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {data?.workExperiences
                  ? data.workExperiences.map((v: any, i: number) => (
                      <ExperienceCard
                        key={v.name + i}
                        name={v.name}
                        summary={v.summary}
                        position={v.position}
                        startDate={v.startDate}
                        endDate={v.endDate}
                      />
                    ))
                  : null}
              </div>
            </section>

            <section className="w-full mb-8">
              <h3 className="text-3xl font-bold mb-2">Projects</h3>
              <ul className="list-none">
                <li className="mb-4">
                  <h4 className="text-2xl font-semibold">Coming Soon :)</h4>
                  <p className="text-xl">...</p>
                </li>
              </ul>
            </section>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

// Home.getInitialProps = async ({ req }) => {
//   let data = await fetch(`/api/data`);
//   data = await data.json();
//   return { data };
// };

export default Home;
