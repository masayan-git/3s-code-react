import Cta from "@/components/top/cta";
import MainView from "@/components/top/mainView";
import TopAbout from "@/components/top/topAbout";
import TopBlog from "@/components/top/topBlog";
import TopPrice from "@/components/top/topPrice";
import TopService from "@/components/top/topService";
import TopWorks from "@/components/top/topWorks";

const Home = () => {
  return (
    <>
      <MainView />
      <TopAbout />
      <TopService />
      <TopWorks />
      <TopPrice />
      <Cta />
      <TopBlog />
    </>
  );
};

export default Home;
