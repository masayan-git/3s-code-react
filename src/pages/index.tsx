import TopAbout from "@/components/top/about";
import MainView from "@/components/top/mainView";
import MainLayout from "@/layouts/main";

const Home = () => {
  return (
    <MainLayout
      page="大阪のWeb制作フリーランス"
      description="あなたの想いをWebに表現します。"
    >
      <MainView />
      <TopAbout />
    </MainLayout>
  );
};

export default Home;
