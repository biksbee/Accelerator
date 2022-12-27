import StartPage from "./startPage/StartPage"
import OurProjects from "./ourProjects/OurProjects"
import Media from "./media/Media"
import Works from "./works/Works"
import Demhack from "./demhack/Demhack"
import MoreAccelerator from "./moreAccelerator/MoreAccelerator"
import House from "./house/House"
import Team from "./team/Team"
import Contacts from "./contact/Contacts"

const Body = () => {

    return (
        <div>
            <StartPage />
            <OurProjects />
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