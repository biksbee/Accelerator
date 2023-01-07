import cn from 'classnames'
const StartPageNew = () => {

    return(
        <div id='startPage' className='w-full flex justify-center md:h-[1024px] h-[90vh] bg-c_purple-header'>
            <div className={cn(
                'xl:w-[1280px] w-full relative overflow-hidden',
                'md:pt-[177px] pt-[100px]'
            )}>
                <div className='relative xl:w-[766px] xl:pl-[40px] xl:px-0 px-[15px]'>
                    <div className='absolute z-[50]'>
                        <div className='startPageText text-c_gray-regular'>
                            Помогаем запускать 
                        </div>
                        <div className='startPageText text-c_gray-regular flex'>
                            качественные продукты  
                        </div>
                        <div className='startPageText s:flex'>
                            <div className='text-c_gray-regular md:mr-[16px] mr-[8px]'>
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
                <div className="absolute bottom-0 right-0">
                    <div className='relative xl:w-[552px] xl:h-[661px] md:w-[475px] md:h-[590px] s:w-[252px] s:h-[302px] w-[150px] h-[200px]'>
                        <div className='trapezoidCorner'></div>
                        <div className='startProjects'></div>
                    </div>
                    <div className='startPageTheLoop'></div>
                </div>   
            </div>
        </div>
    )
}

export default StartPageNew