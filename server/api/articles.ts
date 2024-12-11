export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const token = config.blogApiToken;

  const response = await fetch(
    "https://portfolio-806585.cdn.newt.so/v1/blog/article",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  //responseのdata を type Post に変換
  const data = await response.json();
  const posts = data.items?.map((post: any) => {
    return {
      id: post._id,
      slug: post.slug,
      emoji: post.emoji.value,
      title: post.title,
      titleOfImage: post.titleOfImage,
      body: post.body,
      tags: post.tags.map((tag: any) => {
        return { name: tag.name, slug: tag.slug };
      }),
      createdAt: post._sys.createdAt,
      updatedAt: post._sys.updatedAt,
    };
  });

  return posts;
});
