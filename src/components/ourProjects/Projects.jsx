import cn from 'classnames'
import content from "./content"


const Projects = () => {
    return (
        <div className="pt-[50px] xl:w-[1000px] w-[90vw]">
            {content.title.map((item, index) => (
                <div 
                    key={index}
                    className="mds:pb-[150px] pb-[50px] text-c_blue-deepDark"
                >
                    <div 
                        id={`${item}${index}`}
                        className={cn(
                            content.slide[index],
                            'w-full bg-center bg-contain bg-no-repeat rounded-[15px]',
                            'xl:h-[510px] xs:h-[480px] ms:h-[450px] m:h-[332px] h-[168px] mds:mb-[30px]'
                        )}
                    />  
                    <div className="ourProjectStyleTitle mb-[30px] text-c_blue-dark font-otf-semiBold">
                        {item}
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse justify-between">
                        <div className='xl:w-[590px] xl:text-[22px] xl:leading-[33px] text-[16px] leading-[27px] font-otf-book text-c_blue-deepDark'>
                            <div className='mb-[20px]'>
                                {content.description[index][0]}
                            </div>
                            <div>
                                {content.description[index][1]}
                            </div>
                        </div>
                        <div className='xl:block mds:flex xl::mt-[100px] xl:ml-[20px] pb-[50px] text-c_blue-deepDark'>
                            <div className='xl:mb-[40px] xl:mr-0 mr-[50px] mds:mb-0 mb-[30px]'>
                                <div className='text-[75px] leading-[75px] font-otf-light mb-[5px]'>
                                    {content.rightColumns[index][0]}
                                </div>
                                <div className='text-c_blue-popUp text-[16px] leading[24px] w-[285px] font-otf-book'>
                                    {content.rightColumns[index][1]}
                                </div>
                            </div>
                            <div>
                                <div className='text-[75px] leading-[75px] font-otf-light mb-[5px]'>
                                    {content.rightColumns[index][2]}
                                </div>
                                <div className='text-c_blue-popUp text-[16px] leading[24px] w-[285px] font-otf-book'>
                                    {content.rightColumns[index][3]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[40px] border-b-[4px] border-b-[#171347] w-[100px]'>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects