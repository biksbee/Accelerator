import privacy from '../../assets/icon/Privacy.svg'
import access from '../../assets/icon/Access.svg'
import legalTech from '../../assets/icon/LegalTech.svg'
import wrapPrivacy from '../../assets/icon/wrapPrivacy.svg'
import wrapAccess from '../../assets/icon/wrapAccess.svg'
import wrapLegalTech from '../../assets/icon/wrapLegalTech.svg'

const content = {
    title: [
        ['Приватность'],
        ['Доступ', 'к информации'],
        ['LegalTech'],
    ],
    text: [
        [
            'Приватность это все про защиту персональных данных пользователя, защиту его информации, переписок, логи посещения сайтов (Китти, SelfPrivacy и Амнезия сюда относятся)',
            'Мы хотим создать технические решения по защите права на конфиденциальность.',
            'То есть тут блок скорее про свободу, отсутствие конфиденциальности в сети значит наличие контроля за твоими данными сторонних организаций или отдельных лиц'
        ],
        [
            'Противодействие блокировок (амнезия), защита свободы слова (get site copy) или же содействие улучшению качества распространения информации (секьюрно)'
        ],
        [
            'автоматизация и цифровизация юридической работы (из наших это Personalka, Nabu)'
        ]
    ],
    icon: [privacy, access, legalTech],
    style: [wrapPrivacy, wrapAccess, wrapLegalTech],
    examples: {
        ex: {
            Title: [
                ['SelfPrivacy', 'KittyCloud', 'Amnezia'],
                ['get site copy', 'Секьюрно'],
                ['Personalka', 'Nabu'] 
            ],
            exText: [
                [
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`,
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`,
                    `Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на своём сервере.`
                ],
                [
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`,
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`,
                ],
                [
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`,
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`
                ]
            ]
        }    

    }

}

export default content