import {useState} from 'react'
import cn from 'classnames'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import FadeEffect from '../FadeEffect';
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { ourProjects } from '../../content';

import Next from '../../modules/Next';

SwiperCore.use([Keyboard, Mousewheel]);

const Slider = ({setShow, setActive, setOpen, lang}) => {
    const swiper = useSwiper();

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return ourProjects.ru
        else if(lan === 'ru') 
            return ourProjects.eng
    }
    const content = chooseLan(lang)

    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)

    const fade = [fade0, fade1]
    const setFade = [setFade0, setFade1]

    return(
        <div>
            <Next direction={"left"} onClickHandler={swiper.slidePrev()} />
            <Swiper
                slidesPerView={"auto"} 
                spaceBetween={30}
                keyboard={true}
                
                // //mousewheel={true}
                className="mx-0 xl:px-[calc((100vw-1280px)/2+40px)] md:px-[40px] px-[15px]"
                onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            >
                {content.title.map((item, index) => (
                    <SwiperSlide 
                        key={index}
                        className={cn(
                            'border-t-[2px] border-t-c_blue-dark', 
                            'xl:w-[997px] md:w-[650px] w-[320px] #{!important}',
                            'bg-c_blue-regular duration-500',
                        )}
                        onClick={() => setShow(true)}
                    >
                        <FadeEffect lang={lang} setOpen={setOpen} i={{item, index}} fade={fade[index]} setFade={setFade[index]} />                   
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <Next direction={"right"} onClickHandler={swiper.slideNext()} /> */}
        </div>
    )
}

export default Slider