

const Contacts = () => {

    return (
        <div id="cont" className="w-full flex justify-center bg-c_gray-regular">
            <div className="xl:w-[1280px] w-full md:pt-[89px] md:pb-[127px] py-[70px] md:px-[40px] px-[15px]">
                <div className="md:pb-[98px] pb-[70px]">
                    <div className="startPageText text-c_blue-dark">
                        Контакты
                    </div>
                </div>
                <div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[21px]">
                        <div className="contactText">
                            Подать заявку на вступление можно 
                            <a href="https://pd.roskomsvoboda.org/privacyaccelerator/" className="contactLink" target="_blank">
                                здесь
                            </a>
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[21px]">
                        <div className="contactText">
                            <div>Связаться с нами по всем остальным вопросам:</div>
                            <div>
                                <a href="mailto:team@privacyaccelerator.org" className="contactLink" target="_blank">
                                    почта,
                                </a>
                                <a href="https://t.me/privacyaccelerator_team?domain" className="contactLink" target="_blank">
                                    Telegram,
                                </a>    
                                <a href="" className="contactLink" target="_blank">
                                    Signal
                                </a>
                            </div>
                                                        
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[21px]">
                        <div className="contactText">
                            Следите за нами
                            <a href="" className="contactLink" target="_blank">
                                на Хабре,
                            </a>
                            <a href="" className="contactLink" target="_blank">
                                в Telegram-канале,
                            </a>
                            <a href="https://www.facebook.com/privacyaccelerator" className="contactLink" target="_blank">
                                Facebook,
                            </a> 
                            <a href="" className="contactLink" target="_blank">
                                LinkedIn
                            </a>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts