import arrow from '../../assets/icon/OrangeArrow.svg'

const StartPage = () => {

    return(
        <div id='startPage' className='w-full flex justify-center md:h-[1024px] h-[643px] bg-c_purple-header'>
            <div className='xl:w-[1280px] w-full relative overflow-hidden xl:pl-0 xs:pl-[40px] md:pl-[79px] pl-[15px]'>
                <div className='xl:pt-[177px] md:pt-[130px] pt-[100px]'>
                    <div className='xl:w-[766px] xl:ml-[40px]'>
                        <div className='startPageText text-c_gray-regular'>
                            Помогаем запускать 
                        </div>
                        <div className='startPageText text-c_gray-regular xl:flex md:block flex'>
                            <div>качественные</div>
                            <div>продукты</div>  
                        </div>
                        <div className='startPageText xl:flex md:block flex'>
                            <div className='text-c_gray-regular mr-[16px]'>
                                в сфере
                            </div>
                            <div className='text-c_orange-regular'>
                                приватности
                            </div>
                        </div>
                        <div className='startPageText text-c_orange-regular xl:flex md:block flex'>
                            <div>и свободы</div>
                            <div>интернета</div>
                        </div>
                    </div>
                </div>
                <div className='trapezoidCorner'></div>
                <div className='startPageTheLoop'></div>
                <div className='startProjects'></div>
                <div className='absolute bottom-[110px] left-[110px] md:block hidden'>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}

export default StartPage