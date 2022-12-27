import {useState, useEffect} from 'react'
import cn from 'classnames'
import { Link } from "react-scroll"
import LiHeaderModule from './modules/LiHeaderModule'

import logo from '../assets/icon/PrivacyAcceleratorLogo.svg'
import logoPrivacyAccelerator from '../assets/icon/LogoPrivacyAccelerator.svg'
import home from '../assets/icon/House.svg'
import burgerMenu from '../assets/icon/BurgerMenu.svg'
import close from '../assets/icon/close.svg'

const Header = () => {

    const [open, setOpen] = useState(false)

    const menuElements = ['Проекты', 'Как мы работаем', 'Команда', 'Контакты']

    return (
        <div className={cn('w-full h-max fixed flex z-[10000] justify-center')}>
            <div className='w-[1240px] h-[77px] px-[20px] flex justify-between items-center ms:rounded-[26px] bg-c_purple-header'>
                <div className=''>
                    <Link 
                        className='flex w-[108px] justify-between' 
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
                        open ? 'top-[74px]' : 'top-[-100vh]'
                    )}
                >
                    {
                        menuElements.map((item, index) => (
                            <LiHeaderModule key={index} item={item} index={index} openLi={open} setOpenLi={setOpen}/>
                        ))
                    }
                    <div 
                        className='w-full flex justify-center' 
                        onClick={() => setOpen(!open)}
                    >
                        <li 
                            className={cn(
                                'menuLi w-max h-[49px] ms:hidden flex items-center',
                                'px-[10px] hover:bg-c_gray-light hover:rounded-[6px] hover:duration-300'
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
                                    'bg-c_orange-regular hover:bg-c_orange-hover active:bg-c_orange-pressed flex justify-center items-center rounded-[6px]',
                                    'w-[162px] h-[41px] mt-[43px]',
                                    'drop-shadow-default hover:drop-shadow-hover'
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
                    <div className='ms:visible hidden mr-[40px] ms:flex items-center'>
                        <div className='menuLi'>
                            Eng
                        </div>
                    </div>
                    <div>
                        <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" target="_blank">
                            <div 
                                className={cn(
                                    !open ? 'opacity-[1] duration-500' : 'ms:opacity-[1] opacity-0 duration-500',
                                    'buttonMenu'
                                )}
                            >
                                <div className={cn('cn buttonText text-[13px] leading-[13px]')}>
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