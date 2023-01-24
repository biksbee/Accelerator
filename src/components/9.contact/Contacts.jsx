import { contact } from "../content"

const Contacts = ({lang}) => {

    const chooseLan = (lan) => {
        if(lan === 'eng')
            return contact.ru
        else if(lan === 'рус') 
            return contact.eng
    }
    const content = chooseLan(lang)   

    return (
        <div id="cont" className="w-full flex justify-center bg-c_blue-footer">
            <div className="xl:w-[1280px] w-full md:pt-[85px] pt-[90px] md:pb-[127px] pb-[90px] md:px-[40px] px-[15px]">
                <div className="md:pb-[98px] pb-[75px]">
                    <div className="startPageText text-c_blue-dark">
                        {content.mainTitle}
                    </div>
                </div>
                <div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[12px]">
                        <div className="contactText">
                            {content.blocks[0]}
                            <a href={content.links.here} className="contactLink md:ml-[10px] ml-[7px]" target="_blank">
                                {content.value[0]}
                            </a>
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[21px]">
                        <div className="contactText">
                            <div>{content.blocks[1]}</div>
                            <div className="xss:flex">
                                <div>
                                    <a href={content.links.mail} className="contactLink" target="_blank">
                                        {content.value[1]}
                                    </a>,
                                    <a href={content.links.telegram} className="contactLink ml-[10px]" target="_blank">
                                        {content.value[2]}
                                    </a>,
                                </div>
                                <div className="xss:flex ">       
                                        <a href={content.links.signal} className="contactLink xss:ml-[10px]" target="_blank">
                                            {content.value[3]}
                                        </a>   
                                </div>    
                            </div>
                                                        
                        </div>
                    </div>
                    <div className="border-t-[3px] border-t-c_blue-dark pt-[14px]">
                        <div className="contactText pb-0">
                            <div>{content.blocks[2]}</div>
                            <div className="sq:flex">
                                <a href={content.links.habr} className="contactLink md:text-[48px] text-[23px]" target="_blank">
                                    {content.value[4]}
                                </a>,
                                <a href={content.links.telegramChanel} className="contactLink ml-[10px]" target="_blank">
                                    <div className="m:hidden"></div>
                                    {content.value[5]}
                                </a>,
                            </div>  
                            <div className="flex">
                                <div>
                                    <a href={content.links.facebook} className="contactLink" target="_blank">
                                        {content.value[6]}
                                    </a>,
                                </div>
                                <div>
                                    <a href={content.links.linkedIn} className="contactLink s:ml-[10px]" target="_blank">
                                        {content.value[7]}
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