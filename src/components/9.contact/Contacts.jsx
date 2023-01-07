

const Contacts = () => {

    return (
        <div id="cont" className="w-full flex justify-center bg-c_gray-regular">
            <div className="xl:w-[1280px] w-full md:pt-[85px] pt-[90px] md:pb-[127px] pb-[90px] md:px-[40px] px-[15px]">
                <div className="md:pb-[98px] pb-[75px]">
                    <div className="startPageText text-c_blue-dark">
                        Контакты
                    </div>
                </div>
                <div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[12px]">
                        <div className="contactText">
                            Подать заявку на вступление можно 
                            <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" className="contactLink ml-[10px]" target="_blank">
                                здесь
                            </a>
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[21px]">
                        <div className="contactText">
                            <div>Связаться с нами по всем остальным вопросам:</div>
                            <div className="m:flex">
                                <div>
                                    <a href="mailto:team@privacyaccelerator.org" className="contactLink" target="_blank">
                                        почта
                                    </a>,
                                    <a href="https://t.me/privacyaccelerator_team?domain" className="contactLink ml-[10px]" target="_blank">
                                        Telegram
                                    </a>,
                                </div>
                                <div className="s:flex">       
                                        <a href="" className="contactLink m:ml-[10px]" target="_blank">
                                            Signal
                                        </a>   
                                </div>    
                            </div>
                                                        
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[14px]">
                        <div className="contactText pb-0">
                            <div>Следите за нами:</div>
                            <div className="m:flex">
                                <a href="" className="contactLink md:text-[48px] text-[26px]" target="_blank">
                                    на Хабре
                                </a>,
                                <a href="" className="contactLink ml-[10px]" target="_blank">
                                    <div>в Telegram-канале,</div>
                                </a>
                            </div>  
                            <div className="s:flex">
                                <div>
                                    <a href="https://www.facebook.com/privacyaccelerator" className="contactLink" target="_blank">
                                        Facebook
                                    </a>,
                                </div>
                                <div>
                                    <a href="" className="contactLink s:ml-[10px]" target="_blank">
                                        LinkedIn
                                    </a>    
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts