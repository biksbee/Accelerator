import {useState} from "react"
import { house } from "../../content"
import cn from 'classnames'

const CardExp = ({i, fade, setFade, lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return house.ru
        else if(lan === 'ru') 
            return house.eng
    }
    const content = chooseLan(lang)


    return (
                        <div
                            className=""
                            onMouseEnter={() => setFade(true)}
                            onMouseLeave={() => setFade(false)} 
                        >
                            <div className=''>
                                <div className='mb-[20px] relative flex w-max h-max '>
                                    <div className="absolute filterLayer w-full  z-[40] h-full duration-500 cardRadius" />
                                        <div className={
                                            cn(
                                                !fade ? 'filter grayscale ' :  'filter-none',
                                                'w-[150px] h-[150px] md:hidden duration-500 bg-no-repeat bg-cover bg-center cardRadius',
                                                content.experts[i.index].photo
                                            )
                                        } />
                                </div>    
                            </div>
                            <div className='pb-[10px]'>
                                <div className='text-c_gray-regular font-otf-semiBold text-[20px] leading-[20px] '>
                                    {content.experts[i.index].name}
                                </div>
                            </div>
                            <div className={`mb-[20px] ${i.index < 3 ? 'xl:h-[144px] xs:h-[190px] h-[144px]' : 'xl:h-[120px] xs:h-[160px] h-[144px]'}`}>
                                <div className='text-[#D2DCFF] opacity-50 text-[16px] leading-[24px] font-otf-normal not-italic'>
                                    {content.experts[i.index].description}
                                </div>
                            </div>
                            <div className='md:block hidden'>
                                <div className='relative flex w-max h-max '>
                                    <div className="absolute bg-c_blue-filterLayer w-full  z-[40] h-full duration-500 photoRadius" />
                                    <div className={
                                        cn(
                                            !fade ? 'filter grayscale' :  'filter-none',
                                            'xl:w-[373px] xs:w-[28vw] xl:h-[373px] xs:h-[333px] w-[373px] h-[373px] md:block hidden duration-500 bg-no-repeat bg-cover bg-center photoRadius',
                                            content.experts[i.index].photo
                                        )
                                    } />
                                </div>    
                            </div>
                        </div>
    )
}


export default CardExp