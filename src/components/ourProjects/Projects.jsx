import cn from 'classnames'
import { ourProjects } from "../content"
import {useEffect, useState, useRef, createRef} from 'react'
import { useTranslation} from 'react-i18next'

const Projects = ({loc}) => {
    const { t } = useTranslation()
    const messagesEndRef0 = useRef(null)
    const messagesEndRef1 = useRef(null)
    const messagesEndRef2 = useRef(null)
    const messagesEndRef3 = useRef(null)
    const messagesEndRef4 = useRef(null)


    const content = ourProjects.ru
    
    useEffect(() => {
        if(loc === messagesEndRef0.current.id)
            messagesEndRef0.current?.scrollIntoView({})
        else if(loc === messagesEndRef1.current.id)
            messagesEndRef1.current?.scrollIntoView({})
        else if(loc === messagesEndRef2.current.id)
            messagesEndRef2.current?.scrollIntoView({})
        else if(loc === messagesEndRef3.current.id)
            messagesEndRef3.current?.scrollIntoView({})
        else if(loc === messagesEndRef4.current.id)
            messagesEndRef4.current?.scrollIntoView({inline: "nearest"})
    }, [loc]);

    

    return (
        <div 
            
            className="pt-[30px] xs:w-[1000px] w-[90vw]">
            {t('ourProjects.title').split(', ').map((item, index) => (
                <div
                    key={index}
                    id={item} 
                    ref={index === 0 ? messagesEndRef0 : index === 1 ? messagesEndRef1 : index === 2 ? messagesEndRef2 : index === 3 ? messagesEndRef3 : index === 4 ? messagesEndRef4 : null}
                    className="pt-[20px] mds:pb-[120px] pb-[30px] last:mds:pb-[150px] last:pb-[50px] text-c_blue-deepDark"
                >
                    <div 
                        className={cn(
                            t(`ourProjects.slide.${index}`),
                            'w-full bg-center bg-cover bg-no-repeat rounded-[15px]',
                            'xs:h-[510px] ms:h-[450px] md:h-[400px] mds:h-[350px] ds:h-[300px] m:h-[202px] h-[158px] mds:mb-[30px]'
                        )}
                    />  
                    <div className="ourProjectStyleTitle pb-0 my-[30px] text-c_blue-dark font-otf-semiBold">
                        {item}
                    </div>
                    <div className="flex xs:flex-row flex-col-reverse justify-between">
                        <div className={cn(
                            'md:text-[22px] md:leading-[33px] text-[15px] leading-[18px] font-otf-book text-c_blue-deepDark',
                            t(`ourProjects.rightColumns.${index}.0`) !== '' || t(`ourProjects.rightColumns.${index}.1`) !== '' ? 'xl:w-[590px]' : ''                              
                        )}>
                            <div className='mb-[20px]'>
                                {t(`ourProjects.description.${index}.0`)}
                            </div>
                            <div>
                                {t(`ourProjects.description.${index}.1`)}
                            </div>
                        </div>
                        {
                            t(`ourProjects.rightColumns.${index}.0`) !== '' || 
                            t(`ourProjects.rightColumns.${index}.1`) !== '' || 
                            t(`ourProjects.rightColumns.${index}.2`) !== '' ||
                            t(`ourProjects.rightColumns.${index}.3`) !== '' ? 
                                <div className={cn(
                                    'xs:block  flex xs:ml-[40px]',
                                    t(`ourProjects.rightColumns.${index}.0`) !== '' || t(`ourProjects.rightColumns.${index}.1`) !== '' ? 'xs:pb-0 pb-[30px]' : null
                                )}>
                                    <div className=' xs:mb-[40px] xs:mr-0 mr-[30px] mds:mb-0 mb-[30px]'>
                                        <div className='md:text-[75px] text-[28px] md:leading-[75px] leading-[28px] font-otf-light text-c_blue-deepDark mb-[5px]'>
                                            {t(`ourProjects.rightColumns.${index}.0`) !== '' ? t(`ourProjects.rightColumns.${index}.0`) : null}
                                        </div>
                                        <div className='text-c_blue-popUp md:text-[16px] text-[13px] md:leading-[24px] leading-[16px] md:w-[285px] w-[41vw] font-otf-book'>
                                        {t(`ourProjects.rightColumns.${index}.1`) !== '' ? t(`ourProjects.rightColumns.${index}.1`) : null}
                                        </div>
                                    </div>
                                    <div>
                                        <div className='md:text-[75px] text-[28px] md:leading-[75px] leading-[28px] font-otf-light text-c_blue-deepDark mb-[5px]'>
                                        {t(`ourProjects.rightColumns.${index}.2`) !== '' ? t(`ourProjects.rightColumns.${index}.2`) : null}
                                        </div>
                                        <div className='text-c_blue-popUp md:text-[16px] text-[13px] md:leading-[24px] leading-[16px] md:w-[285px] w-[41vw] font-otf-book'>
                                        {t(`ourProjects.rightColumns.${index}.3`) !== '' ? t(`ourProjects.rightColumns.${index}.3`) : null}
                                        </div>
                                    </div>
                                </div>
                            :
                            null    
                        }
                    </div>
                    <div className='mt-[40px] border-b-[4px] border-b-[#171347] w-[100px]'>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects