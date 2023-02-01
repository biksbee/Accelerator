import {useState, useEffect} from 'react'
import Slider from "./slider/slide"
import { ourProjects } from '../content'
import { useTranslation} from 'react-i18next'

const OurProjects = ({setGet, setLoc}) => {
    const { t } = useTranslation()
    const content = ourProjects.ru

    const [show, setShow] = useState(false)
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const [location, setLocation] = useState("")

    useEffect(() => {
        setGet(open)
        setLoc(location)
        
    }, [open])

    const getSend = (e) => {
        console.log(e)
    }

    return (
        <div id='ourProjects' className="w-full h-max flex justify-center overflow-hidden bg-c_blue-regular">
            <div className="md:pt-[120px] pt-[90px]">
                <div className=' w-full flex justify-center'>
                    <div className='relative xl:w-[1280px] w-full md:pl-[40px] pl-[15px]'>
                        <div className="pageTitle text-c_blue-dark">
                            {t('ourProjects.mainTitle')}
                        </div>
                        <div className="ourProjectsTheLoop"></div>
                    </div>
                </div>    
                <div className="w-[100vw] h-max md:pt-[222px] pt-[50px] pb-[100px]">
                    <Slider setShow={setShow} setActive={setActive} active={active} setOpen={setOpen} send={getSend} setLocation={setLocation}/>
                    <div className='w-full flex justify-center text-c_blue-dark pt-[30px]'>
                        <div className='xl:w-[1200px] w-full flex items-end xl:pl-0 md:pl-[40px] pl-[15px]'>
                            <div className='md:text-[50px] text-[20px] md:leading-[44px] leading-[18px] font-otf-semiBold not-italic'>
                                {active+1}
                            </div>
                            <div className='md:text-[20px] text-[13px] md:leading-[20px] leading-[13px] font-otf-semiBold not-italic'>
                                /{content.title.length}
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProjects