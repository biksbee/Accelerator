import cn from 'classnames'
import content from './content';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

SwiperCore.use([Keyboard, Mousewheel]); 

const MoreAccelerator = () => {

    return (
        <div className="w-full flex bg-c_pink-regular">
            <div className="w-full xl:pt-[204px] md:pt-[150px] pt-[90px] pb-[163px] overflow-hidden">
                <div className='w-full flex xl:justify-center xl:px-0 ms:px-[40px] px-[15px]'>
                    <div className="relative xl:w-[1280px] md:pb-[53px] pb-[10px]">
                        <div className={cn(
                                "pageTitle text-c_red-deep"
                        )}>
                            <div>
                                Больше, чем
                            </div>
                            <div>
                                просто акселератор
                            </div>
                        </div>
                        <div className="moreAcceleratorTheLoop"></div>
                    </div>
                </div>    
                <div className='md:pb-[127px] pb-[80px]'>
                    <Swiper 
                        slidesPerView={"auto"} 
                        spaceBetween={80}
                        keyboard={true}
                        mousewheel={true}
                        className={'md:flex hidden w-[100vw] xl:px-[calc((100vw-1280px)/2)] ms:px-[40px] px-[15px]'}
                    >
                        {
                            content.title.map((item, index) => (
                                <SwiperSlide key={index} className='border-t-[2px] border-t-c_red-deep md:w-[488px]'>
                                    <div className={cn(
                                        'md:text-[45px] md:leading-[48px] text-[22px] leading-[25px] py-[30px]',
                                        'font-otf-semiBold not-italic',
                                        index === 0 ? 'text-c_yellow-dirty' 
                                            : index === 1 ? 'text-c_orange-blur' 
                                            : index === 2 ? 'text-c_orange-bright' 
                                            : ''
                                    )}>
                                        {item}
                                    </div>
                                    <div className='md:text-[22px] md:leading-[30px] font-otf-book text-[15px] leading-[21px] text-c_red-deep'>
                                        {content.context[index]}
                                    </div>
                                    {content.needed[index] !== '' ? 
                                        <div className='pt-[20px] opacity-[0.5] md:text-[16px] md:leading-[20px] text-[13px] leading-[16px] uppercase font-otf-book'>
                                            требования
                                        </div>
                                    : null}
                                    <div className={cn(
                                        'pt-[10px] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] text-c_red-deep font-otf-book'
                                    )}>
                                        {content.needed[index]}
                                    </div>
                                </SwiperSlide>
                            ))

                        }
                    </Swiper>
                    <div className='md:hidden block w-full px-[15px]'>
                        {
                            content.title.map((item, index) => (
                                <SwiperSlide key={index} className='border-t-[2px] border-t-c_red-deep pt-[30px] mt-[50px] md:w-[488px]'>
                                    <div className={cn(
                                        'md:text-[45px] md:leading-[48px] text-[22px] leading-[25px] pb-[20px]',
                                        'font-otf-semiBold not-italic',
                                        index === 0 ? 'text-c_yellow-dirty' 
                                            : index === 1 ? 'text-c_orange-blur' 
                                            : index === 2 ? 'text-c_orange-bright' 
                                            : ''
                                    )}>
                                        {item}
                                    </div>
                                    <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book text-c_red-deep'>
                                        {content.context[index]}
                                    </div>
                                    {content.needed[index] !== '' ? 
                                        <div className='pt-[20px] opacity-[0.5] md:text-[16px] md:leading-[20px] text-[13px] leading-[16px] uppercase font-otf-semiBold'>
                                            требования
                                        </div>
                                    : null}
                                    <div className={cn(
                                        'pt-[10px] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book text-c_red-deep'
                                    )}>
                                        {content.needed[index]}
                                    </div>
                                </SwiperSlide>
                            ))

                        }
                    </div>
                </div>
                <div className='w-full flex justify-center ms:px-[40px] px-[15px]'>
                    <div className='border-b-[2px] border-b-c_red-deep w-full'></div>
                </div>
                <div className='text-center md:pt-[140px] pt-[95px] text-c_red-deep'>
                    <div className='text-[111px] leading-[111px] font-otf-light'>
                        0₽
                    </div>
                    <div className='flex justify-center pt-[9px]'>
                        <div className='text-[21px] leading-[26px] font-otf-bold not-italic text-center md:w-[169px]'>
                            Стоимость участия
                        </div>
                    </div>
                    <div className='flex justify-center pt-[30px] md:pb-[60px] pb-[40px]'>
                        <div className='w-[332px] md:text-[21px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book'>
                            Как для некоммерческих, так и для коммерческих проектов участие бесплатно.
                        </div>
                    </div>
                    <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" target="_blank">
                        <div className='flex justify-center h-max'>
                            <div 
                                className={cn(
                                    'bg-c_orange-regular hover:bg-c_orange-hover active:bg-c_orange-pressed duration-500 flex justify-center items-center rounded-[6px]',
                                    'md:w-[230px] w-[173px] h-[65px]',
                                    'drop-shadow-default hover:drop-shadow-hover'
                                )}
                            >
                                <div className={cn('text-[rgba(255,255,255,0.9)] cursor-pointer not-italic font-otf-semiBold md:text-[23px] text-[16px] md:leading-[23px] leading-[16px]')}>
                                    Подать заявку
                                </div>
                            </div>
                        </div>
                    </a>    
                </div>
            </div>
        </div>
    )
}

export default MoreAccelerator