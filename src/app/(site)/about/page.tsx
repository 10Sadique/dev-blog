import { Button } from '@/components/ui/button';
import Link from 'next/link';

const About = () => {
  return (
    <div className="py-24">
      <div className="container">
        <h1 className="text-center mb-4 text-xl lg:text-2xl font-bold">
          About
        </h1>

        <div className="text-center mb-20">
          <h2 className="font-black lg:text-8xl text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 mb-10 lg:leading-tight">
            Digital Storytellers
          </h2>
          <p className="text-xl font-semibold text-zinc-500 dark:text-zinc-400">
            Handcrafting awardwinning digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold">Who Are We?</h3>
            <div className="space-y-6 text-zinc-500 dark:text-zinc-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus mollitia rerum repellat, velit voluptas praesentium
                distinctio earum molestiae sapiente esse commodi quasi eaque
                porro eos similique ipsa iure tempore ab.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem explicabo nostrum sequi, veritatis dignissimos nihil
                dolorum quos ipsam ipsum perferendis et atque amet deleniti odit
                unde recusandae fugit dicta. Eius. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Consectetur, sapiente!
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-bold">Who We Do?</h3>
            <div className="space-y-6 text-zinc-500 dark:text-zinc-400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                laboriosam. Fuga ad repudiandae nulla provident cum corrupti,
                hic esse officiis cumque enim quod voluptatum alias repellat,
                ullam officia quaerat maiores?
              </p>
              <p>
                <span className="block">- Lorem, ipsum dolor.</span>
                <span className="block">- Ipsum dolor sit.</span>
                <span className="block">- Sit amet consectetur.</span>
              </p>
              <Link href={'/contact'} className="inline-block">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
