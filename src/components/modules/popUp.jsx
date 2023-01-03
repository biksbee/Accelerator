import {useState} from 'react'
import close from "../../assets/icon/closePop.svg"
import cn from 'classnames'

const PopUp = ({setOpen, background, children}) => {
    
    const [fade, setFade] = useState(false)

    return (
        <div className={`${background} fixed top-0 z-[100] w-screen h-screen flex justify-center`}>
            <div>
                <div className="w-full flex justify-end items-center">
                    <div className="absolute top-0 right-0 w-[60px] h-[60px] flex items-center justify-center" onClick={() => setOpen(false)} onMouseEnter={() => setFade(true)} onMouseLeave={() => setFade(false)}>
                        <div 
                            className={`flex justify-center items-center ${!fade ? '' : 'scale-[.85]'} duration-500`}>
                            <img className={!fade ? "flex" : 'flex filter grayscale'} src={close} alt="close" />
                        </div>
                    </div>
                </div>
                <div className="xl:px-[140px] px-[50px] h-full w-screen customScroll flex justify-center mb-[100px] overflow-y-scroll">
                    {children}
                </div>
            </div>    
        </div>
    )
}

export default PopUp