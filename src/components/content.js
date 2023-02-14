import privacy from '../assets/icon/Privacy.svg'
import access from '../assets/icon/Access.svg'
import legalTech from '../assets/icon/LegalTech.svg'
import wrapPrivacy from '../assets/icon/wrapPrivacy.svg'
import wrapAccess from '../assets/icon/wrapAccess.svg'
import wrapLegalTech from '../assets/icon/wrapLegalTech.svg'

//партнеры
import RosComFreedom from '../assets/icon/RosComFreedom.svg'
import Habr from '../assets/icon/Habr.svg'
import QratorLabs from '../assets/icon/QratorLabs.svg'
import Proton from '../assets/icon/Proton.svg'
import InformationCulture from '../assets/icon/infocult.webp'
import RussiaVenchur from '../assets/icon/RV.webp'
import CyberLaw from '../assets/icon/Cyberlaw.svg'
import Tor from '../assets/icon/tor.svg'
import Lantern from '../assets/icon/lantern.svg'


export const ourProjects = {
    slide: {
        0: `bg-slideAmnezia`, 
        1: `bg-slideGetSiteCopy`, 
        2: `bg-slideSelfPrivacy`, 
        3: `bg-slideEppie`, 
        4: `bg-slideSecurno`
    },
}

export const workContent = {
        icon: [privacy, access, legalTech],
        style: [wrapPrivacy, wrapAccess, wrapLegalTech],
        link: [
            [
                `https://selfprivacy.org/`,
                ``,
                `https://ru.amnezia.org/`
            ],
            [
                ``,
                `https://securno.org/`
            ],
            [
                `https://personalka.org/check`,
                ``
            ]
        ]   
}
export const deamhackHak = {
    deamhackRu: `https://Demhack.ru`,
    roskomSvoboda: `https://roskomsvoboda.org/`,
    youtube: `https://www.youtube.com/embed/fcpE89HuQ8Q`,
}

export const house = {
        seeAll: [
            `bg-SarkisDabrinyn`,
            `bg-EkaterinaAbashina`,
            `bg-MisbahSoloviev`,
            `bg-EkaterinaAbashina`,
            `bg-DmitrikNikolay`,
            `bg-ArtemIgnatenko`,
            `bg-IvanMikhailov`,
            `bg-AlexShevelev`,
            `bg-PleninDaniil`,
            `bg-BegtinIvan`,
            `bg-VladimirOjereliev`,
            `bg-orangeArrow`
        ],
        networking: {
            0: {
                networkingIcons: RosComFreedom,
                networkingLinks: `https://roskomsvoboda.org/`,
            },
            1: {
                networkingIcons: Habr,
                networkingLinks: `https://habr.com/`,
            },
            2: {
                networkingIcons: QratorLabs,
                networkingLinks: `https://qrator.net/ru/`,
            },
            3: {
                networkingIcons: Proton,
                networkingLinks: `https://proton.me/`,
            },
            4: {
                networkingIcons: InformationCulture,
                networkingLinks: `https://www.infoculture.ru/`,
            },
            5: {
                networkingIcons: RussiaVenchur,
                networkingLinks: `https://rusven.com/`,
            },
            6: {
                networkingIcons: CyberLaw,
                networkingLinks: `https://cyberlaw.center/`,
            },
            7: {
                networkingIcons: Tor,
                networkingLinks: `https://www.torproject.org/`,
            },
            8: {
                networkingIcons: Lantern,
                networkingLinks: `https://lantern.io/ru`
            },
            length: 9
        },
        networkingStepsPhoto: [
            `bg-helpFinance`,
            `bg-accessToTheMarket`,
            `bg-tracking`,
            `bg-lecture`, 
        ],
}