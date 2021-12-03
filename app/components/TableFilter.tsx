import { Form } from 'remix';
import { SearchIcon } from '@heroicons/react/solid';

const TableFilter = () => {
  return (
    <div className="flex items-center justify-center flex-1 px-2 lg:justify-end">
      <div className="w-full max-w-lg lg:max-w-xs">
        <Form method="get">
          <div>
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full py-1 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md h-11 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                placeholder="Search"
                type="search"
              />
            </div>

            {/* <label className="text-base font-medium text-gray-900">
              View as
            </label>
            <fieldset className="mt-4">
              <legend className="sr-only">View as</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div className="flex items-center">
                  <input
                    id="listview"
                    name="notification-method"
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="listview"
                    className="block ml-3 text-sm font-medium text-gray-700"
                  >
                    List
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="gridview"
                    name="notification-method"
                    type="radio"
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="gridview"
                    className="block ml-3 text-sm font-medium text-gray-700"
                  >
                    Grid
                  </label>
                </div>
              </div>
            </fieldset> */}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TableFilter;
