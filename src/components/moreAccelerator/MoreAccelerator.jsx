import cn from 'classnames'
import content from './content';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const MoreAccelerator = () => {

    return (
        <div className="w-full flex justify-center bg-c_pink-regular">
            <div className="relative xl:w-[1280px] w-[90vw] xl:pt-[204px] md:pt-[150px] pt-[90px] pb-[169px] ms:px-[40px] px-[15px] overflow-hidden">
                <div className="pb-[53px]">
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
                <div className='md:pb-[127px] pb-[80px] border-b-[2px] border-b-c_red-deep'>
                    <Swiper 
                        slidesPerView={"auto"} 
                        spaceBetween={80}
                    >
                        {
                            content.title.map((item, index) => (
                                <SwiperSlide key={index} className='border-t-[2px] border-t-c_red-deep pt-[30px] md:w-[488px]'>
                                    <div className={cn(
                                        'md:text-[45px] md:leading-[48px] text-[22px] leading-[25px] pb-[30px]',
                                        'font-otf not-italic font-semibold',
                                        index === 0 ? 'text-c_yellow-regular' 
                                            : index === 1 ? 'text-c_orange-primary' 
                                            : index === 2 ? 'text-c_orange-regular' 
                                            : ''
                                    )}>
                                        {item}
                                    </div>
                                    <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] text-c_red-deep'>
                                        {content.context[index]}
                                    </div>
                                    {content.needed[index] !== '' ? 
                                        <div className='pt-[20px] opacity-[0.5] md:text-[16px] md:leading-[20px] text-[13px] leading-[16px]'>
                                            требования
                                        </div>
                                    : null}
                                    <div className={cn(
                                        'pt-[10px] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] text-c_red-deep'
                                    )}>
                                        {content.needed[index]}
                                    </div>
                                </SwiperSlide>
                            ))

                        }
                    </Swiper>
                </div>
                <div className='text-center md:pt-[120px] text-c_red-deep'>
                    <div className='text-[110px] leading-[140px]'>
                        0₽
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-[22px] leading-[26px] font-otfBold font-bold not-italic text-center  w-[169px]'>
                            Стоимость участия
                        </div>
                    </div>
                    <div className='flex justify-center pt-[30px]'>
                        <div className='w-[332px] md:text-[21px] md:leading-[30px] text-[15px] leading-[21px] font-otfNormal'>
                            Как для некоммерческих, так и для коммерческих проектов участие бесплатно.
                        </div>
                    </div>
                    <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" target="_blank">
                        <div className='flex justify-center pt-[62px]'>
                            <div 
                                className={cn(
                                    'bg-c_orange-regular hover:bg-c_orange-hover active:bg-c_orange-pressed flex justify-center items-center rounded-[6px]',
                                    'w-[162px] h-[41px] mt-[43px]',
                                    'drop-shadow-default hover:drop-shadow-hover'
                                )}
                            >
                                <div className={cn('buttonText text-[18px] leading-[18px]')}>
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