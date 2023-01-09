import privacy from '../assets/icon/Privacy.svg'
import access from '../assets/icon/Access.svg'
import legalTech from '../assets/icon/LegalTech.svg'
import wrapPrivacy from '../assets/icon/wrapPrivacy.svg'
import wrapAccess from '../assets/icon/wrapAccess.svg'
import wrapLegalTech from '../assets/icon/wrapLegalTech.svg'

const workContent = {
    title: [
        ['Приватность'],
        ['Доступ', 'к информации'],
        ['LegalTech'],
    ],
    text: [
        [
            'Проекты, отстаивающие право на конфиденциальность и направленные на  защиту персональных данных пользователя, защиту информации, переписок, логи посещения сайтов',
            'Мы хотим создать технические решения по защите права на конфиденциальность.',
            'То есть тут блок скорее про свободу, отсутствие конфиденциальности в сети значит наличие контроля за твоими данными сторонних организаций или отдельных лиц'
        ],
        [
            'Противодействие блокировок (амнезия), защита свободы слова (get site copy) или же содействие улучшению качества распространения информации (секьюрно)'
        ],
        [
            'Проекты для автоматизации и цифровизации юридической работы'
        ]
    ],
    icon: [privacy, access, legalTech],
    style: [wrapPrivacy, wrapAccess, wrapLegalTech],
    examples: {
        ex: {
            Title: [
                ['SelfPrivacy', 'KittyCloud', 'Amnezia'],
                ['get site copy', 'Секьюрно'],
                ['Персоналка', 'Nabu'] 
            ],
            exText: [
                [
                    `Платформа на хостинге пользователя для разворачивания приватных сервисов, управляемых мобильным приложением.`,
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`,
                    `Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на своём сервере.`
                ],
                [
                    `Телеграм-бот, позволяющий читать материалы заблокированных медиа без использования VPN`,
                    `Трекер привычек и персональный ассистент безопасности`,
                ],
                [
                    `Проверка соглашений о персональных данных`,
                    `Platform on user's hosting provider for deploying private services, managed via mobile application.`
                ]
            ]
        }    

    },
    link: [
        [
            'https://selfprivacy.org/',
            '',
            'https://ru.amnezia.org/'
        ],
        [
            '',
            'https://securno.org/'
        ],
        [
            'https://personalka.org/check',
            ''
        ]
    ]
}

export default workContent