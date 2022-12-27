import content from "../content"
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Slider = ({setShow, setActive, setOpen}) => {

    

    return(
        <Swiper
            slidesPerView={"auto"} 
            spaceBetween={30}
            // loop={true}
            className="mx-0"
            onClick={() => setOpen(true)}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        >
            {content.title.map((item, index) => (
                <SwiperSlide 
                    key={index}
                    className={cn(
                        'border-t-[2px] border-t-c_blue-dark', 
                        'xl:w-[997px] md:w-[650px] w-[320px] #{!important}',
                        'bg-c_green-regular hover:bg-c_blue-regular duration-500',
                    )}
                    onClick={() => setShow(true)}
                >
                    <div className="md:flex justify-between pt-[20px] pb-[26px]">
                        <div className="ourProjectStyleTitle">
                            {item}
                        </div>
                        <div 
                            id="subTitle" 
                            className={cn(
                                "ourProjectStyleSubTitle",                         
                            )}

                        >
                            {content.subTitle[index]}
                        </div>
                    </div>
                    <div 
                        className={cn(
                            content.slide[index],
                            'w-full bg-center bg-contain bg-repeat-round',
                            'xl:h-[510px] md:h-[332px] h-[162px]'
                        )}
                    />                       
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider