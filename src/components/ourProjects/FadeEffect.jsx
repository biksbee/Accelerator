import {useEffect, useState} from 'react'
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

    useEffect(() => {
        console.log(content.subTitle)
        // let a = content.description[i.index].split(' ')
        // for(let i in a) 
            // console.log(i)
    }, [])

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
                        id="subTitle" 
                        className={cn(
                            "ourProjectStyleSubTitle relative", 
                            // content.subTitle[i.index].split('....') === '→'  ? 'text-c_orange-regular ' : ''                         
                        )}
                    >
                            {content.subTitle[i.index]}

                            {/* <span 
                                className={cn(
                                    'text-c_orange-regular flex ',
                                    'absolute xl:bottom-[35px] xl:left-[90px] md:bottom-[15px] md:left-[90%] bottom-[-3px] left-[75%]' 
                                )}
                            >
                                →
                            </span> */}
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