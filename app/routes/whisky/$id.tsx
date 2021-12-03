import type { LoaderFunction } from 'remix';
import { useLoaderData, useParams } from 'remix';
import whiskys from '../../data/whiskys.json';

export const loader: LoaderFunction = ({ params }) => {
  const { id } = params;
  return whiskys.find((w) => w.id === id);
};

export default function Detail() {
  const whisky = useLoaderData();
  const { id } = useParams();
  return (
    <>
      detail {id} {JSON.stringify(whisky)}
    </>
  );
}
