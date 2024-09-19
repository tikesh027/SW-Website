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

  const CommonSlider = ({ images }) => {
    return (
      <div>
        <div className="flex justify-center items-center text-2xl w-full h-[250px]">
          AD
        </div>
        <div>
          <div className="text-5xl font-semibold">Web Stories</div>
          <div className="mt-4 mb-[100px]">
            <Swiper
              spaceBetween={50} // Adjusted to allow more space between slides
              slidesPerView={5} // Adjusted to show more slides
              navigation={true}
              pagination={false} // Removed pagination dots
              modules={[Navigation]}
              className="relative"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <Image
                      src={image}
                      width={300} // Adjusted width
                      height={900} // Increased height
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

  return <CommonSlider images={images} />;
};

export default Slider;
