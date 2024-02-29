import Programs from "../../components/home/programs.tsx";
import Reach from "../../components/home/Reach.tsx";
import Story from "../../components/home/Story.tsx";
import SwiperComp from "../../components/home/Swiper.tsx";

const Home = () => {
  return (
    <div className="">
      <SwiperComp />
      <div className="story p-2">
        <Programs />
        <Reach />
        <Story />
      </div>
    </div>
  );
};

export default Home;
