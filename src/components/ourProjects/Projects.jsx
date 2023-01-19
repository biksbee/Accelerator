import cn from 'classnames'
import { ourProjects } from "../content"


const Projects = ({lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return ourProjects.ru
        else if(lan === 'рус') 
            return ourProjects.eng
    }
    const content = chooseLan(lang)

    return (
        <div className="pt-[50px] xs:w-[1000px] w-[90vw]">
            {content.title.map((item, index) => (
                <div 
                    key={index}
                    id={index === 4 ? 'hi' : null}
                    className="mds:pb-[150px] pb-[50px] text-c_blue-deepDark"
                >
                    <div 
                        className={cn(
                            content.slide[index],
                            'w-full bg-center ds:bg-cover bg-contain bg-no-repeat rounded-[15px]',
                            'xs:h-[510px] ms:h-[450px] md:h-[400px] mds:h-[320px] ds:h-[270px] m:h-[202px] h-[128px] mds:mb-[30px]'
                        )}
                    />  
                    <div className="ourProjectStyleTitle my-[30px] text-c_blue-dark font-otf-semiBold">
                        {item}
                    </div>
                    <div className="flex xs:flex-row flex-col-reverse justify-between">
                        <div className='xl:w-[590px] xl:text-[22px] xl:leading-[33px] text-[15px] leading-[18px] font-otf-book text-c_blue-deepDark'>
                            <div className='mb-[20px]'>
                                {content.description[index][0]}
                            </div>
                            <div>
                                {content.description[index][1]}
                            </div>
                        </div>
                        <div className='xs:block mds:flex xs::mt-[100px] xs:ml-[40px] pb-[50px]'>
                            <div className='xs:mb-[40px] xs:mr-0 mr-[50px] mds:mb-0 mb-[30px]'>
                                <div className='md:text-[75px] text-[28px] md:leading-[75px] leading-[28px] font-otf-light text-c_blue-deepDark mb-[5px]'>
                                    {content.rightColumns[index][0]}
                                </div>
                                <div className='text-c_blue-popUp md:text-[16px] text-[13px] md:leading-[24px] leading-[16px] m:w-[285px] w-[90vw] font-otf-book'>
                                    {content.rightColumns[index][1]}
                                </div>
                            </div>
                            <div>
                                <div className='md:text-[75px] text-[28px] md:leading-[75px] leading-[28px] font-otf-light text-c_blue-deepDark mb-[5px]'>
                                    {content.rightColumns[index][2]}
                                </div>
                                <div className='text-c_blue-popUp md:text-[16px] text-[13px] md:leading-[24px] leading-[16px] m:w-[285px] w-[90vw] font-otf-book'>
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