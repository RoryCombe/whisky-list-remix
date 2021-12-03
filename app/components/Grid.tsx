import { FC } from 'react';
import { Whisky } from '../..';

interface Props {
  whiskys: Array<Whisky>;
}

const Grid: FC<Props> = ({ whiskys }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {whiskys.map((whisky) => (
        <div
          key={whisky.name}
          className="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div className="flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <a href={`/whisky/${whisky.id}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{whisky.name}</p>
              <p className="text-sm text-gray-500 truncate">
                {whisky.category}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
