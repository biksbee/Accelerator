import cn from 'classnames'

import RBK from '../../assets/icon/RBK.svg'
import KO from '../../assets/icon/KO.svg'
import TheBell from '../../assets/icon/TheBell.svg'
import VcRu from '../../assets/icon/VcRu.svg'
import RbRu from '../../assets/icon/RbRu.svg'

import { useTranslation} from 'react-i18next'

const Media = () => {
    const { t } = useTranslation()

    const links = [
        'https://www.rbc.ru/',
        'https://ko.ru/',
        'https://thebell.io/',
        'https://vc.ru/',
        'https://rb.ru/'
    ]

    return (
        <div className="w-full flex justify-center bg-c_purple-media">
            <div className='xl:w-[1280px] w-full relative overflow-hidden md:py-[120px] py-[90px]'>
                <div className='w-full flex justify-center xl:pb-[70px] md:pb-[70px] pb-[40px]'>
                    <div className='startPageText text-c_gray-regular'>
                        {t('media.title')}
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div 
                        className={cn(
                            '',
                            'xl:w-[1280px] xl:px-[75px] xs:flex justify-center',
                            'md:w-[90vw] mds:w-[60vw] w-[90vw]'
                        )}
                    >
                        <div className='xs:w-[60%] flex justify-between xl:pb-0 xs:mb-0 mb-[40px]'>
                            <a href={links[0]} target="_blank" className='hover:opacity-60 active:hover-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={RBK} alt='RBK' />
                                </div>
                            </a>
                            <a href={links[1]} target="_blank" className='hover:opacity-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={KO} alt="KO" />
                                </div>
                            </a>
                            <a href={links[2]} target="_blank" className='hover:opacity-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={TheBell} alt="TheBell" />
                                </div>    
                            </a>                        
                        </div>
                        <div className='xl:w-max xs:w-[40%] w-full flex justify-center '>
                            <div className='flex xl:justify-center justify-between xl:w-max md:w-[50vw] mds:w-[40vw] w-[55vw]'>
                                <a href={links[3]} target="_blank" className='w-[50%] flex justify-center hover:opacity-60 duration-500'>
                                    <div className='iconMedia md:w-[158px] md:h-[59px]  w-[48px] h-[35px]'>
                                        <img src={VcRu} alt="VcRu" />
                                    </div>
                                </a>
                                <a href={links[4]} target="_blank" className='w-[50%] flex justify-center hover:opacity-60 duration-500'>    
                                    <div className='iconMedia'>
                                        <img src={RbRu} alt="RbRu" />
                                    </div>
                                </a>    
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media