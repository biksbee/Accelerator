import {useState} from 'react'
import Slider from "./slider/slide"
import content from './content'

import PopUp from '../modules/popUp'
import Projects from './Projects'

const OurProjectsNew = () => {

    const [show, setShow] = useState(false)
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const back = 'bg-c_yellow-light'

    const getSend = (e) => {
        console.log(e)
    }

    return (
        <div id='ourProjects' className="w-full h-max flex justify-center overflow-hidden bg-c_blue-regular">
            <div className="md:pt-[120px] pt-[90px] relative">
                <div className='relative xl:w-[1280px] w-full flex justify-center xl:pl-0 md:pl-[40px] pl-[15px]'>
                    <div className='flex'>
                        <div className="pageTitle text-c_blue-dark">
                            Наши проекты
                        </div>
                    </div>
                    <div className="ourProjectsTheLoop"></div>
                </div>
                <div className="w-full md:pt-[222px] pt-[50px] pb-[100px]">
                    <Slider setShow={setShow} setActive={setActive} setOpen={setOpen} send={getSend}/>
                    <div className='flex items-end text-c_blue-dark pt-[30px]'>
                        <div className='text-[50px] leading-[44px] font-otf-semiBold not-italic'>
                            {active+1}
                        </div>
                        <div className='text-[20px] leading-[19px] font-otf-semiBold not-italic'>
                            /{content.title.length}
                        </div>
                    </div>
                </div>
            </div>
            {open ? 
                <PopUp setOpen={setOpen} background={back}>
                    <Projects />
                </PopUp>
                 : 
            null}
        </div>
    )
}

export default OurProjectsNew