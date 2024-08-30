import type {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description: string;
  content: string;
  image: MicroCMSImage;
  category: Category;
  eyecatch: MicroCMSImage;
} & MicroCMSListContent;
import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const blogData = await client.getList<Blog>({
    endpoint: "blog",
    queries,
  });
  return blogData;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
  });
  return detailData;
};
