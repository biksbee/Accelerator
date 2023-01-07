import cn from 'classnames'
import content from './consultation/content'

const PopUpExperts = ({i, fade, setFade}) => {

    return (
        <div 
            className="border-t-c_gray-regular border-t-[2px] pt-[20px] md:w-[286px] w-[80vw] md:pb-0 pb-[60px]"
            onMouseEnter={() => setFade(true)}
            onMouseLeave={() => setFade(false)}
        >    
                                <div className=''>
                                    <div className={
                                        cn(
                                            !fade ? 'filter grayscale' :  'filter-none',
                                            'w-[150px] h-[150px] mb-[20px] md:hidden duration-500 bg-no-repeat bg-cover bg-center cardRadius',
                                            content.photo[i.index]
                                        )
                                    } />
                                </div>
                                <div className='pb-[10px]'>
                                    <div className='text-c_gray-regular text-[20px] leading-[20px] font-otf font-semibold not-italic'>
                                        {i.item}
                                    </div>
                                </div>
                                <div className={`mb-[20px]`}>
                                    <div className='text-c_gray-blur opacity-50 text-[16px] leading-[24px]'>
                                        {content.allDescription[i.index]}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className={
                                        cn(
                                            !fade ? 'filter grayscale' :  'filter-none',
                                            'md:w-[286px] md:h-[373px] md:flex hidden w-[150px] h-[150px] bg-no-repeat bg-cover bg-center photoRadius',
                                            content.photo[i.index]
                                        )
                                    } />
                                </div>
        </div>
    )
}

export default PopUpExperts