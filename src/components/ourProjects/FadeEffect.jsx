import {useEffect, useState, useRef} from 'react'
import { ourProjects } from '../content'
import cn from 'classnames'
import { Link } from "react-scroll"

const FadeEffect = ({i, fade, setFade, setOpen, lang}) => {    

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return ourProjects.ru
        else if(lan === 'рус') 
            return ourProjects.eng
    }
    const content = chooseLan(lang)

    return (
            <Link
                to={"hi"}
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}
                className='cursor-pointer w-full flex flex-col justify-between h-full'
                onClick={() => setOpen(true)}
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
                            {content.subTitle[i.index]}
                    </div>
                </div>
                <div 
                    className={ `${fade ? 'opacity-[0.9]' : 'opacity-[1]'} bg-white rounded-[15px] duration-500` }
                >
                    <div 
                        className={cn(
                            content.slide[i.index],
                            'w-full bg-center bg-contain bg-repeat-round rounded-[15px]',
                            'xs:h-[510px] md:h-[332px] h-[162px]'
                        )}
                    />  
                </div>
            </Link>    
    )

}

export default FadeEffect