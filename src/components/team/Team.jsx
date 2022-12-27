import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import Card from './Card';

import content from './content';

const Team = () => {

    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)
    const [fade2, setFade2] = useState(false)
    const [fade3, setFade3] = useState(false)

    const fade = [fade0, fade1, fade2, fade3]
    const setFade = [setFade0, setFade1, setFade2, setFade3]

    return (
        <div id='team' className="w-full flex justify-center bg-c_blue-moreDark">
            <div className="xl:w-[1280px] w-full md:px-[40px] px-[15px]">
                <div className="w-full flex ms:justify-center md:py-[150px] py-[60px]">
                    <div className="startPageText ms:text-center text-c_gray-regular ms:w-[650px] w-[230px]">
                        Команда Акселератора
                    </div>
                </div>
                <div className='pb-[80px]'>
                    <Swiper
                        slidesPerView={"auto"} 
                        spaceBetween={30}
                    >
                        {content.name.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className='cursor-pointer border-t-c_gray-regular border-t-[2px] md:w-[284px] w-[250px] pt-[20px] pb-[80px]'
                            >
                            
                                <Card i={{item, index}} fade={fade[index]} setFade={setFade[index]} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='text-c_gray-regular md:pb-[189px] pb-[90px]'>
                    <div className='md:text-[48px] md:leading-[67px] text-[22px] leading-[30px] pb-[10px]'>
                        В 2020 году
                    </div>
                    <div className='md:flex'>
                        <div className='md:w-[588px] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px] md:mr-[20px]'>
                            <div className='pb-[20px]'>
                                команда 
                                <a 
                                    href="https://roskomsvoboda.org/" 
                                    className='border-b-[1px] border-b-white opacity-70 hover:opacity-[1] active:opacity-[1] mx-[10px]'
                                >
                                    Роскомсвободы
                                </a>
                                запустила акселератор для поддержки инициатив в сферах приватности и анонимности, доступа к информации и свободы слова, электронного участия, развития ценностей цифрового гражданства, защиту прав и реализацию интересов граждан в цифровой среде. 
                            </div>
                            <div>
                                Политическая и интернет-цензура в Российской Федерации неуклонно усиливается с 2012 года, достигнув пика в 2022 году. В ответ мы видим все больший запрос в обществе на сервисы для защиты данных и свободы интернета.
                            </div>        
                        </div>
                        <div className='md:w-[588px] md:text-[22px] md:leading-[30px] text-[15px] leading-[21px]'>
                            <div className='pb-[20px]'>
                                Так например в 2022 году Россия переместилась с 15 места в мире по скачиванию VPN-сервисов на 2-е (с 2-3 млн до 12 млн. скачиваний). 
                            </div>
                            <div>
                                В Privacy Accelerator мы стремимся решить эти проблемы, запуская большее количество качественных проектов в сфере приватности и свободы интернета, а также повышая значимость проблем защиты данных, развивая интерес к теме среди разработчиков и предпринимателей. История Рунета за 10 лет: https://x.roskomsvoboda.org
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team