import PrivacyAcceleratorLogo from '../assets/icon/PrivacyAcceleratorLogo.svg'
import footer from '../assets/icon/Footer.svg'


const Footer = () => {

    return (
        <div className="w-full flex justify-center items-center bg-black">
            <div className="xl:w-[1280px] w-[90vw] ms:px-[40px] px-[15px] flex justify-between">
                <div className='flex items-center mr-5'>
                    <img src={PrivacyAcceleratorLogo} alt="" />
                </div>
                <a href="">
                    <div className='md:flex my:mt-0 my-[23px]'>
                        <div className='md:flex hidden md:pr-[20px]'>
                            <div className='underline opacity-[0.3] text-white font-otfNormal not-italic'>
                                Privacy Accelerator
                            </div>
                        </div>
                        <div className='md:mb-0 mb-[5px]'>
                            <img src={footer} alt="" />
                        </div>
                        <div className='md:hidden md:pr-[20px]'>
                            <div className='underline opacity-[0.3] text-white font-otfNormal not-italic'>
                                Privacy Accelerator
                            </div>
                        </div>
                    </div>
                </a>    
            </div>
        </div>
    )
} 

export default Footer