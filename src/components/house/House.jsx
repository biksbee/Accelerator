import {useState} from 'react'

import home from '../../assets/icon/House.svg'

import Consultation from './consultation/consultation'
import Networking from './networking/Networking'
import Steps from './networking/Steps'
import PopUp from '../modules/popUp'
import Experts from './Experts'

const back ='bg-[#404864]'

const House = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="w-full flex justify-center gradientBackGround">
            <div className="xl:w-[1280px] w-full md:py-[120px] py-[90px] md:pl-[40px] pl-[15px]">
                <div className='w-full flex justify-center xl:py-[200px] py-[100px]'>
                    <div className='startPageText text-c_gray-regular md:w-[700px] w-[330px]'>
                            <div className='w-full flex'>
                                <div className='h-max'>Вот, что</div>
                                <div className='md:mx-[20px] mx-[10px] md:w-[44px] w-[25px] md:h-[55px] h-[30px]'><img src={home} alt="home" /></div>
                                <div className='h-max'>может дать</div>
                            </div>    
                            <div className='w-full text-center'>вашему проекту</div>
                    </div>
                </div>
                <div>
                    <Consultation setOpen={setOpen}/>
                </div>
                <div className='mt-[200px] pt-[30px] border-t-[2px] border-t-c_gray-regular xl:w-[1200px] w-[90vw]'>
                    <Networking />
                    <div className='xl:block flex justify-center w-full'>
                        <Steps />
                    </div>
                </div>
            </div>
            {open ? 
                <PopUp setOpen={setOpen} background={back}>
                    <Experts />
                </PopUp>
                : 
            null}
        </div>
    )
}

export default House