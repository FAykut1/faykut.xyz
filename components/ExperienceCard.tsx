import React from 'react';

type ExperienceCardProps = {
  name: string;
  summary: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/[0.07]">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">{props.name}</h3>
          <p className="mt-1 text-base font-medium text-cyan-200 md:text-lg">
            {props.position}
          </p>
        </div>
        <div className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
          {props.startDate} — {props.endDate}
        </div>
      </div>

      <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
        {props.summary}
      </p>
    </article>
  );
};

export default ExperienceCard;
