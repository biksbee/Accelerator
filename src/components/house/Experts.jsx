import cn from 'classnames'


import content from "./consultation/content"



const Experts = () => {
    return (
        <div className="xl:mt-[90px] mt-[40px] text-[#D2DCFF]">
            <div className="xl:pb-[60px] pb-[30px]">
                <div className="xl:w-[900px] xl:text-[60px] text-[30px] xl:leading-[60px] leading-[30px] font-bold not-italic">
                    Эксперты<br/> Privacy Accelerator
                </div>
            </div>
            <div className="flex justify-center">
                <div className="md:grid xl:grid-cols-3 md:grid-cols-2 gap-[35px] md:w-full w-max">
                    {
                        content.name.map((item, index) => (
                            <div key={index} className="border-t-c_gray-regular border-t-[2px] pt-[20px] md:w-[286px] w-[80vw] md:pb-0 pb-[60px]">
                                <div className='pb-[10px]'>
                                    <div className='text-c_gray-regular text-[20px] leading-[20px] font-otf font-semibold not-italic'>
                                        {item}
                                    </div>
                                </div>
                                <div className={`mb-[20px]`}>
                                    <div className='text-c_gray-blur opacity-50 text-[16px] leading-[24px]'>
                                        {content.allDescription[index]}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className={
                                        cn(
                                            // !fade ? 'filter grayscale' :  'filter-none',
                                            'w-[286px] h-[373px] bg-no-repeat md:bg-cover bg-contain bg-center photoRadius',
                                            content.photo[index]
                                        )
                                    } />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experts