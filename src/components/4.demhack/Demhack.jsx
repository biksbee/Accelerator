import demhack from '../../assets/icon/Deamhack.svg'

const Demhack = () => {

    return (
        <div className="w-full flex justify-center bg-c_black-dark">
            <div className="xl:w-[1280px] w-[90vw] pt-[83px] pb-[111px] md:px-[40px] px-[15px]">
                <div className="ms:flex justify-between">
                    <div className="md:w-[539px] w-[290px] md:h-[112px] h-[60px]">
                        <img src={demhack} alt="" />
                    </div>
                    <div className='ms:text-right ms:pb-0 pb-[25px]'>
                        <a href='' >
                            <div className='text-[24px] leading-[23px] text-c_gray-primary'>
                                Хакатон
                            </div>
                            <div className='w-max text-[18px] leading-[25px] font-otf-normal not-italic text-c_orange-link duration-500 hover:opacity-50 border-b-[1px] border-c_orange-link_op'>
                                demhack.ru 🡽
                            </div>
                        </a>    
                    </div>
                </div>
                <div className='border-t-[2px] border-t-c_gray-line pt-[40px]'>
                    <div className='ms:flex justify-between'>
                        <div className='xl:w-[35vw] ms:w-[40vw] text-c_gray-regular md:text-[18px] md:leading-[25px] text-[15px] leading-[21px] font-otfNormal not-italic font-normal'>
                            <div className='pb-[20px]'>
                                С 2020 года <a href="" className='text-c_gray-regular w-max border-b-[1px] border-b-c_gray-light hover:opacity-50 duration-500'>Privacy Accelerator</a> и Роскомсвобода проводят хакатон Demhack дважды в год.
                            </div>
                            <div>
                                Цель хакатона — поддержка духа сообщества, создание площадки для взаимодействия и сотрудничества 
                                специалистов из разных стран, возможность реализовать свои идеи для блага людей по всему миру, 
                                защитить права на приватность и доступ к информации. А также мы собираем интересные идеи в формате 
                                заявок и задач на хакатон.
                            </div>     
                        </div>
                        <div className='ms:pt-0 pt-[20px] xl:w-[35vw] ms:w-[40vw] text-c_gray-regular md:text-[18px] md:leading-[25px] text-[15px] leading-[21px] font-otfNormal not-italic font-normal'>
                            <div className='pb-[20px]'>
                                После хакатона многие команды хотят продолжать работать над проектом. Мы принимаем решение о 
                                продолжении работы с проектом в рамках акселератора, основываясь на экспертных оценках и наблюдениях
                                за работой команд на хакатоне.
                            </div>
                            <div>    
                                Таким образом у нас получилось построить цепочку создания и развития проектов в области свободы интернета
                                и приватности от момента инициации идеи до выхода проекта на рынок. 
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pt-[51px]'>
                        {/* <YouTube 
                            
                            videoId="fcpE89HuQ8Q" 
                        /> */}
                        <iframe
                            className='xl:w-[1200px] w-[90vw] xl:h-[600px] ms:h-[500px] md:h-[400px] h-[300px]'
                            src="https://www.youtube.com/embed/fcpE89HuQ8Q"
                            allow="autoplay; encrypted-media"
                            title="video"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Demhack