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
    <div className="text-xl md:text-lg lg:text-xl">
      <div className="grid grid-cols-2">
        <div className="">
          <div className="name">{props.name}</div>
          <div className="text-lg text-gray-400">{props.position}</div>
        </div>
        <div className="text-lg text-gray-400">
          ({props.startDate} - {props.endDate})
        </div>
      </div>

      <p className="text-lg">{props.summary}</p>
    </div>
  );
};

export default ExperienceCard;
