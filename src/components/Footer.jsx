import PrivacyAcceleratorLogo from '../assets/icon/PrivacyAcceleratorLogo.svg'
import footer from '../assets/icon/Footer.svg'


const Footer = () => {

    return (
        <div className="w-full flex justify-center h-[87px] items-center bg-black">
            <div className="xl:w-[1280px] w-[90vw] ms:px-[40px] px-[15px] flex justify-between">
                <div>
                    <img src={PrivacyAcceleratorLogo} alt="" />
                </div>
                <a href="">
                    <div className='flex'>
                        <div className='pr-[20px]'>
                            <div className='underline opacity-[0.3] text-white font-otfNormal not-italic'>
                                Privacy Accelerator
                            </div>
                        </div>
                        <div>
                            <img src={footer} alt="" />
                        </div>
                    </div>
                </a>    
            </div>
        </div>
    )
} 

export default Footer