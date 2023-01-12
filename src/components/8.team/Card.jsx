import cn from 'classnames'
import { team } from '../content';
import "swiper/css";

const Card = ({i, setFade, fade, lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return team.ru
        else if(lan === 'рус') 
            return team.eng
    }
    const content = chooseLan(lang)


    return (
                        <div
                            onMouseEnter={() => setFade(true)}
                            onMouseLeave={() => setFade(false)} 
                        >
                            <div>
                                <div className='relative flex w-max h-max mb-[20px]'>
                                    <div className="absolute bg-c_blue-filterLayer w-full z-[40] h-full duration-500 cardRadius" />
                                    <div className={cn(
                                         !fade ? 'filter grayscale' :  'filter-none',
                                        'md:hidden block w-[150px] h-[150px] duration-500 bg-no-repeat bg-center bg-cover cardRadius', 
                                        content.photo[i.index]
                                    )} />
                                </div>
                            </div>
                            <div className='pb-[10px]'>
                                <div className='text-c_gray-blur font-otf-semiBold text-[20px] leading-[20px] '>
                                    {content.name[i.index]}
                                </div>
                            </div>
                            <div className='mb-[20px] h-[144px]'>
                                <div className='text-c_gray-blur opacity-50 font-otf-normal text-[16px] leading-[20px] md:w-[280px]'>
                                    {content.description[i.index]}
                                </div>
                            </div>
                            <div className='relative flex w-max h-max '>
                                <div className="absolute bg-c_blue-filterLayer w-full z-[40] h-full duration-500 photoRadius" />
                                <div className={cn(
                                    !fade ? 'filter grayscale' :  'filter-none',
                                    'relative md:w-[284px] md:h-[373px] md:block hidden duration-500 bg-no-repeat bg-center bg-contain photoRadius', 
                                    content.photo[i.index]
                                )}> 
                                </div>
                            </div>    
                        </div>
    )
}

export default Card