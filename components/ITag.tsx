import React from 'react';

type ITagProps = {
  title: string;
};

const ITag: React.FC<ITagProps> = ({ title }) => {
  return (
    <li className="bg-gray-800 rounded-full p-2 m-2 text-xl md:p-1 md:m-1 md:text-lg lg:text-xl">
      {title}
    </li>
  );
};

export default ITag;
