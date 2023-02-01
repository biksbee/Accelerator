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


const Body = ({setOpen, setLocation}) => {


    const [get, setGet] = useState(false)
    const [loc, setLoc] = useState("")

    useEffect(() => {
        setOpen(get)
        setLocation(loc)
    }, [get])

    return (
        <div className="overflow-hidden">
            <StartPageNew />
            <OurProjects setGet={setGet} setLoc={setLoc}/>
            <Media />
            <Works />
            <Demhack />
            <MoreAccelerator />
            <House />
            <Team />
            <Contacts />
        </div>
    )
} 

export default Body