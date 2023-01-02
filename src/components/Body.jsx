import StartPageNew from "./1.startPage/StartPageNew"
import OurProjectsNew from "./ourProjects/OurProjectsNew"
import Media from "./media/Media"
import Works from "./3.works/Works"
import Demhack from "./4.demhack/Demhack"
import MoreAccelerator from "./moreAccelerator/MoreAccelerator"
import House from "./house/House"
import Team from "./8.team/Team"
import Contacts from "./9.contact/Contacts"

const Body = () => {

    return (
        <div>
            <StartPageNew />
            <OurProjectsNew />
            <Media />
            <Works />
            <Demhack />
            <MoreAccelerator />
            {/* <House /> */}
            <Team />
            <Contacts />
        </div>
    )
} 

export default Body