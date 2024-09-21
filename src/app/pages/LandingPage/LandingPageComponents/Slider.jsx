"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import StatusImage from "../../../Assets/images.jpeg";

const Slider = () => {
  const images = [
    StatusImage,
    StatusImage,
    StatusImage,
    StatusImage,
    StatusImage,
    StatusImage,
    StatusImage,
  ];

  return (
    <div>
      <div className="flex justify-center items-center text-2xl w-full h-[250px]">
        AD
      </div>
      <div>
        <div className="text-5xl font-semibold">Web Stories</div>
        <div className="mt-4 mb-[100px]">
          <Swiper
            spaceBetween={20} // Space between slides
            navigation={true}
            pagination={false}
            modules={[Navigation]}
            className="relative"
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide on small screens
              },
              768: {
                slidesPerView: 3, // 3 slides on medium screens
              },
              1024: {
                slidesPerView: 5, // 5 slides on large screens
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <Image
                    src={image}
                    width={300}
                    height={400} // Adjusted height for better aspect ratio
                    objectFit="cover"
                    className="rounded-[50px]"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
