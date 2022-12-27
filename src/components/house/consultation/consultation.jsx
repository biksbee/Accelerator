import {useState} from 'react'
import cn from 'classnames'
import content from './content'
import CardExp from './CardExp'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


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
            <div className='w-[316px] mb-[51px] relative'>
                <div className={cn(
                    "text-c_gray-regular md:text-[45px] leading-[65px] text-[22px] md:leading-[42px]",
                    "font-otf font-normal not-italic"
                )}>
                    Консультации с экспертами
                </div>
                <div className='bg-curveLineConsultation h-[20px] bg-no-repeat'></div>
            </div>
            <div className='ms:grid xl:grid-cols-3 hidden ms:grid-cols-2 xl:gap-[50px]'>
                {content.f_name.map((item, index) => (
                    <div key={index} className="h-full xl:mt-0 ms:mt-[30px] cursor-pointer border-t-c_gray-regular border-t-[2px] md:w-[373px] w-[273px] pt-[20px]">
                        <CardExp key={index} i={{item, index}} fade={fade[index]} setFade={setFade[index]}/>
                    </div>
                ))}
                <div 
                    className='xl:mt-0 ms:mt-[30px] w-[367px] border-[2px] flex justify-center py-[40px] border-c_gray-regular photoRadius'
                    onMouseEnter={() => setBluer(true)}
                    onMouseLeave={() => setBluer(false)}   
                    onClick={() => setOpen(true)}  
                >
                    <div className='w-[282px]'>
                        <div className='text-c_gray-regular w-[282px] font-otf font-semibold text-[33.75px] leading-[33.75px]'>
                            Посмотреть всех экспертов
                        </div>
                        <div className='grid grid-cols-3 gap-x-[13px] gap-y-[11px]'>
                            {
                                content.seeAll.map((item, index) => (
                                    index !== 11 ? 
                                        <div
                                            key={index}
                                            className={
                                                cn(
                                                    `${item} w-[85.43px] h-[85.43px] bg-no-repeat bg-cover bg-center`,
                                                    !bluer ? 'filter grayscale' :  'filter-none',
                                                )} 
                                        />
                                    :
                                    <div key={index} className='flex justify-end items-end'>
                                        <div
                                            className={
                                                cn(
                                                    `${item} w-[85.43px] h-[85.43px] bg-no-repeat bg-cover bg-center`,
                                                    'rotate-[-135deg]'
                                                
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
                    spaceBetween={30}
                    className={'ms:hidden'}
                >
                    {content.f_name.map((item, index) => (
                        <SwiperSlide key={index} className="cursor-pointer border-t-c_gray-regular border-t-[2px] md:w-[373px] w-[273px] pt-[20px]">
                                <CardExp  i={{item, index}} fade={fade[index]} setFade={setFade[index]}/>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide>
                        <div 
                        className='w-[367px] border-[2px] flex justify-center py-[40px] border-c_gray-regular photoRadius'
                        onMouseEnter={() => setBluer(true)}
                        onMouseLeave={() => setBluer(false)}   
                        onClick={() => setOpen(true)}  
                        >
                            <div className='w-[282px]'>
                                <div className='text-c_gray-regular w-[282px] font-otf font-semibold text-[33.75px] leading-[33.75px]'>
                                    Посмотреть всех экспертов
                                </div>
                                <div className='grid grid-cols-3 gap-x-[13px] gap-y-[11px]'>
                                    {
                                        content.seeAll.map((item, index) => (
                                            index !== 11 ? 
                                                <div
                                                    key={index}
                                                    className={
                                                        cn(
                                                            `${item} w-[85.43px] h-[85.43px] bg-no-repeat bg-cover bg-center`,
                                                            !bluer ? 'filter grayscale' :  'filter-none',
                                                        )} 
                                                />
                                            :
                                            <div key={index} className='flex justify-end items-end'>
                                                <div
                                                    className={
                                                        cn(
                                                            `${item} w-[85.43px] h-[85.43px] bg-no-repeat bg-cover bg-center`,
                                                            'rotate-[-135deg]'
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