import cn from 'classnames'
import { house } from '../../content'
import { useTranslation} from 'react-i18next'

import networkingLine from '../../../assets/icon/NetworkingLine.svg'
import RosComFreedom from '../../../assets/icon/RosComFreedom.svg'
import Habr from '../../../assets/icon/Habr.svg'
import QratorLabs from '../../../assets/icon/QratorLabs.svg'
import Proton from '../../../assets/icon/Proton.svg'
import InformationCulture from '../../../assets/icon/infocult.png'
import RussiaVenchur from '../../../assets/icon/RussiaVenchur.svg'
import CyberLaw from '../../../assets/icon/Cyberlaw.svg'
import Tor from '../../../assets/icon/tor.svg'
import Lantern from '../../../assets/icon/lantern.svg'

const Networking = () => {
    const { t } = useTranslation()
    const content = house.ru
    const icon = [RosComFreedom, Habr, QratorLabs, Proton, InformationCulture, RussiaVenchur, CyberLaw, Tor, Lantern]

    return (
        <div className='md:my-[200px] mb-[80px]'> 
            <div className="ms:flex justify-between">
                <div className="relative mb-[17px]">
                    <div className={cn(
                        "text-c_gray-regular md:text-[45px] md:leading-[45px] text-[22px] leading-[22px]",
                        "font-otf-semiBold not-italic"
                    )}>
                        {t('house.networking')}
                    </div>
                    <div className="md:mt-[8px] mt-[5px] md:w-[279px] w-[132px]">
                        <img src={networkingLine} alt="networkingLine" />
                    </div>
                </div>
                <div className='md:w-[472px]'>
                <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book not-italic text-c_gray-regular'>
                        {t('house.networkingDescription')}
                    </div>
                </div>
            </div>
            <div className='ms:mt-[70px] mt-[40px]'>
                <div className='grid grid-cols-3 gap-[10px]'>
                    {
                        content.networkingLinks.map((item, index) => (
                            <div key={index} className={`flex justify-center items-center hover:opacity-50 duration-500 ${index === 4 ? 'md:h-[90px] h-[35px]' : null}`}>
                                <a href={item} target="_blank">
                                    <img src={icon[index]} alt={`${icon[index]}`} className={`${index === 4 ? 'md:w-[286px] w-[260px]' : null}`} />
                                </a>    
                            </div>        
                        ))
                    }
                </div>
                {/* <div className='flex justify-between mb-[25px]'>
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
                <div className='flex justify-between py-[25px]'>
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
                            <img src={RussiaVenchur} alt="RussiaVenchur"/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-between mt-[25px]'>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.networkingLinks[6]} target="_blank">
                            <img src={CyberLaw} alt="CyberLaw" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500 mx-[25px]'>
                        <a href={content.networkingLinks[7]} target="_blank">
                            <img src={Tor} alt="Tor" />
                        </a>
                    </div>
                    <div className='hover:opacity-50 duration-500'>
                        <a href={content.networkingLinks[8]} target="_blank">
                            <img src={Lantern} alt="Lantern" />
                        </a>
                    </div>
                </div> */}
            </div> 
        </div>
    )
}

export default Networking