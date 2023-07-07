const reviews = [
  {
    id: 1,
    reviewer: 'Tatiana Mac, Senior Software Engineer',
    review:
      '“With Next.js at the helm of our headless tech stack, our developers can create features with velocity and speed, ultimately enabling users to create whatever, whenever they want to.”',
    company: 'Loom',
  },
  {
    id: 2,
    reviewer: 'Fouad Matin, CEO',
    review:
      '“My favorite UX feedback from customers is: "How is the app so fast?" Because we’ve built on Next.js and Vercel since day one, our pages load in an instant, which is important when it comes to mission-critical software.”',
    company: 'Indent',
  },
  {
    id: 3,
    reviewer: 'Daniel Lopes, Frontend Developer',
    review:
      '“Next.js has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.”',
    company: 'Wunderman',
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 lg:py-24">
      <div className="border rounded-xl grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0 bg-zinc-100 dark:bg-zinc-900 dark:divide-zinc-600 dark:border-zinc-600">
        {reviews.map((review) => (
          <div
            className="p-6 lg:h-[255px] flex justify-between gap-9 lg:gap-0 flex-col"
            key={review.id}
          >
            <p className="font-medium">{review.review}</p>

            <div className="space-y-1">
              <h3 className="font-black text-xl">{review.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {review.reviewer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
