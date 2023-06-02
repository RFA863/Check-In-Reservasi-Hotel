"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

import Image from "next/image";

import Hero1 from "../../public/img/Hero1.jpg";
import Hero2 from "../../public/img/Hero2.jpg";
import Hero3 from "../../public/img/Hero3.jpg";

export default function Hero() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
    >
      <SwiperSlide>
        <div className="flex justify-center py-12 bg-[#F6F1F1]">
          <Image src={Hero1} className="object-none h-80 rounded-xl" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-12 bg-[#F6F1F1]">
          <Image src={Hero2} className="object-none h-80 rounded-xl" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-12 bg-[#F6F1F1]">
          <Image src={Hero3} className="object-none h-80 rounded-xl" />
        </div>
      </SwiperSlide>
    </Swiper>

    // <div className="flex justify-center py-12 bg-[#F6F1F1]">
    //     <Image src={Hero1}  className="object-none h-80 rounded-xl"/>
    // </div>
  );
}
