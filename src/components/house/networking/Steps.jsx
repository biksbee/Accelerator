import cn from 'classnames'
import { house } from '../../content'

import parenthesis from '../../../assets/icon/Parenthesis.svg'
import cornerUp from '../../../assets/icon/CornerUp.svg'
import cornerDown from '../../../assets/icon/CornerDown.svg'
import checkMark from '../../../assets/icon/CheckMark.svg'
import waveLine from '../../../assets/icon/WaveLine.svg'
import parenthesisMini from '../../../assets/icon/ParenthesisMini.svg'
import cornerUpMini from '../../../assets/icon/CornerUpMini.svg'
import cornerDownMini from '../../../assets/icon/CornerDownMini.svg'
import checkMarkMini from '../../../assets/icon/CheckMarkMini.svg'
import waveLineMini from '../../../assets/icon/WaveLineMini.svg'

const Steps = ({lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return house.ru
        else if(lan === 'ru') 
            return house.eng
    }
    const content = chooseLan(lang)


    return (
        <div className='w-full'>
                <div className='xs:flex justify-between'>
                    <div className='xs:mr-[50px]'>
                        <div className=''>
                            <div className="xm:mb-[100px] mb-[70px] xl:w-[472px] xs:w-[40vw] w-full border-t-[2px] pt-[31px] border-t-c_gray-regular">
                                <div className="relative mb-[17px] s:w-[330px] w-[90vw]">
                                    <div className={cn(
                                        "text-c_gray-regular md:text-[45px] md:leading-[43px] text-[22px] leading-[22px]",
                                        "font-otf-semiBold not-italic"
                                    )}>
                                        {content.networkingStepsTitle[0]}
                                    </div>
                                    <div className="absolute md:h-max md:top-[15px] top-0 md:left-[-20px] left-[-10px]">
                                        <img className='md:block hidden' src={parenthesis} alt="parenthesis" />
                                        <img className='md:hidden block' src={parenthesisMini} alt="parenthesis" />
                                    </div>
                                </div>
                                <div className='mb-[31px]'>
                                    <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otf-book not-italic font-normal text-c_gray-regular'>
                                        {content.networkingStepsDescription[0]}
                                    </div>
                                </div>
                                <div className='mb-[20px] relative flex w-max h-max '>
                                    <div className="absolute bg-c_blue-filterLayer w-full  z-[40] h-full duration-500 rounded-[10px]" />
                                    <div className={cn(
                                        content.networkingStepsPhoto[0],
                                        'bg-no-repeat bg-center bg-cover xl:w-[472px] xs:w-[40vw] w-[92vw] xl:h-[335px] md:h-[450px] mds:h-[300px] h-[200px] rounded-[10px]',
                                    )} />
                                </div>    
                            </div>
                        </div>
                        <div className=''>
                            <div className="xl:mt-[50px] xl:mb-0 mb-[70px] xl:w-[472px] xs:w-[40vw] w-full border-t-[2px] pt-[31px] border-t-c_gray-regular">
                                <div className="relative mb-[17px] s:w-[330px] w-[90vw]">
                                    <div className={cn(
                                        "text-c_gray-regular md:text-[45px] md:leading-[43px] text-[22px] leading-[22px]",
                                        "font-otf font-otf-semiBold not-italic"
                                    )}>
                                        {content.networkingStepsTitle[2]}
                                    </div>
                                    <div className="absolute md:top-[20px] top-0 md:right-[120px] right-[200px]">
                                        <img className='md:block hidden' src={checkMark} alt="checkMark" />
                                        <img className='md:hidden' src={checkMarkMini} alt="checkMark" />
                                    </div>
                                </div>
                                <div className='mb-[31px]'>
                                    <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otfNormal not-italic font-otf-book text-c_gray-regular'>
                                        {content.networkingStepsDescription[2]}
                                    </div>
                                </div>
                                <div className='mb-[20px] relative flex w-max h-max '>
                                    <div className="absolute bg-c_blue-filterLayer w-full  z-[40] h-full duration-500 rounded-[10px]" />
                                    <div className={cn(
                                        content.networkingStepsPhoto[2],
                                        'bg-no-repeat bg-center bg-cover xl:w-[472px] xs:w-[40vw] w-[92vw] xl:h-[335px] md:h-[450px] mds:h-[300px] h-[200px] rounded-[10px]',
                                    )} />
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div> 
                        <div className=''>
                            <div className="xl:mb-0 mb-[70px] xl:w-[570px] xs:w-[48vw] w-full border-t-[2px] pt-[31px] border-t-c_gray-regular">
                                <div className="relative mb-[17px] md:w-[430px] s:w-[330px] w-[90vw]">
                                    <div className={cn(
                                        "text-c_gray-regular md:text-[45px] md:leading-[43px] text-[22px] leading-[22px]",
                                        "font-otf font-otf-semiBold not-italic"
                                    )}>
                                        {content.networkingStepsTitle[1]}
                                    </div>
                                    <div className="absolute md:top-[-10px] top-[-10px] md:left-[-15px] left-[-10px]">
                                        <img className='md:block hidden' src={cornerUp} alt="cornerUp" />
                                        <img className='md:hidden block' src={cornerUpMini} alt="cornerUp" />
                                    </div>
                                    <div className="absolute md:bottom-[-10px] bottom-[-5px] md:right-[50px] right-[140px]">
                                        <img className='md:block hidden' src={cornerDown} alt="cornerDown" />
                                        <img className='md:hidden block' src={cornerDownMini} alt="cornerDown" />
                                    </div>
                                </div>
                                <div className='mb-[31px]'>
                                    <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otfNormal not-italic font-otf-book text-c_gray-regular'>
                                        {content.networkingStepsDescription[1]}
                                    </div>
                                </div>
                                <div className='mb-[20px] relative flex w-max h-max '>
                                    <div className="absolute bg-c_blue-filterLayer w-full  z-[40] h-full duration-500 rounded-[10px]" />
                                    <div className={cn(
                                        content.networkingStepsPhoto[1],
                                        'bg-no-repeat bg-center bg-cover xl:w-[570px] xs:w-[48vw] w-[92vw] xl:h-[335px] xs:h-[265px] md:h-[450px] mds:h-[300px] h-[200px] rounded-[10px]',
                                    )} />
                                </div>    
                            </div>
                        </div>
                        <div className=''>
                            <div className="xm:mt-[100px] mt-[70px] xl:w-[570px] xs:w-[48vw] w-full border-t-[2px] pt-[31px] border-t-c_gray-regular">
                                <div className="relative mb-[17px] md:pb-[7px] md:w-[530px] s:w-[330px] w-[90vw]">
                                    <div className={cn(
                                        "text-c_gray-regular md:text-[45px] md:leading-[43px] text-[22px] leading-[22px] pb-[7px]",
                                        "font-otf font-otf-semiBold not-italic"
                                    )}>
                                        {content.networkingStepsTitle[3]}
                                    </div>
                                    <div className="md:bottom-[-10px] bottom-0">
                                        <img className='md:block hidden' src={waveLine} alt="waveLine" />
                                        <img className='md:hidden' src={waveLineMini} alt="waveLine" />
                                    </div>
                                </div>
                                <div className='mb-[31px]'>
                                    <div className='md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] font-otfNormal not-italic font-otf-book text-c_gray-regular'>
                                        {content.networkingStepsDescription[3]}
                                    </div>
                                </div>
                                <div className='relative flex w-max h-max '>
                                    <div className="absolute bg-c_blue-filterLayer w-full  z-[40] h-full duration-500 rounded-[10px]" />
                                    <div className={cn(
                                        content.networkingStepsPhoto[3],
                                        'bg-no-repeat bg-center bg-cover xl:w-[570px] xs:w-[48vw] w-[92vw] xl:h-[335px] xs:h-[265px] md:h-[450px] mds:h-[300px] h-[200px] rounded-[10px]',
                                    )} />
                                </div>    
                            </div>
                        </div>
                    </div>    
                </div>       
        </div>
    )
}

export default Steps