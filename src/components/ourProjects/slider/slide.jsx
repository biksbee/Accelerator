import {useState, useRef} from 'react'
import cn from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Navigation,Keyboard, Mousewheel } from "swiper/core";

import { ourProjects } from '../../content';
import FadeEffect from '../FadeEffect';
import Next from '../../modules/Next';

SwiperCore.use([Keyboard, Mousewheel, Navigation]);


const Slider = ({setShow, active, setActive, setOpen, lang}) => {

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
    
    const swiperRef = useRef(null)
    
    return(
        <div className='relative'>
            { active !== 0 ? 
                <div className='ms:flex hidden absolute z-[10] top-[50%] left-0'>
                    <Next 
                        direction={"left"} 
                        onClickHandler={() => swiperRef.current.swiper.slidePrev()}
                    />
                </div>
            : null}
            { active !== content.title.length-1 ? 
                <div className='ms:flex hidden absolute z-[10] top-[50%] right-0'>
                    <Next 
                        direction={"right"}
                        onClickHandler={() => swiperRef.current.swiper.slideNext()}
                    />
                </div>
            : null}    
            <Swiper
                ref={swiperRef}
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
        </div>
    )
}

export default Slider