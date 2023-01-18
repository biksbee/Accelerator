import cn from 'classnames'
import { house } from '../content'
//
const PopUpExperts = ({i, fade, setFade, lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return house.ru
        else if(lan === 'рус') 
            return house.eng
    }
    const content = chooseLan(lang)

    return (
        <div 
            className="border-t-c_gray-regular border-t-[2px] pt-[20px] md:w-[286px] w-[80vw] md:pb-0 pb-[60px] md:last:mb-[80px] last:mb-[40px]"
            onMouseEnter={() => setFade(true)}
            onMouseLeave={() => setFade(false)}
        >    
                                <div className=''>
                                    <div className='relative flex w-max h-max mb-[20px]'>
                                        <div className="absolute bg-c_blue-filterLayer w-full z-[40] h-full duration-500 cardRadius" />
                                        <div className={
                                            cn(
                                                !fade ? 'filter grayscale' :  'filter-none',
                                                'w-[150px] h-[150px] md:hidden duration-500 bg-no-repeat bg-cover bg-center cardRadius',
                                                content.experts[i.index].photo
                                            )
                                        } />
                                    </div>    
                                </div>
                                <div className='pb-[10px]'>
                                    <div className='text-c_gray-regular text-[20px] leading-[20px] font-otf font-semibold not-italic'>
                                        {content.experts[i.index].name}
                                    </div>
                                </div>
                                <div className={`mb-[20px] md:h-[192px]`}>
                                    <div className='text-c_gray-blur opacity-50 text-[16px] leading-[24px] font-otf-normal'>
                                        {content.experts[i.index].allDescription}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='relative flex w-max h-max '>
                                        <div className="absolute bg-c_blue-filterLayer w-full z-[40] h-full duration-500 photoRadius" />        
                                        <div className={
                                            cn(
                                                !fade ? 'filter grayscale' :  'filter-none',
                                                'md:w-[286px] md:h-[373px] md:flex hidden w-[150px] h-[150px] bg-no-repeat bg-cover bg-center photoRadius',
                                                content.experts[i.index].photo
                                            )
                                        } />
                                    </div>    
                                </div>
        </div>
    )
}

export default PopUpExperts