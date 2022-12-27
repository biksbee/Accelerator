import Chapter from "../modules/Chapter"
import content from "./content"


const Works = () => {

    return (
        <div id="work" className="w-full flex justify-center bg-c_gray-regular">
            <div className="xl:w-[1280px] w-full relative overflow-hidden md:px-[40px] px-[15px]">
                <div className="ms:py-[170px] py-[90px]">
                    <div className='startPageText text-c_blue-dark xl:w-[1024px] md:w-[700px] w-[319px] pb-[80px]'>
                        Направления работы, на которых мы специализируемся
                    </div>
                    <div>
                        {
                            content.title.map((item, index) => (
                                <Chapter key={index} i={{item, index}} />
                            ))
                        }       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works