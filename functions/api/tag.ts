import { getTags } from "../_lib/newt";

type Env = { BLOG_ACCESS_TOKEN: string };

export const onRequestGet: PagesFunction<Env> = async ({ env }) =>
  Response.json(await getTags(env.BLOG_ACCESS_TOKEN));
