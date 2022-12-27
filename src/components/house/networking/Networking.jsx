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
                        "text-c_gray-regular md:text-[45px] leading-[65px] text-[22px] md:leading-[42px]",
                        "font-otf font-normal not-italic"
                    )}>
                        {content.title}
                    </div>
                    <div className="mt-[8px]">
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
                    <div>
                        <img src={RosComFreedom} alt="RosComFreedom" />
                    </div>
                    <div>
                        <img src={Habr} alt="Habr" />
                    </div>
                    <div>
                        <img src={QratorLabs} alt="QratorLabs" />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <img src={Proton} alt="Proton" />
                    </div>
                    <div>
                        <img src={InformationCulture} alt="InformationCulture" />
                    </div>
                    <div>
                        <img src={RussiaVenchur} alt="RussiaVenchur" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Networking