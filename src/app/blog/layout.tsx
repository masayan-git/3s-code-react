import type { Metadata } from "next";

import BlogLayoutContainer from "@/layouts/blog";
import type { LayoutProps } from "@/types";

export const metadata: Metadata = {
  title: "ブログ",
};

const BlogLayout = ({ children }: LayoutProps) => {
  return <BlogLayoutContainer>{children}</BlogLayoutContainer>;
};

export default BlogLayout;
