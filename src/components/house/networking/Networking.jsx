import cn from 'classnames'
import content from "./content"

import networkingLine from '../../../assets/icon/NetworkingLine.svg'
import RosComFreedom from '../../../assets/icon/RosComFreedom.svg'
import Habr from '../../../assets/icon/Habr.svg'
import QratorLabs from '../../../assets/icon/QratorLabs.svg'
import Proton from '../../../assets/icon/Proton.svg'
import InformationCulture from '../../../assets/icon/InformationCulture.svg'
import RussiaVenchur from '../../../assets/icon/RussiaVenchur.svg'

const Networking = () => {

    return (
        <div className='md:mb-[250px] mb-[150px]'> 
            <div className="ms:flex justify-between">
                <div className="relative mb-[17px]">
                    <div className={cn(
                        "text-c_gray-regular md:text-[45px] md:leading-[45px] text-[22px] leading-[22px]",
                        "font-otf font-normal not-italic"
                    )}>
                        {content.title}
                    </div>
                    <div className="mt-[8px] md:w-[279px] w-[132px]">
                        <img src={networkingLine} alt="networkingLine" />
                    </div>
                </div>
                <div className='md:w-[472px]'>
                <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otfNormal not-italic font-normal text-c_gray-regular'>
                        {content.description}
                    </div>
                </div>
            </div>
            <div className='mt-[70px]'>
                <div className='flex justify-between md:mb-[51px]'>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.links[0]}>
                            <img src={RosComFreedom} alt="RosComFreedom" />
                        </a>    
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.links[1]}>
                            <img src={Habr} className='h-[90px]' alt="Habr" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.links[2]}>
                            <img src={QratorLabs} alt="QratorLabs" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.links[3]}>
                            <img src={Proton} alt="Proton" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.links[4]}>
                            <img src={InformationCulture} alt="InformationCulture" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.links[5]}>
                            <img src={RussiaVenchur} alt="RussiaVenchur" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Networking