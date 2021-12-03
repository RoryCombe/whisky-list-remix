import { PlusSmIcon } from '@heroicons/react/outline';
import { LoaderFunction, useLoaderData, useSearchParams } from 'remix';
import Grid from '~/components/Grid';
import TableFilter from '~/components/TableFilter';
import Table from '~/components/Table';
import ViewToggle from '~/components/ViewToggle';
import * as WhiskySvc from '../../data/whiskys';

export const loader: LoaderFunction = ({ request, params }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search');
  return WhiskySvc.search(searchTerm);
};

export default function () {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('view'));
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="flex justify-between mx-auto mb-5 max-w-7xl">
        {/* <h1 className="text-3xl font-bold leading-tight text-gray-900">
                My Whisky List
              </h1> */}
        <div />
        <div className="flex gap-3">
          <TableFilter />
          <ViewToggle />
          <a
            href="/whisky/add"
            type="button"
            className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusSmIcon className="w-6 h-6 mr-1 -ml-1" aria-hidden="true" />
            Add
          </a>
        </div>
      </div>
      {searchParams.get('view') === 'grid' ? (
        <Grid whiskys={data} />
      ) : (
        <Table whiskys={data} />
      )}
    </>
  );
}
