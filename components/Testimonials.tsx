"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionHeading from "./reusables/SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <section className="bg-bodyBackground py-portraitSection">
      <div className="px-6 mb-7">
        <SectionHeading tagText="Testimonials" titleText="Customer Reviews" />
      </div>
      <div className="slider px-6 relative ">
        <Swiper
          init={false}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper relative md:hidden"
        >
          {testimonials.map(({ text, img, name, location, id }) => (
            <SwiperSlide>
              <TestimonialCard
                text={text}
                img={img}
                name={name}
                location={location}
                key={id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
