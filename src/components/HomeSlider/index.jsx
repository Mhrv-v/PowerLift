import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import banner1 from '../../assets/imgs/1.png';
import banner2 from '../../assets/imgs/2.png';
import banner3 from '../../assets/imgs/3.png';
import banner4 from '../../assets/imgs/4.png';
import banner5 from '../../assets/imgs/5.png';


const HomeSlider = () => {
  return (
    <>
        <div className="homeSlider py-8">
            <div className="container">

                <Swiper spaceBetween={10} navigation={true} modules={[Navigation]} className="sliderHome">
                    
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={banner2} alt="Banner" className='w-full h-[500px]'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={banner5} alt="Banner" className='w-full h-[500px]'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={banner3} alt="Banner" className='w-full h-[500px]'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={banner4} alt="Banner" className='w-full h-[500px]'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src={banner1} alt="Banner" className='w-full h-[500px]'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
  )
}

export default HomeSlider;