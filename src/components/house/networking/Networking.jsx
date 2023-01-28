import cn from 'classnames'
import { house } from '../../content'

import networkingLine from '../../../assets/icon/NetworkingLine.svg'
import RosComFreedom from '../../../assets/icon/RosComFreedom.svg'
import Habr from '../../../assets/icon/Habr.svg'
import QratorLabs from '../../../assets/icon/QratorLabs.svg'
import Proton from '../../../assets/icon/Proton.svg'
import InformationCulture from '../../../assets/icon/infocult.png'
import RussiaVenchur from '../../../assets/icon/RussiaVenchur.svg'

const Networking = ({lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'en')
            return house.ru
        else if(lan === 'рус') 
            return house.en
    }
    const content = chooseLan(lang)


    return (
        <div className='md:my-[200px] mb-[80px]'> 
            <div className="ms:flex justify-between">
                <div className="relative mb-[17px]">
                    <div className={cn(
                        "text-c_gray-regular md:text-[45px] md:leading-[45px] text-[22px] leading-[22px]",
                        "font-otf-semiBold not-italic"
                    )}>
                        {content.networking}
                    </div>
                    <div className="md:mt-[8px] mt-[5px] md:w-[279px] w-[132px]">
                        <img src={networkingLine} alt="networkingLine" />
                    </div>
                </div>
                <div className='md:w-[472px]'>
                <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book not-italic text-c_gray-regular'>
                        {content.networkingDescription}
                    </div>
                </div>
            </div>
            <div className='ms:mt-[70px] mt-[40px]'>
                <div className='flex justify-between md:mb-[51px] mb-[25px]'>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.networkingLinks[0]} target="_blank">
                            <img src={RosComFreedom} alt="RosComFreedom" />
                        </a>    
                    </div>
                    <div className='hover:opacity-50 duration-500 mx-[25px]'>
                        <a href={content.networkingLinks[1]} target="_blank">
                            <img src={Habr} alt="Habr" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.networkingLinks[2]} target="_blank">
                            <img src={QratorLabs} alt="QratorLabs" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-between mt-[25px]'>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.networkingLinks[3]} target="_blank">
                            <img src={Proton} alt="Proton" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500 md:h-[90px] h-[35px] mx-[25px]'>
                        <a href={content.networkingLinks[4]} target="_blank">
                            <img src={InformationCulture} alt="InformationCulture" className='md:w-[286px] w-[260px]'/>
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.networkingLinks[5]} target="_blank">
                            <img src={RussiaVenchur} alt="RussiaVenchur" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Networking