import React from "react";
import "./MyProjects.css";
import laravel1 from "../../assets/laravel.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function MyProjects() {
  return (
    <div className="project-container">
      <span className="header-project"> My Project</span>
      <div className="slide-container">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide width={"200px"}>
            <div className="card-project">
              <img src={laravel1} alt="" className="img" />
              <div className="textBox">
                <p className="text head">Ethereum</p>
                <span>Cryptocurrency</span>
                <p className="text price">1.654,34€</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-project">
              <img src={laravel1} alt="" className="img" />
              <div className="textBox">
                <p className="text head">Ethereum</p>
                <span>Cryptocurrency</span>
                <p className="text price">1.654,34€</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-project">
              <img src={laravel1} alt="" className="img" />
              <div className="textBox">
                <p className="text head">Ethereum</p>
                <span>Cryptocurrency</span>
                <p className="text price">1.654,34€</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-project">
              <img src={laravel1} alt="" className="img" />
              <div className="textBox">
                <p className="text head">Ethereum</p>
                <span>Cryptocurrency</span>
                <p className="text price">1.654,34€</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="button-next"></div>
      <div className="button-prev"></div>
    </div>
  );
}
