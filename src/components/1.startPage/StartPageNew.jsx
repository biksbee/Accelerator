import cn from 'classnames'
const StartPageNew = () => {

    return(
        <div id='startPage' className='w-full flex justify-center md:h-[1024px] h-[90vh] bg-c_purple-header'>
            <div className={cn(
                'xl:w-[1280px] w-full relative overflow-hidden',
                'md:pt-[177px] pt-[100px]'
            )}>
                <div className='xl:w-[766px] xl:pl-[40px] xl:px-0 px-[15px]'>
                        <div className='startPageText text-c_gray-regular'>
                            Помогаем запускать 
                        </div>
                        <div className='startPageText text-c_gray-regular flex'>
                            качественные продукты  
                        </div>
                        <div className='startPageText s:flex'>
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
                <div className="relative w-full flex cb justify-end items-end">
                    <div className='absolute w-max h-max bottom-0'>
                        <div className='relative xs:w-[552px] xs:h-[661px] md:w-[400px] md:h-[480px]'>
                                <div className='trapezoidCorner'></div>
                                <div className='startProjects'></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartPageNew