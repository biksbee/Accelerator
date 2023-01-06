import {useState} from 'react'
import content from "../content"
import cn from 'classnames'


const FadeEffect = ({i, fade, setFade, setOpen, func}) => {
    return (
        <div>
            <div 
                className="md:flex justify-between pt-[20px] pb-[26px] cursor-pointer"  
                onClick={() => setOpen(true)}
                onMouseEnter={() => setFade(true)}
                onMouseLeave={() => setFade(false)} 
            >
                <div className="ourProjectStyleTitle">
                    {i.item}
                </div>
                <div 
                    id="subTitle" 
                    className={cn(
                        "ourProjectStyleSubTitle relative",                         
                    )}
                >
                        {content.subTitle[i.index]}
                        {i.index === 0 ? <div className='text-c_orange-regular absolute flex xl:bottom-[35px] xl:left-[90px] md:bottom-[15px] md:left-[90%] bottom-[46px] left-[75%]'>→</div> : null}
                </div>
            </div>
            <div 
                className={ "bg-white rounded-[15px] duration-500" }
                style = {{
                    opacity: func()
                }}    
            >
                <div 
                    className={cn(
                        content.slide[i.index],
                        'w-full bg-center bg-contain bg-repeat-round rounded-[15px]',
                        'xl:h-[510px] md:h-[332px] h-[162px]'
                    )}
                />  
            </div>
        </div>
    )

}

export default FadeEffect