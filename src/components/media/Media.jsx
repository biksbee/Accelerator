
import cn from 'classnames'

import RBK from '../../assets/icon/RBK.svg'
import KO from '../../assets/icon/KO.svg'
import TheBell from '../../assets/icon/TheBell.svg'
import VcRu from '../../assets/icon/VcRu.svg'
import RbRu from '../../assets/icon/RbRu.svg'


const Media = () => {

    return (
        <div className="w-full flex justify-center bg-c_purple-media">
            <div className='xl:w-[1280px] w-full relative overflow-hidden md:py-[120px] py-[90px]'>
                <div className='w-full flex justify-center xl:pb-[70px] pb-[40px]'>
                    <div className='startPageText text-c_gray-regular'>
                        Медиа о нас
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div 
                        className={cn(
                            'xl:w-[1280px] xl:px-[75px] xl:flex justify-center',
                            'w-[90vw] '
                        )}
                    >
                        <div className='flex justify-between xl:pb-0 pb-[30px]'>
                            <a href='' className='hover:opacity-60 active:hover-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={RBK} alt='RBK' />
                                </div>
                            </a>
                            <a href='' className='hover:opacity-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={KO} alt="KO" />
                                </div>
                            </a>
                            <a href='' className='hover:opacity-60 duration-500'>
                                <div className='iconMedia'>
                                    <img src={TheBell} alt="TheBell" />
                                </div>    
                            </a>                        
                        </div>
                        <div className='xl:w-max w-full flex justify-center'>
                            <div className='flex xl:justify-center justify-between xl:w-max w-[50vw]'>
                                <a href="" className='hover:opacity-60 duration-500'>
                                    <div className='iconMedia'>
                                        <img src={VcRu} alt="VcRu" />
                                    </div>
                                </a>
                                <a href="" className='hover:opacity-60 duration-500'>    
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