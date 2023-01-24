import cn from 'classnames'
import { ourProjects } from "../content"
import {useEffect, useState, useRef, createRef} from 'react'
import {Link} from 'react-scroll'


const Projects = ({lang, loc}) => {

    const messagesEndRef = createRef(null)
    const anchorRef = useRef()

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return ourProjects.ru
        else if(lan === 'рус') 
            return ourProjects.eng
    }
    const content = chooseLan(lang)
    
    useEffect(() => {
        console.log(messagesEndRef.current.id)
        if(messagesEndRef.current.id === loc){
            anchorRef.current = messagesEndRef.current.id
            console.log(messagesEndRef.current.id)
        }
        console.log(anchorRef.current?.id)
        anchorRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [loc]);

    

    return (
        <div className="pt-[50px] xs:w-[1000px] w-[90vw]">
            {content.title.map((item, index) => (
                <div
                    key={index}
                    id={item} 
                    ref={messagesEndRef}
                    className="mds:pb-[150px] pb-[50px] text-c_blue-deepDark"
                >
                    <div 
                        className={cn(
                            content.slide[index],
                            'w-full bg-center ds:bg-cover bg-contain bg-no-repeat rounded-[15px]',
                            'xs:h-[510px] ms:h-[450px] md:h-[400px] mds:h-[350px] ds:h-[300px] m:h-[202px] h-[158px] mds:mb-[30px]'
                        )}
                    />  
                    <div className="ourProjectStyleTitle pb-0 my-[30px] text-c_blue-dark font-otf-semiBold">
                        {item}
                    </div>
                    <div className="flex xs:flex-row flex-col-reverse justify-between">
                        <div className='xl:w-[590px] md:text-[22px] md:leading-[33px] text-[15px] leading-[18px] font-otf-book text-c_blue-deepDark'>
                            <div className='mb-[20px]'>
                                {content.description[index][0]}
                            </div>
                            <div>
                                {content.description[index][1]}
                            </div>
                        </div>
                        <div className={cn(
                            'xs:block  flex xs:ml-[40px]',
                            content.rightColumns[index][0] !== undefined || content.rightColumns[index][1] !== undefined ? 'xs:pb-0 pb-[30px]' : null
                        )}>
                            <div className=' xs:mb-[40px] xs:mr-0 mr-[30px] mds:mb-0 mb-[30px]'>
                                <div className='md:text-[75px] text-[28px] md:leading-[75px] leading-[28px] font-otf-light text-c_blue-deepDark mb-[5px]'>
                                    {content.rightColumns[index][0]}
                                </div>
                                <div className='text-c_blue-popUp md:text-[16px] text-[13px] md:leading-[24px] leading-[16px] md:w-[285px] w-[41vw] font-otf-book'>
                                    {content.rightColumns[index][1]}
                                </div>
                            </div>
                            <div>
                                <div className='md:text-[75px] text-[28px] md:leading-[75px] leading-[28px] font-otf-light text-c_blue-deepDark mb-[5px]'>
                                    {content.rightColumns[index][2]}
                                </div>
                                <div className='text-c_blue-popUp md:text-[16px] text-[13px] md:leading-[24px] leading-[16px] md:w-[285px] w-[41vw] font-otf-book'>
                                    {content.rightColumns[index][3]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[40px] border-b-[4px] border-b-[#171347] w-[100px]'>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects