import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { FaArrowCircleRight, FaArrowAltCircleRight } from 'react-icons/fa'
function App() {
  return (
    <section>
      <h1 className='heading font-bold'>Featured Products</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <Link to='/singleproduct'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              alt='slide_image'
              loading='lazy'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/singleproduct'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              alt='slide_image'
              loading='lazy'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/singleproduct'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              alt='slide_image'
              loading='lazy'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/singleproduct'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              alt='slide_image'
              loading='lazy'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/singleproduct'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              alt='slide_image'
              loading='lazy'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/singleproduct'>
            <img
              src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              alt='slide_image'
              loading='lazy'
            />
          </Link>
        </SwiperSlide>
        <div className='slider-controler'>
          {/* <div className='swiper-button-prev slider-arrow'>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div> */}
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </section>
  )
}

export default App
