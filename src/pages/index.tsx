import type { FC } from "react";

import TopAbout from "@/components/top/about";
import TopContact from "@/components/top/contact";
import MainView from "@/components/top/mainView";
import TopPrice from "@/components/top/price";
import TopService from "@/components/top/service";
import TopBlog from "@/components/top/topBlog";
import TopWorks from "@/components/top/works";
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
      <TopContact />
      <TopBlog />
    </MainLayout>
  );
};

export default Home;
