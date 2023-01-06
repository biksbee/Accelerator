import { useEffect, useState, useRef } from "react"
import content from "./content"
import cn from 'classnames'

const CardExp = ({i, fade, setFade}) => {

    const refComponent = useRef();

    return (
                        <div
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
                                <div className='text-c_gray-regular font-otf-semiBold text-[20px] leading-[20px] '>
                                    {i.item}
                                </div>
                            </div>
                            <div ref={refComponent} className={`mb-[20px] ${i.index < 3 ? 'h-[144px]' : 'xl:h-[120px] h-[144px]'}`}>
                                <div className='text-c_gray-regular opacity-50 text-[16px] leading-[24px] font-otf-normal not-italic'>
                                    {content.description[i.index]}
                                </div>
                            </div>
                            <div className=''>
                                <div className={
                                    cn(
                                        !fade ? 'filter grayscale' :  'filter-none',
                                        'md:w-[373px] h-[373px] md:block hidden duration-500 bg-no-repeat bg-cover bg-center photoRadius',
                                        content.photo[i.index]
                                    )
                                } />
                            </div>
                        </div>
    )
}


export default CardExp