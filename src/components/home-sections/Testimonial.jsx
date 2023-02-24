
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper'

export const Testimonial = () => {
    return (
        <section id="menu" className="">
            <div className="py-10 custom-container">
            <h2 className="text-center text-xl font-semibold uppercase mb-10">Our Satisfied Customer</h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        type: 'bullets',
                        clickable: true
                    }}
                    autoplay={{
                        delay: 3000
                    }}
                    loop
                    >
                    <SwiperSlide>
                        <article className="text-center">
                            <img className="w-32 rounded-full mx-auto mb-6" src="./home/testimonial/customer1.jpg" alt="" />
                            <blockquote>
                                <p className="text-center relative w-1/3 mx-auto before:content-['\201C'] before:text-5xl before:absolute before:-top-6 before:-left-4 after:content-['\201D'] after:text-5xl after:absolute after:-bottom-6 after:-right-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, similique.</p>
                            </blockquote>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="text-center">
                            <img className="w-32 rounded-full mx-auto mb-6" src="./home/testimonial/customer2.jpg" alt="" />
                            <blockquote>
                                <p className="text-center relative w-1/3 mx-auto before:content-['\201C'] before:text-5xl before:absolute before:-top-6 before:-left-4 after:content-['\201D'] after:text-5xl after:absolute after:-bottom-6 after:-right-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, similique.</p>
                            </blockquote>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="text-center">
                            <img className="w-32 rounded-full mx-auto mb-6" src="./home/testimonial/customer3.jpg" alt="" />
                            <blockquote>
                                <p className="text-center relative w-1/3 mx-auto before:content-['\201C'] before:text-5xl before:absolute before:-top-6 before:-left-4 after:content-['\201D'] after:text-5xl after:absolute after:-bottom-6 after:-right-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, similique.</p>
                            </blockquote>
                        </article>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}
