import {useState, useEffect, useRef} from 'react'
import content from "../content"
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


const Slider = ({setShow, setActive, setOpen, send}) => {

    const [fade, setFade] = useState(false)

    const refEl = useRef()

    const func = () => {
        if(fade) return 0.1
        else return 1 
    }

    return(
        <Swiper
            slidesPerView={"auto"} 
            spaceBetween={30}
            // loop={true}
            className="mx-0 xl:px-[calc((100vw-1280px)/2)] md:px-[40px] px-[15px]"
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
                    <div 
                        className="md:flex justify-between pt-[20px] pb-[26px] cursor-pointer"  
                        onClick={() => setOpen(true)}
                        onMouseEnter={() => setFade(true)}
                        onMouseLeave={() => setFade(false)} 
                    >
                        <div className="ourProjectStyleTitle">
                            {item}
                        </div>
                        <div 
                            id="subTitle" 
                            className={cn(
                                "ourProjectStyleSubTitle relative",                         
                            )}

                        >
                            {content.subTitle[index]}
                            {index === 0 ? <div className='text-c_orange-regular absolute flex xl:bottom-[35px] xl:left-[90px] md:bottom-[15px] md:left-[90%] bottom-[46px] left-[75%]'>→</div> : null}
                        </div>
                    </div>
                    <div>
                        <div 
                            className={ "bg-white rounded-[15px] duration-500" }
                            style = {{
                                opacity: func()
                            }}    
                        >
                        <div 
                            className={cn(
                                content.slide[index],
                                'w-full bg-center bg-contain bg-repeat-round',
                                'xl:h-[510px] md:h-[332px] h-[162px]'
                            )}
                        />  
                    </div>
                    </div>                     
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider