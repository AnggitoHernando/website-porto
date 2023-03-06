import React from "react";
import "./MyProjects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function MyProjects() {
  return (
    <div className="project-container">
      <span className="header-project"> Portofolio</span>
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
              <img src="/porto/On Board 1.png" alt="" className="img" />
              <div className="textBox">
                <p className="text head">NFT App</p>
                <span>Aplication Design</span>
                <a href="https://bit.ly/NFTFIGMA">
                  <p className="text price">Lihat Selengkapnya</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-project">
              <img src="/porto/planning app.png" alt="" className="img" />
              <div className="textBox">
                <p className="text head">Planning Aplication</p>
                <span>Aplication Design</span>
                <a href="https://www.figma.com/proto/yo6PfVgRTRK8UREpArU2F9/Planning-App?page-id=0%3A1&node-id=1%3A2&viewport=389%2C277%2C0.5&scaling=scale-down">
                  <p className="text price">Lihat Selengkapnya</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-project">
              <img src="/porto/go travel.jpg" alt="" className="img" />
              <div className="textBox">
                <p className="text head">GoTravely Redesain</p>
                <span>Aplication Design</span>
                <a href="https://bit.ly/RedesainGoTravel">
                  <p className="text price">Lihat Selengkapnya</p>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-project">
              <img
                src="/porto/Screenshot (287).png"
                alt=""
                className="img"
                style={{ height: "30%" }}
              />
              <div className="textBox">
                <p className="text head">Brainstorming NFT APP</p>
                <span>Aplication Design</span>
                <a href="https://bit.ly/BrainstormingNFT">
                  <p className="text price">Lihat Selengkapnya</p>
                </a>
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
