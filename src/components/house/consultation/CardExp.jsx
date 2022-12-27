import { useEffect, useState, useRef } from "react"
import content from "./content"
import cn from 'classnames'
import HeightHook from "../../../hooks/heightHook"

const CardExp = ({i, fade, setFade, send, maxHeight}) => {

    const refComponent = useRef();
    const [arr, setArr] = useState([])

    // useEffect(() => {
    //     const h = refComponent.current.clientHeight
    //     // setArr({h})
    //     console.log(typeof h)
    // }, [refComponent])

    return (
                        <div
                            onMouseEnter={() => setFade(true)}
                            onMouseLeave={() => setFade(false)} 
                        >
                             <div className='pb-[10px]'>
                                <div className='text-c_gray-regular text-[20px] leading-[20px] '>
                                    {i.item}
                                </div>
                            </div>
                            <div ref={refComponent} className={`mb-[20px] h-[144px]`}>
                                <div className='text-c_gray-blur opacity-50 text-[16px] leading-[24px]'>
                                    {content.description[i.index]}
                                </div>
                            </div>
                            <div className=''>
                                <div className={
                                    cn(
                                        !fade ? 'filter grayscale' :  'filter-none',
                                        'md:w-[373px] h-[373px] bg-no-repeat bg-cover bg-center photoRadius',
                                        content.photo[i.index]
                                    )
                                } />
                            </div>
                        </div>
    )
}


export default CardExp