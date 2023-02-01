import {useEffect, useState, useRef} from 'react'
import { ourProjects } from '../content'
import cn from 'classnames'
import { useTranslation} from 'react-i18next'


const FadeEffect = ({i, fade, setFade, setOpen, setLocation}) => {    
    const { t } = useTranslation()
    const content = ourProjects.ru

    const href = ['Amnezia', 'Get site copy', 'Self Privacy', 'Eppie', 'Securno']

    const openFunc = () => {
        setOpen(true)
        setLocation(href[i.index])
    }

    return (
            <div
                // to={i.index === 0 ? "qwerty" : href[i.index]}
                // spy={true} 
                // smooth={true} 
                // offset={1000} 
                // duration={500}
                className='cursor-pointer w-full flex flex-col justify-between h-full'
                onClick={openFunc}
                onMouseEnter={() => setFade(true)}
                onMouseLeave={() => setFade(false)} 
            >
                <div 
                    className="md:flex justify-between pt-[20px] pb-[26px] cursor-pointer"  
                >
                    <div className="ourProjectStyleTitle">
                        {i.item}
                    </div>
                    <div 
                        id="subTitle" 
                        className={cn(
                            "ourProjectStyleSubTitle relative last_letter flex_features",
                        )}
                    >
                            {t(`ourProjects.subTitle.${i.index}`)}
                    </div>
                </div>
                <div 
                    className={ `${fade ? 'opacity-[0.9]' : 'opacity-[1]'} bg-white rounded-[15px] duration-500` }
                >
                    <div 
                        className={cn(
                            t(`ourProjects.slide.${i.index}`),
                            'w-full bg-center bg-contain bg-repeat-round rounded-[15px]',
                            'xs:h-[510px] md:h-[332px] h-[162px]'
                        )}
                    />  
                </div>
            </div>    
    )

}

export default FadeEffect