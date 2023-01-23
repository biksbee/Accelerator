import {useState, useEffect} from 'react'
import StartPageNew from "./1.startPage/StartPageNew"
import OurProjects from "./ourProjects/OurProjects"
import Media from "./media/Media"
import Works from "./3.works/Works"
import Demhack from "./4.demhack/Demhack"
import MoreAccelerator from "./moreAccelerator/MoreAccelerator"
import House from "./house/House"
import Team from "./8.team/Team"
import Contacts from "./9.contact/Contacts"


const Body = ({lang, setLang, setOpen, setLocation}) => {


    const [get, setGet] = useState(false)
    const [loc, setLoc] = useState("")

    useEffect(() => {
        setOpen(get)
        setLocation(loc)
    }, [get])

    return (
        <div className="overflow-hidden">
            <StartPageNew lang={lang} setLang={setLang}/>
            <OurProjects lang={lang} setLang={setLang} setGet={setGet} setLoc={setLoc}/>
            <Media lang={lang} setLang={setLang} />
            <Works lang={lang} setLang={setLang} />
            <Demhack lang={lang} setLang={setLang} />
            <MoreAccelerator lang={lang} setLang={setLang} />
            <House lang={lang} setLang={setLang} />
            <Team lang={lang} setLang={setLang} />
            <Contacts lang={lang} setLang={setLang} />
        </div>
    )
} 

export default Body