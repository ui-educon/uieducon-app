import React, { use, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Achdata } from "./data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import AchCard from "./AchCard";

function Testimonials() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => setDomLoaded(true), []);

  return (
    <>
      {domLoaded ? (
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "bullets",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper px-14 h-96"
        >
          {Achdata.map((data, ind) => {
            return (
              <SwiperSlide key={`${ind}`}>
                <AchCard key={ind} achdata={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
    </>
  );
}
export default Testimonials;
