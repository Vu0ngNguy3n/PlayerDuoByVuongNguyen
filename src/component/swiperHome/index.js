// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination,Navigation, Mousewheel, Keyboard  } from "swiper";
import "./SwiperHome.scss"


function SwiperHome() {
    return (
            <Swiper
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard ]}
            className="mySwiper"    
          >
            <SwiperSlide>
              <img src="https://files.playerduo.net/production/images/banner/715867c6-698f-411a-b4f9-1e9093130b60__ff5aee00-79ee-11ed-a19f-23a3b10d190e__admin_banner.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://files.playerduo.net/production/images/banner/446982ba-1aeb-4730-8d52-8e4308776e4b__ca8ef380-0f15-11ee-a657-a54d6be1d46a__admin_banner.jpg" />
            </SwiperSlide>
            
            
          </Swiper>
    )
}

export default SwiperHome