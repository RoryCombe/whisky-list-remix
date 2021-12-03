/* This example requires Tailwind CSS v2.0+ */
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline';

export default function ViewToggle() {
  return (
    <span className="relative z-0 inline-flex rounded-md shadow-sm">
      <a
        href="?view=list"
        type="button"
        className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <span className="sr-only">View as list</span>
        <ViewListIcon className="w-5 h-5" aria-hidden="true" />
      </a>
      <a
        href="?view=grid"
        type="button"
        className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <span className="sr-only">View as grid</span>
        <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
      </a>
    </span>
  );
}
