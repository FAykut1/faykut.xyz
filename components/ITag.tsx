import React from 'react';

type ITagProps = {
  title: string;
};

const ITag: React.FC<ITagProps> = ({ title }) => {
  return (
    <li className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:border-cyan-300/40 hover:text-white md:text-base">
      {title}
    </li>
  );
};

export default ITag;
