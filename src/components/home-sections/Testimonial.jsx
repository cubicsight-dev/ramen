import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";

export const Testimonial = () => {
  return (
    <section id="menu" className="">
      <div className="custom-container py-10">
        <h2 className="mb-10 text-center text-xl font-semibold uppercase">
          Our Satisfied Customer
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          // onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          loop
        >
          <SwiperSlide>
            <article className="text-center">
              <img
                className="mx-auto mb-6 w-32 rounded-full"
                src="./home/testimonial/customer1.jpg"
                alt=""
              />
              <blockquote>
                <p className="relative mx-auto w-1/3 text-center before:absolute before:-top-6 before:-left-4 before:text-5xl before:content-['\201C'] after:absolute after:-bottom-6 after:-right-2 after:text-5xl after:content-['\201D']">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi, similique.
                </p>
              </blockquote>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="text-center">
              <img
                className="mx-auto mb-6 w-32 rounded-full"
                src="./home/testimonial/customer2.jpg"
                alt=""
              />
              <blockquote>
                <p className="relative mx-auto w-1/3 text-center before:absolute before:-top-6 before:-left-4 before:text-5xl before:content-['\201C'] after:absolute after:-bottom-6 after:-right-2 after:text-5xl after:content-['\201D']">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi, similique.
                </p>
              </blockquote>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="text-center">
              <img
                className="mx-auto mb-6 w-32 rounded-full"
                src="./home/testimonial/customer3.jpg"
                alt=""
              />
              <blockquote>
                <p className="relative mx-auto w-1/3 text-center before:absolute before:-top-6 before:-left-4 before:text-5xl before:content-['\201C'] after:absolute after:-bottom-6 after:-right-2 after:text-5xl after:content-['\201D']">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi, similique.
                </p>
              </blockquote>
            </article>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
