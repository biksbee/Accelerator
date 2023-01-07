import {useState} from 'react'
import cn from 'classnames'
//
import PopUpExperts from './PopUpExperts'
import content from "./consultation/content"


const Experts = () => {

    const [fade0, setFade0] = useState(false)
    const [fade1, setFade1] = useState(false)
    const [fade2, setFade2] = useState(false)
    const [fade3, setFade3] = useState(false)
    const [fade4, setFade4] = useState(false)    
    const [fade5, setFade5] = useState(false)
    const [fade6, setFade6] = useState(false)    

    const fade = [fade0, fade1, fade2, fade3, fade4, fade5, fade6]
    const setFade = [setFade0, setFade1, setFade2, setFade3, setFade4, setFade5, setFade6]

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
                            <PopUpExperts key={index} i={{index, item}} fade={fade[index]} setFade={setFade[index]} />         
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experts