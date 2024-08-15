import type { FC } from "react";

import Cta from "@/components/top/cta";
import MainView from "@/components/top/mainView";
import TopAbout from "@/components/top/topAbout";
import TopBlog from "@/components/top/topBlog";
import TopPrice from "@/components/top/topPrice";
import TopService from "@/components/top/topService";
import TopWorks from "@/components/top/topWorks";
import MainLayout from "@/layouts/main";

const Home: FC = () => {
  return (
    <MainLayout
      page="大阪のWeb制作フリーランス"
      description="あなたの想いをWebに表現します。"
    >
      <MainView />
      <TopAbout />
      <TopService />
      <TopWorks />
      <TopPrice />
      <Cta />
      <TopBlog />
    </MainLayout>
  );
};

export default Home;
