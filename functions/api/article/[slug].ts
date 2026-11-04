import { getArticle } from "../../_lib/newt";

type Env = { BLOG_ACCESS_TOKEN: string };

export const onRequestGet: PagesFunction<Env, "slug"> = async ({ env, params }) =>
  Response.json(await getArticle(String(params.slug), env.BLOG_ACCESS_TOKEN));
