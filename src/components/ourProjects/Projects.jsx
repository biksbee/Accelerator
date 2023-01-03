import cn from 'classnames'
import content from "./content"

const Projects = () => {
    return (
        <div className="mds:pt-[50px] xl:w-[1000px] w-[90vw]">
            {content.title.map((item, index) => (
                <div 
                    key={index}
                    className="mds:pb-[150px] pb-[50px] text-c_blue-deepDark"
                >
                    <div 
                        className={cn(
                            content.slide[index],
                            'w-full bg-center bg-contain bg-no-repeat',
                            'xl:h-[610px] xs:h-[570px] ms:h-[450px] h-[332px] mds:mb-[30px]'
                        )}
                    />  
                    <div className="ourProjectStyleTitle mb-[30px]">
                        {item}
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse justify-between">
                        <div className='xl:w-[590px] xl:text-[22px] xl:leading-[33px] text-[16px] leading-[27px] font-otfNormal text-c_blue-deepDark'>
                            <div className='mb-[20px]'>
                                {content.description[index][0]}
                            </div>
                            <div>
                                {content.description[index][1]}
                            </div>
                        </div>
                        <div className='xl:block mds:flex xl:mt-0 mds:mt-[100px] mt-[50px] ml-[20px] pb-[50px] text-c_blue-deepDark'>
                            <div className='xl:mb-[40px] xl:mr-0 mr-[50px] mds:mb-0 mb-[30px]'>
                                <div className='text-[75px] leading-[75px] font-otfNormal'>
                                    {content.rightColumns[index][0]}
                                </div>
                                <div className='text-[16px] leading[24px] w-[285px]'>
                                    {content.rightColumns[index][1]}
                                </div>
                            </div>
                            <div>
                                <div className='text-[75px] leading-[75px] font-otfNormal'>
                                    {content.rightColumns[index][2]}
                                </div>
                                <div className='text-[16px] leading[24px] w-[285px]'>
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