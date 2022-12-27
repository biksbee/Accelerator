import {useState} from 'react'
import Slider from "./slider/slide"
import content from './content'

import PopUp from '../modules/popUp'
import Projects from './Projects'

const OurProjects = () => {

    const [show, setShow] = useState(false)
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const back = 'bg-c_yellow-light'

    return (
        <div id='ourProjects' className="w-full h-max flex justify-center bg-c_blue-regular">
            <div className="xl:w-[1280px] w-full md:pt-[120px] pt-[90px] md:pl-[40px] pl-[15px] relative">
                <div>
                    <div className="pageTitle text-c_blue-dark">
                        Наши проекты
                    </div>
                </div>
                <div className="ourProjectsTheLoop"></div>
                <div className="w-full h-max md:pt-[222px] pt-[50px] pb-[100px]">
                    <Slider setShow={setShow} setActive={setActive} setOpen={setOpen}/>
                    <div className='flex items-end text-c_blue-dark pt-[30px]'>
                        <div className='text-[40px] leading-[40px] font-otfBold font-semibold not-italic'>
                            {active+1}
                        </div>
                        <div className='text-[18px] font-otfBold font-semibold not-italic'>
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

export default OurProjects