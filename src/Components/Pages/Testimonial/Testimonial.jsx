import React from "react";
import './Testimonial.css'
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import adam from '../../../Images/Adam.jpg'

const Testimonial = () =>{
    return(
        <div className="testimonial">
            <div className="testimonial-container">
                <h1>My Testimonial</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum odit reprehenderit velit optio maxime autem, mollitia modi exercitationem distinctio at ullam doloribus iste quos laborum, similique enim incidunt alias rerum.</p>
                <div>
                     <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={2}
                        // navigation
                        autoplay={{Autoplay: true}}
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            0:{
                                slidesPerView: 1,
                            },
                            520:{
                                slidesPerView: 2,
                            },
                            950:{
                                slidesPerView: 2
                            }

                        }}
                        >
                        <SwiperSlide className="slider">
                            <div className="slider-top">
                                <img src={adam} alt="" />
                                <div>
                                    <h2>Assayouti Adams</h2>
                                    <p>Regular Client</p>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, earum. Obcaecati nam numquam modi repellendus necessitatibus nulla eaque quas temporibus est fugit. Corporis tempore architecto, voluptatibus esse recusandae quibusdam sint.</p>
                        </SwiperSlide>
                        <SwiperSlide className="slider">
                            <div className="slider-top">
                                <img src={adam} alt="" />
                                <div>
                                    <h2>Assayouti Adams</h2>
                                    <p>Regular Client</p>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, earum. Obcaecati nam numquam modi repellendus necessitatibus nulla eaque quas temporibus est fugit. Corporis tempore architecto, voluptatibus esse recusandae quibusdam sint.</p>
                        </SwiperSlide>
                        <SwiperSlide className="slider">
                            <div className="slider-top">
                                <img src={adam} alt="" />
                                <div>
                                    <h2>Assayouti Adams</h2>
                                    <p>Regular Client</p>
                                </div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, earum. Obcaecati nam numquam modi repellendus necessitatibus nulla eaque quas temporibus est fugit. Corporis tempore architecto, voluptatibus esse recusandae quibusdam sint.</p>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}
                        ...
                        </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;