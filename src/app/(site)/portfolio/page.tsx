import Link from 'next/link';

const works = [
  {
    id: 1,
    label: 'illustrations',
  },
  {
    id: 2,
    label: 'websites',
  },
  {
    id: 3,
    label: 'applications',
  },
  {
    id: 4,
    label: 'UI-UX',
  },
  {
    id: 5,
    label: 'blockchain',
  },
  {
    id: 6,
    label: 'AI',
  },
];

const Portfolio = () => {
  return (
    <div>
      <h2 className="font-bold text-xl lg:text-2xl mb-8">Choose a gallary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <Link
            href={`/portfolio/${work.label}`}
            key={work.id}
            className="border p-4 h-64 capitalize font-black text-4xl flex flex-col justify-end transition-all ease-linear duration-300 hover:bg-zinc-950 hover:text-white hover:dark:bg-white hover:dark:text-zinc-950"
          >
            {work.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
