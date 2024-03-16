import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import * as react from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperComp() {
  return (
    <section className="swiper">
      <react.Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
      >
        <react.SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://auraed.org/assets/images/slider/slider-01.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="swiper-slide bg-black bg-blend-overlay bg-opacity-40 relative h-[80vh] "
          >
            <div className="flex flex-col container pt-5 px-2 h-full md:px-0">
              <div className="flex h-full flex-col px-5 text-white space-y-5 justify-center ">
                <h1 className="text-4xl max-w-5xl font-bold">
                  Support Children For Education
                </h1>
                <p className="text-md max-w-2xl ">
                  Only 84% of children attend school in Nepal because many
                  children leave school before their 11th birthday due to
                  various difficulties. It's a dutiful responsibility of ours
                  for this devastating scenario to be solved by alarming the
                  children about the various branches of the technological world
                  in near future
                </p>
              </div>
            </div>
          </div>
        </react.SwiperSlide>
        <react.SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://auraed.org/assets/images/slider/slider-02.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="swiper-slide bg-black bg-blend-overlay bg-opacity-40 relative h-[80vh]"
          >
            <div className="flex flex-col container mx-auto pt-5 px-2 h-full md:px-0">
              <div className="flex h-full flex-col px-5 text-white space-y-5 justify-center">
                <h1 className="text-4xl max-w-5xl font-bold">
                  Support Children For Education
                </h1>
                <p className="text-md max-w-2xl">
                  Only 84% of children attend school in Nepal because many
                  children leave school before their 11th birthday due to
                  various difficulties. It's a dutiful responsibility of ours
                  for this devastating scenario to be solved by alarming the
                  children about the various branches of the technological world
                  in near future
                </p>
              </div>
            </div>
          </div>
        </react.SwiperSlide>
        <react.SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://auraed.org/assets/images/slider/slider-03.jpg')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="swiper-slide bg-black bg-blend-overlay bg-opacity-40 relative h-[80vh]"
          >
            <div className="flex flex-col container mx-auto pt-5 px-2 h-full md:px-0">
              <div className="flex h-full flex-col px-5 text-white space-y-5 justify-center">
                <h1 className="text-4xl max-w-5xl font-bold">
                  Support Children For Education
                </h1>
                <p className="text-md max-w-2xl">
                  Only 84% of children attend school in Nepal because many
                  children leave school before their 11th birthday due to
                  various difficulties. It's a dutiful responsibility of ours
                  for this devastating scenario to be solved by alarming the
                  children about the various branches of the technological world
                  in near future
                </p>
              </div>
            </div>
          </div>
        </react.SwiperSlide>
      </react.Swiper>

      <div className="flex justify-between buttons-container container mx-auto relative text-white pb-5 justify-self-end">
        <div className="flex space-x-2 items-end">
          <button className="swiper-button-prev swiper-btns border-2 border-primary rounded-full p-2">
            <img className="w-[20px] h-[20px]" src={LeftArrow} />
          </button>
          <button className="swiper-button-next swiper-btns border-2 border-primary rounded-full p-2">
            <img className="w-[20px] h-[20px]" src={RightArrow} />
          </button>
        </div>
      </div>
      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination"></div>
    </section>
  );
}

export default SwiperComp;
