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

export type Works = {
  eyecatch: MicroCMSImage;
  screenshot: MicroCMSImage;
  title: string;
  url: string;
  industry: string;
  service: string;
  kinds: string;
  period: string;
  comment: string;
  related: Works[];
  seoDescription: string;
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

export const getAllCategory = async () => {
  const categoryData = await client.getAllContents<Category>({
    endpoint: "categories",
  });
  return categoryData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const worksData = await client.getList<Works>({
    endpoint: "works",
    queries,
  });
  return worksData;
};

export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};
