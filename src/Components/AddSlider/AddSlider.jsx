import{ useRef} from "react";
// Import Swiper React components
// import logo_1 from '../../../public/images/bannerHouse.jpg'
import deal_1 from '../../../public/images/deal.jpg'
import deal_2 from '../../../public/images/deal-2.jpg'
import deal_3 from '../../../public/images/deal-3.jpg'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AddSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-[80vh] mb-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
        
          <div>
            <img src={deal_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={deal_3} alt="" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default AddSlider;
