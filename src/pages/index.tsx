import MainView from "@/components/top/mainView";
import MainLayout from "@/layouts/main";

const Home = () => {
  return (
    <MainLayout
      page="大阪のWeb制作フリーランス"
      description="あなたの想いをWebに表現します。"
    >
      <MainView />
    </MainLayout>
  );
};

export default Home;
