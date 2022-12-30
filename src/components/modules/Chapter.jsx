import cn from 'classnames'
import content from '../3.works/content'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Chapter = ({i}) => {

    return (
        <div
            key={i.index}
            className={cn(
                'ms:pb-[120px] pb-[60px] last:pb-0'
            )}
        >
            <div className='w-full ms:flex justify-between pt-[25px]'>
                <div className='ms:flex xl:px-0 md:px-[40px] px-[15px]'>
                    <div className={cn(`w-[44px] h-[44px] ms:mr-[40px] ms:mb-0 mb-[30px]`)}>
                        <img src={content.icon[i.index]} alt="icon" />
                    </div>
                    <div>
                        <div className='relative flex'>
                            <div className='xs:w-[520px] md:w-[390px] w-[162px]'>
                                {content.title[i.index].map((item, index) => (
                                    <div key={index} className='ourProjectStyleTitle'>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div 
                                className={cn(
                                    `wrapperLine`,
                                    i.index === 0 ? 'md:h-[117px] md:w-[328px] h-[66px] w-[171px] md:top-[-40px] top-[-22px] md:left-[-15px] left-[-7px]' 
                                        : i.index === 1 ? 'md:h-[136px] md:w-[369px] h-[71px] w-[189px] md:top-[-15px] top-[-3px] md:left-[-20px] left-[-15px]' 
                                        : i.index === 2 ? 'md:h-[112px] md:w-[256px] h-[63px] w-[142px] md:top-[-40px] top-[-22px] left-[-15px]' : '',
                                )} 
                            >
                                <img src={content.style[i.index]} alt="" />
                            </div>
                        </div>
                        <div className='xl:w-[520px] xs:w-[390px] ms:w-[340px] w-[vw] pt-[30px]'>
                            {content.text[i.index].map((item, index) => (
                                <div key={index} className='worksTextStyle pb-[30px]'>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>        
                <div>
                    <div className='ms:px-0 md:px-[40px] px-[15px] font-otf-book not-italic font-normal text-c_red-regular text-[12px] leading-[14px] pb-[25px]'>
                        Примеры
                    </div>
                    <div className='ms:px-0 md:px-[40px] px-[15px] xl:w-[396px] xs:w-[350px] ms:w-[266px] ms:block md:flex hidden justify-between'>
                        {
                            content.examples.ex.Title[i.index].map((item, index) => (
                                <div key={index} className='pb-[25px] ms:w-full w-[250px]'>
                                    <div key={index} className='font-otfBold not-italic font-otf-bold text-[15px] leading-[18px] text-c_blue-deepDark pb-[10px]'>
                                        {item}
                                    </div>
                                    <div className='font-otf-book not-italic text-[15px] leading-[18px] text-c_blue-deepDarkOp'>
                                        {content.examples.ex.exText[i.index][index]}
                                    </div>
                                </div>    
                            ))
                        }
                    </div>
                    <Swiper
                        slidesPerView={"auto"} 
                        spaceBetween={30}
                        className="mx-0 w-screen md:hidden"
                    >
                        {
                            content.examples.ex.Title[i.index].map((item, index) => (
                                <SwiperSlide key={index} className='pb-[25px] w-[250px] ms:px-0 md:px-[40px] px-[15px]'>
                                    <div key={index} className='font-otfBold not-italic font-bold text-[15px] leading-[18px] text-c_blue-deepDark pb-[10px]'>
                                        {item}
                                    </div>
                                    <div className='font-otf-book not-italic text-[15px] leading-[18px] text-c_blue-deepDarkOp'>
                                        {content.examples.ex.exText[i.index][index]}
                                    </div>
                                </SwiperSlide>    
                            ))
                        }
                    </Swiper>    
                </div>
            </div>
        </div>
    )
}


export default Chapter