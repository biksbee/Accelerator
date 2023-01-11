import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { team } from '../content';

import Card from './Card';

SwiperCore.use([Keyboard, Mousewheel]);

const Team = ({lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return team.ru
        else if(lan === 'ru') 
            return team.eng
    }
    const content = chooseLan(lang)

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
                <div className='md:pb-[80px] pb-[50px]'>
                    <Swiper
                        slidesPerView={"auto"} 
                        spaceBetween={30}
                        keyboard={true}
                        //mousewheel={true}
                        className='flex-column md:px-[40px] px-[15px]'
                    >
                        {content.name.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className='border-t-c_gray-regular border-t-[2px] md:w-[284px] w-[273px] pt-[20px]'
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
                                {content.about[2]} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team