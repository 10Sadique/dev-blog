import Link from 'next/link';

export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const getData: () => Promise<PostType[]> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Blog = async () => {
  const posts = await getData();

  return (
    <div className="py-24">
      <div className="container">
        <h1 className="text-center font-black lg:text-8xl text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 mb-10 lg:leading-tight">
          Blog
        </h1>

        <div className="grid grid-flow-dense grid-cols-1 lg:grid-cols-3 gap-6 grid-rows-[masonry] ">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-md transition-all ease-linear duration-300 hover:bg-zinc-950 hover:text-white hover:dark:bg-white hover:dark:text-zinc-950"
            >
              <Link
                href={`/blog/${post.id}`}
                className="hover:underline font-bold text-2xl mb-4 text-balance truncate block"
              >
                {post.title}
              </Link>
              <p className="text-zinc-500 dark:text-zinc-400">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
