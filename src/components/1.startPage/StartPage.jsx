const StartPage = () => {

    return(
        <div id='startPage' className='w-full flex justify-center md:h-[1024px] h-[90vh] bg-c_purple-header'>
            <div className='xl:w-[1280px] w-full relative overflow-hidden xl:pl-0 xs:pl-[40px] md:pl-[79px] pl-[15px]'>
                <div className='xl:pt-[177px] md:pt-[130px] pt-[100px]'>
                    <div className='xl:w-[766px] xl:ml-[40px]'>
                        <div className='startPageText text-c_gray-regular'>
                            Помогаем запускать 
                        </div>
                        <div className='startPageText text-c_gray-regular flex'>
                            качественные продукты  
                        </div>
                        <div className='startPageText flex'>
                            <div className='text-c_gray-regular mr-[16px]'>
                                в сфере
                            </div>
                            <div className='text-c_orange-regular'>
                                приватности
                            </div>
                        </div>
                        <div className='startPageText text-c_orange-regular xl:flex md:block flex'>
                            и свободы интернета
                        </div>
                    </div>
                </div>
                <div className="relative cb h-full w-full flex justify-end">
                    <div className='relative xs:w-[552px] xs:h-[661px] md:w-[400px] md:h-[480px]'>
                        <div className='trapezoidCorner'></div>
                        <div className='startProjects'></div>
                    </div>
                    <div className='startPageTheLoop'></div>
                </div>        
            </div>
        </div>
    )
}

export default StartPage