export type Tag = {
  name: string;
  slug: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  titleOfImage: string;
  body: string;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
};
