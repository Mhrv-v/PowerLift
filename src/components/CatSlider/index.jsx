import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const CatSlider = () => {
  return (
    <>
    <div className="homeCatSlider py-8">
        <div className="container">
            <Swiper slidesPerView={7} navigation={true} spaceBetween={10} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Stair Master</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Treadmills</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Stationary Bikes</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Rowing Machine</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Kettlebells</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Dumbbells</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Weight Plates</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Power Racks</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Bench Press Station</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Squat Racks</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Cable Machine</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Smith Machine</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Resistance Bands</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Pull-up Bars</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Battle Ropes</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Hip Thrust Machine</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Abductor Machine</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Foam Rollers</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Gym Flooring Mats</h3>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={"/"} className='link transition'>
                        <div className="overflow-hidden item py-8 px-3 bg-white rounder-sm text-center flex items-center justify-center flex-col">
                            <img className='w-[60px]' src="https://service.spicezgold.com/download/1741660962379_fash.png"/>
                            <h3 className='font-[600] text-[15px] mt-3'>Lifting Belts & Gloves</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default CatSlider;
