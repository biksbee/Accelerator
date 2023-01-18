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

    const [text, setText] = useState('')
    const refEl = useRef(null)

    // useEffect(() => {
    //     setText(content.subTitle[i.index] + '...' + '→')
    // }, [refEl])

    return (
        <Link 
            to={`${i.item}${i.index}`}
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
        >
            <div
                className='cursor-pointer'
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
                        ref={refEl}
                        id="subTitle" 
                        className={cn(
                            "ourProjectStyleSubTitle relative last_letter",
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
            </div>
        </Link>    
    )

}

export default FadeEffect