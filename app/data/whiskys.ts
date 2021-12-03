import whiskys from './whiskys.json';

export const search = (query: string | null) =>
  !query
    ? whiskys
    : whiskys.filter((w) => w.name.toLowerCase().includes(query));
