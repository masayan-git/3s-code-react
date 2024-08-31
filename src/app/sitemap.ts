import type { MetadataRoute } from "next";

import {
  getAllBlogList,
  getAllCategory,
  getAllWorksList,
} from "@/libs/microcms";

const buildUrl = (path?: string) => `https://3s-code.com${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogContents = await getAllBlogList();
  const categoryContents = await getAllCategory();
  const worksContents = await getAllWorksList();

  const blogUrls: MetadataRoute.Sitemap = blogContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/news/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );

  const worksUrls: MetadataRoute.Sitemap = worksContents.map((content) => ({
    url: buildUrl(`/works/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/blog"),
      lastModified: now,
    },
    {
      url: buildUrl("/contact"),
      lastModified: now,
    },
    {
      url: buildUrl("/works"),
      lastModified: now,
    },
    ...blogUrls,
    ...categoryUrls,
    ...worksUrls,
  ];
}
