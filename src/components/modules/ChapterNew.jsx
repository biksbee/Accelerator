import cn from 'classnames'
import content from '../content'
// import content from '../3.works/content'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

SwiperCore.use([Keyboard, Mousewheel]);

const ChapterNew = ({i}) => {

    return (
        <div className='xl:w-[1280px] w-full ms:flex justify-between'>
            <div className='ms:flex pt-[30px] md:mx-[40px] mx-[15px]'>
                <div className={cn(`w-[44px] h-[44px] ms:mr-[40px] ms:mb-0 mb-[30px]`)}>
                    <img src={content.icon[i.index]} alt="icon" />
                </div>
                <div>
                    <div className='relative'>
                        <div className='xs:w-[520px] md:w-[390px] w-[170px]'>
                            {content.title[i.index].map((item, index) => (
                                <div key={index} className='not-italic font-otf-semiBold text-c_blue-dark
                                md:text-[45px] text-[23px] md:leading-[43px] leading-[21px]'>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div 
                            className={cn(
                                `wrapperLine`,
                                i.index === 0 ? 'md:h-[117px] md:w-[328px] h-[66px] w-[171px] md:top-[-50px] top-[-22px] md:left-[-15px] left-[-7px]' 
                                    : i.index === 1 ? 'md:h-[136px] md:w-[369px] h-[71px] w-[189px] md:top-[-20px] top-[-10px] md:left-[-20px] left-[-15px]' 
                                    : i.index === 2 ? 'md:h-[112px] md:w-[256px] h-[63px] w-[142px] md:top-[-45px] top-[-22px] left-[-15px]' : '',
                            )} 
                        >
                            <img src={content.style[i.index]} alt="" />
                        </div>
                    </div>    
                    <div className='xl:w-[520px] xs:w-[390px] ms:w-[340px] w-[90vw] pt-[20px]'>
                        {content.text[i.index].map((item, index) => (
                            <div key={index} className='worksTextStyle pb-[30px]'>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='ms:pt-[25px]'>
                <div className='ms:pl-0 md:pl-[40px] pl-[15px] font-otf-book not-italic font-normal text-c_red-regular text-[12px] leading-[14px] pb-[25px]'>
                    Примеры
                </div>
                <div className='ms:pl-0 md:pl-[40px] pl-[15px] xl:w-[396px] ms:w-[266px] w-full  ms:block md:flex hidden justify-between'>
                    {
                        content.examples.ex.Title[i.index].map((item, index) => (
                            <a key={index} href={content.link[i.index][index]} className='ms:pr-0 pr-[20px]'>
                                <div  className='pb-[25px] xl:w-[396px] ms:w-[300px]'>
                                    <div key={index} className='not-italic font-otf-bold text-[15px] leading-[18px] text-c_blue-deepDark pb-[7px]'>
                                        {item}
                                    </div>
                                    <div className='font-otf-book not-italic text-[15px] leading-[18px] text-c_blue-deepDarkOp'>
                                        {content.examples.ex.exText[i.index][index]}
                                    </div>
                                </div>
                            </a>           
                        ))
                    }
                </div>
                <Swiper
                    slidesPerView={"auto"} 
                    spaceBetween={30}
                    keyboard={true}
                    //mousewheel={true}
                    className="mx-0 w-screen md:hidden"
                >
                    {
                        content.examples.ex.Title[i.index].map((item, index) => (
                            <a key={index} href={content.link[i.index][index]} target="_blank">
                                <SwiperSlide key={index} className='pb-[25px] w-[250px] ms:px-0 md:px-[40px] px-[15px] mr-0'>
                                    <div key={index} className='font-otf-bold not-italic text-[15px] leading-[18px] text-c_blue-deepDark pb-[7px]'>
                                        {item}
                                    </div>
                                    <div className='font-otf-book not-italic text-[15px] leading-[18px] text-c_blue-deepDarkOp'>
                                        {content.examples.ex.exText[i.index][index]}
                                    </div>
                                </SwiperSlide>
                            </a>          
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ChapterNew