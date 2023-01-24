import {useState, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { team } from '../content';

import Card from './Card';
import Next from '../modules/Next';

SwiperCore.use([Keyboard, Mousewheel]);

const Team = ({lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return team.ru
        else if(lan === 'рус') 
            return team.eng
    }
    const content = chooseLan(lang)

    const [active, setActive] = useState(0)
    const swiperRef = useRef(null)

    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)
    const [fade2, setFade2] = useState(false)
    const [fade3, setFade3] = useState(false)

    const fade = [fade0, fade1, fade2, fade3]
    const setFade = [setFade0, setFade1, setFade2, setFade3]

    return (
        <div id='team' className="w-full flex justify-center bg-c_blue-moreDark">
            <div className="xl:w-[1280px] w-full">
                <div className="w-full flex ms:justify-center md:px-[40px] px-[15px] md:py-[160px] py-0 pt-[90px] pb-[60px]">
                    <div className="startPageText ms:text-center text-c_gray-blur ms:w-[650px] w-[230px]">
                        {content.mainTitle}
                    </div>
                </div>
                <div className='relative md:pb-[80px] pb-[50px] flex'>
                    {/* { active !== 0 ? 
                        <div className='ms:hidden md:flex hidden absolute z-[10] top-[50%] left-0'>
                            <Next 
                                direction={"left"} 
                                onClickHandler={() => swiperRef.current.swiper.slidePrev()}
                            />
                        </div>
                    : null}
                    { active !== 1 ? 
                        <div className='ms:hidden md:flex hidden absolute z-[10] top-[50%] right-0'>
                            <Next 
                                direction={"right"}
                                onClickHandler={() => swiperRef.current.swiper.slideNext()}
                            />
                        </div>
                    : null} */}
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={"auto"} 
                        spaceBetween={40}
                        keyboard={true}
                        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                        className='flex md:px-[40px] px-[15px] m-0'
                    >
                        {content.name.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className='flex flex-col border-t-c_gray-regular border-t-[2px] xl:w-[373px] md:w-[28vw] w-[270px] pt-[20px]'
                            > 
                                <Card i={{item, index}} lang={lang} fade={fade[index]} setFade={setFade[index]} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='text-c_gray-blur font-otf-book md:px-[40px] px-[15px] md:pb-[189px] pb-[90px]'>
                    <div className='md:text-[48px] md:leading-[67px] text-[22px] leading-[30px] pb-[10px]'>
                        {content.about[0]}
                    </div>
                    <div className='md:columns-2 gap-[50px]'>
                        <div className='xl:w-[575px] md:w-[45vw] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] md:mr-[20px]'>
                            <div className='pb-[20px]'>
                                {content.about[1]}     
                            </div>      
                        </div>
                        <div className='xl:w-[575px] md:w-[45vw] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px]'>
                            <div className='pb-[20px]'>
                                {content.about[2]}<a className='border-b-[rgba(216,209,241,0.1)] border-b-[1px] duration-500 hover:border-b-[rgba(216,209,241,0.5)]' href={content.href}>{content.about[3]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team