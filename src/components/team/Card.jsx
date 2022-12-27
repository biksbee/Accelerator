import cn from 'classnames'
import content from './content';
import "swiper/css";

const Card = ({i, setFade, fade}) => {


    return (
                        <div
                            onMouseEnter={() => setFade(true)}
                            onMouseLeave={() => setFade(false)} 
                        >
                            <div>
                                <div>
                                    <div className={cn(
                                         !fade ? 'filter grayscale' :  'filter-none',
                                        'md:hidden block w-[150px] h-[150px] bg-repeat-round bg-center bg-contain mb-[20px]', 
                                        content.photo[i.index]
                                    )} />
                                </div>
                            </div>
                            <div className='pb-[10px]'>
                                <div className='text-c_gray-regular text-[20px] leading-[20px] '>
                                    {i.item}
                                </div>
                            </div>
                            <div className='h-[144px] mb-[20px]'>
                                <div className='text-c_gray-blur opacity-50 text-[16px] leading-[24px] md:w-[280px] w-[250px]'>
                                    {content.description[i.index]}
                                </div>
                            </div>
                            <div className={cn(
                                    !fade ? 'filter grayscale' :  'filter-none',
                                    'relative md:w-[284px] md:h-[373px] md:block hidden bg-no-repeat bg-center bg-contain photoRadius', 
                                    content.photo[i.index]
                                )}> 
                            </div>
                        </div>
    )
}

export default Card