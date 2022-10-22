import React from 'react'
import "./testimonials.css"
import AVATAR1 from "../../assets/a-khoa.jpeg"
import AVATAR2 from "../../assets/a-minh.jpeg"
import AVATAR3 from "../../assets/a-cu.jpeg"
import AVATAR4 from "../../assets/a-quang.jpeg"

// import Swiper core and required modules
import { Pagination } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVATAR1,
    name: "Nguyen Huu Anh Khoa",
    role: "Hue Codegym Center Director",
    review: '"Originally a bachelor of Korean, with many job opportunities ahead. But with a passion for programming, Thinh came to CodeGym to realize his dream of becoming a programmer. He is a practitioner with a good mindset, responsibility at work, search skills, and independent working skills. Besides, he is also an active student who participates in extracurricular activities at CodeGym."'
  },
  // {
  //   avatar: AVATAR2,
  //   name: "Bui Cong Binh Minh",
  //   role: "Hue Codegym Center Teacher",
  //   review: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur nostrum a. Magni ut aut exercitationem, neque reiciendis eum placeat cum eius sunt, unde quaerat. Laborum ipsam a voluptatibus incidunt."'
  // },
  // {
  //   avatar: AVATAR3,
  //   name: "Tran Van Cu",
  //   role: "Hue Codegym Center Teacher",
  //   review: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur nostrum a. Magni ut aut exercitationem, neque reiciendis eum placeat cum eius sunt, unde quaerat. Laborum ipsam a voluptatibus incidunt."'
  // },
  {
    avatar: AVATAR4,
    name: "Dang Van Quang",
    role: "Hue Codegym Center Teacher",
    review: '"Thinh is a student with high self-study ability and quick knowledge. He has good team leadership ability and primarily greatly supported the Hue Codegym center to organize events such as teambuilding summer camp and birthday events."'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>References</h2>

      <Swiper 
        className="container testimonials__container"
         // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review, role}) => (
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar one" />
            </div>
            <h5 className="client__name">{name}</h5>
            <p className='text-primary' style={{fontSize: "0.7rem"}}>{role}</p>
              <small className="client__review">
                {review}
              </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials