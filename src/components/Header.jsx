import {useState} from 'react'
import cn from 'classnames'
import { Link } from "react-scroll"
import LiHeaderModule from './modules/LiHeaderModule'

import logo from '../assets/icon/PrivacyAcceleratorLogo.svg'
import logoPrivacyAccelerator from '../assets/icon/LogoPrivacyAccelerator.svg'
import home from '../assets/icon/House.svg'
import burgerMenu from '../assets/icon/BurgerMenu.svg'
import close from '../assets/icon/close.svg'

const Header = () => {

    const [show, setShow] = useState(true)
    const [open, setOpen] = useState(false)
    

    const showNav = () => {
        const heightWindow = window.screen.height+200
        const scrollCur = window.pageYOffset;
        if(scrollCur > heightWindow)
            setShow(true)
        else    
            setShow(false)
        if(scrollCur == 0)
            setShow(true)
    }
    window.addEventListener('scroll', showNav)

    const menuElements = ['Проекты', 'Как мы работаем', 'Команда', 'Контакты']

    return (
        <div id='header' className={cn(
            'w-full h-max fixed flex z-[99] justify-center',
            show ? 'ms:mt-[10px] duration-500' : 'ms:opacity-0 duration-200'
        )}>
            <div className={cn(
                'w-[1240px] ms:h-[77px] h-[50px] px-[20px] flex justify-between items-center ms:rounded-[26px] bg-c_purple-header ms:mx-[20px]'
            )}>
                <div className=''>
                    <Link 
                        className='flex w-[98px] justify-between' 
                        to="startPage" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                    >
                        <img src={logo} alt="logo" className='ms:block hidden'/>
                        <img src={home} alt="home" className='ms:hidden w-[27.4px] h-[34.3px]' />
                        <img src={logoPrivacyAccelerator} alt="logoPrivacyAccelerator" 
                            className={cn(
                                'mr-[8px] ms:hidden', 
                                open ? 'visible' : 'hidden')} 
                        />
                    </Link>    
                </div>
                <ul 
                    className={cn(
                        'menuUl ms:top-0',
                        open ? 'top-[49px] opacity-[1] ms:pt-0 pt-[40px]' : 'top-[-100vh] ms:opacity-[1] opacity-0',
                        show ? '' : ''
                    )}
                >
                    {
                        menuElements.map((item, index) => (
                            <div key={index} className={'w-full flex justify-center'}>
                                <LiHeaderModule item={item} index={index} openLi={open} setOpenLi={setOpen}/>
                            </div>
                        ))
                    }
                    <div 
                        className='w-full flex justify-center' 
                        onClick={() => setOpen(!open)}
                    >
                        <li 
                            className={cn(
                                'menuLi s:w-[330px] justify-center w-[80vw] h-[49px] ms:hidden flex items-center',
                                'px-[15px] hover:bg-c_gray-light hover:rounded-[6px] hover:duration-500'
                            )}
                        >
                            Eng
                        </li>
                    </div>
                    <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" target="_blank">
                        <div 
                            className='w-full flex justify-center ms:hidden'
                            onClick={() => setOpen(!open)}        
                        >
                            <div 
                                className={cn(
                                    'bg-c_orange-regular hover:bg-c_orange-hover duration-300 active:bg-c_orange-pressed flex justify-center items-center rounded-[6px]',
                                    'w-[162px] h-[41px] mt-[43px]',
                                )}
                            >
                                <div className={cn('buttonText text-[18px] leading-[18px]')}>
                                    Подать заявку
                                </div>
                            </div>
                        </div>
                    </a>    
                </ul>
                <div className='flex'>
                    <div className={cn(
                            'ms:visible hidden mr-[40px] ms:flex items-center',
                            'px-[15px] hover:bg-c_gray-light hover:rounded-[6px] hover:duration-500'
                        )}>
                        <div className='menuLi'>
                            Eng
                        </div>
                    </div>
                    <div>
                        <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" target="_blank">
                            <div 
                                className={cn(
                                    !open ? 'opacity-[1] duration-300' : 'ms:opacity-[1] opacity-0 duration-300',
                                    'buttonMenu'
                                )}
                            >
                                <div className={cn(
                                    'cn buttonText text-[13px] leading-[13px]'
                                )}>
                                    Подать заявку
                                </div>
                            </div>
                        </a>    
                    </div>
                    <div className='ms:hidden ml-[20px]' onClick={() => setOpen(!open)}>
                        <div className='w-[35px] h-[35px]'>
                            <img src={!open ? burgerMenu : close} alt="menuIcon" />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Header