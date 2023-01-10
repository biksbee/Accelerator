import {useState} from 'react'
import cn from 'classnames'
import content from './content'
import CardExp from './CardExp'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

SwiperCore.use([Keyboard, Mousewheel]);


const Consultation = ({setOpen}) => {

    const [bluer, setBluer] = useState(false)
    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)
    const [fade2, setFade2] = useState(false)
    const [fade3, setFade3] = useState(false)
    const [fade4, setFade4] = useState(false)    

    const fade = [fade0, fade1, fade2, fade3, fade4]
    const setFade = [setFade0, setFade1, setFade2, setFade3, setFade4]

    return (
        <div>
            <div className='s:w-[386px] w-[80vw] mb-[51px] relative md:px-[40px] px-[15px]'>
                <div className={cn(
                    "md:pb-[9px] pb-[6px] text-c_gray-regular md:text-[45px] md:leading-[45px] text-[22px] leading-[22px]",
                    "font-otf font-otf-semiBold not-italic"
                )}>
                    Консультации с экспертами
                </div>
                <div className='bg-curveLineConsultation h-[20px] bg-no-repeat'></div>
            </div>
            <div className='md:px-[40px] px-[15px] xs:grid ms:grid-cols-3 hidden md:gap-x-[21px] md:gap-y-[50px]'>
                {content.f_name.map((item, index) => (
                    index < 5 ? 
                        <div key={index} className=" h-max xl:mt-0 ms:mt-[30px] border-t-c_gray-regular border-t-[2px] xl:w-[373px] w-[28vw] pt-[20px]">
                            <CardExp key={index} i={{item, index}} fade={fade[index]} setFade={setFade[index]}/>
                        </div>
                    : null    
                ))}
                <div 
                    className='cursor-pointer xl:mt-0 ms:mt-[30px] xl:w-[367px] ms:w-[28vw] border-[2px] flex justify-center py-[40px] border-c_gray-regular photoRadius'
                    onMouseEnter={() => setBluer(true)}
                    onMouseLeave={() => setBluer(false)}   
                    onClick={() => setOpen(true)}  
                >
                    <div className='flex flex-col justify-between h-full w-[302px]'>
                        <div className='text-c_gray-regular xl:ml-0 ml-[20px] w-[282px] pb-[40px] font-otf-semiBold xl:text-[33.75px] text-[26px] xl:leading-[33.75px] leading-[26px]'>
                            Посмотреть всех экспертов
                        </div>
                        <div className='h-max grid justify-center xl:ml-0 ml-[20px] grid-cols-3 xl:gap-x-[13px] xl:gap-y-[11px] gap-[13px]'>
                            {
                                content.seeAll.map((item, index) => (
                                    index !== 11 ? 
                                        <div
                                            key={index}
                                            className={
                                                cn(
                                                    `${item} xl:w-[85.43px] xl:h-[85.43px] w-[75px] h-[70px] bg-no-repeat bg-cover bg-center photoCardRadius`,
                                                    !bluer ? 'filter grayscale' :  'filter-none',
                                                )} 
                                        />
                                    :
                                    <div key={index} className='flex justify-end items-end xl:w-[85.43px] xl:h-[85.43px] w-[65px] h-[65px]'>
                                        <div
                                            className={
                                                cn(
                                                    `${item} w-[38px] h-[39px] bg-no-repeat bg-cover bg-center`,
                                                    // 'rotate-[-135deg]'
                                                
                                                )} 
                                        />
                                    </div>    

                                ))
                            }                            
                        </div>
                    </div>    
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={"auto"} 
                    spaceBetween={40}
                    keyboard={true}
                    //mousewheel={true}
                    className={'xs:hidden md:px-[40px] px-[15px]'}
                >
                    {content.f_name.map((item, index) => (
                        index < 5 ? 
                            <SwiperSlide key={index} className="border-t-c_gray-regular border-t-[2px] md:w-[373px] w-[273px] pt-[20px]">
                                <CardExp  i={{item, index}} fade={fade[index]} setFade={setFade[index]}/>
                            </SwiperSlide>
                        : null
                    ))}
                    <SwiperSlide>
                        <div 
                            className='md:w-[367px] w-[273px] border-[2px] flex justify-center py-[40px] cursor-pointer border-c_gray-regular photoRadius'
                            onMouseEnter={() => setBluer(true)}
                            onMouseLeave={() => setBluer(false)}   
                            onClick={() => setOpen(true)}  
                        >
                            <div className='md:w-[282px] w-[184px]'>
                                <div className='w-[184px] text-c_gray-regular pb-[40px] font-otf-semiBold md:text-[33.75px] md:leading-[33.75px] text-[20px] leading-[20px]'>
                                    Посмотреть всех экспертов
                                </div>
                                <div className='grid grid-cols-3 gap-x-[13px] gap-y-[15px]'>
                                    {
                                        content.seeAll.map((item, index) => (
                                            index !== 11 ? 
                                                <div
                                                    key={index}
                                                    className={
                                                        cn(
                                                            `${item} md:w-[85.43px] md:h-[85.43px] w-[48px] h-[49px] bg-no-repeat bg-cover bg-center photoCardRadius`,
                                                            !bluer ? 'filter grayscale' :  'filter-none',
                                                        )} 
                                                />
                                            :
                                            <div key={index} className='flex justify-end items-end'>
                                                <div
                                                    className={
                                                        cn(
                                                            `${item} w-[38px] h-[39px] bg-no-repeat bg-cover bg-center`,
                                                            // 'rotate-[-135deg]'
                                                        )} 
                                                />
                                            </div>    

                                        ))
                                    }                            
                                </div>
                            </div>    
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Consultation