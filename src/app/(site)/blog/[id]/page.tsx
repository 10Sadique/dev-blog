import { PostType } from '../page';

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const post: PostType = await res.json();

  return (
    <div className="py-24">
      <div className="container">
        <h1 className="mb-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 lg:leading-tight">
          {post.title}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
