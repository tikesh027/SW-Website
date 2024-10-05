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
        <div className="text-3xl font-semibold">Web Stories</div>
        <div className="mt-4 mb-[100px]">
          <Swiper
            spaceBetween={5} // Space between slides
            navigation={true}
            pagination={false}
            modules={[Navigation]}
            className="relative"
            breakpoints={{
              320: {
                slidesPerView: 3, // Display 3 slides on small screens
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
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
