import type { Metadata } from "next";

import WorksLayoutContainer from "@/layouts/works";
import type { LayoutProps } from "@/types";

export const metadata: Metadata = {
  title: "制作実績",
};

const WorksLayout = ({ children }: LayoutProps) => {
  return <WorksLayoutContainer>{children}</WorksLayoutContainer>;
};

export default WorksLayout;
