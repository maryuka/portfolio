export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const token = config.blogApiToken;

  const response = await fetch(
    "https://portfolio-806585.cdn.newt.so/v1/blog/tag",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  //responseのdata を type Post に変換
  const data = await response.json();
  const tags = data.items?.map((tag: any) => {
    return {
      id: tag._id,
      slug: tag.slug,
      name: tag.name,
    };
  });

  return tags;
});
