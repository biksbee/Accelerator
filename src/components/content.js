import privacy from '../assets/icon/Privacy.svg'
import access from '../assets/icon/Access.svg'
import legalTech from '../assets/icon/LegalTech.svg'
import wrapPrivacy from '../assets/icon/wrapPrivacy.svg'
import wrapAccess from '../assets/icon/wrapAccess.svg'
import wrapLegalTech from '../assets/icon/wrapLegalTech.svg'

export const startPage = {
    ru: {
        title: [
            'Помогаем запускать',
            'качественные продукты',
            'в сфере',
            'приватности',
            'и свободы интернета',
        ]
    },    
    eng: {
        title: [
            'We help launch',
            'quality products',
            'in the field',
            'privacy',
            'and internet freedom'
        ]
    }
}

export const ourProjects = {
    ru: {
        mainTitle: "Наши проекты",
        title: ['Amnezia', 'Get site copy'],
        subTitle: [
            'Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на своём сервере. ',
            'Бот для доступа к СМИ, заблокированным государственной цензурой в России.',
        ],
        slide: [
        'bg-slideAmnezia',
        'bg-slideGetSiteCopy',
        ],
        description: [
            [
                'Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на вашем сервере. Не требует специальных технических знаний для подготовки, а также использует широкий стек протоколов (OpenVPN, WireGuard, Shadowsocks, Cloak, Pluggable Transport), и как следствие ее сложнее заблокировать. Amnezia работает даже в репрессивной среде Туркменистана и Ирана.',
                'Буквально за несколько месяцев аудитория проекта увеличилась в 5 раз, а с введением бесплатного сервиса по доступу к заблокированным соцсетям и медиа в России AmneziaFree (который финансируется по отдельной программе), удалось увеличить активную аудиторию проекта до 140К, а общее количество загрузок AmneziaVPN для десктопов достигло 60К. Без анонсирования мобильной версии число скачиваний приложения для Android — более 10К.',
            ],
            [
                'Решение для предоставления доступа к СМИ, заблокированным государственной цензурой в России. Сейчас бот использует 40% заблокированных СМИ, в том числе BBC News Russia.',
                'Мы также интегрируемся с Радио Свобода. Аудитория, использующая наше решение - 520К. Выпускник хакатона и акселератора, позже проект интегрирован в Роскомсвободу.',
            ]
        ],
        rightColumns: [
            [
                '60К',
                'количество загрузок AmneziaVPN для десктопов за 6 мес',
                '+140К',
                'увеличили активную аудиторию проекта за 3 месяца '
            ],
            [
                '40%',
                'заблокированных СМИ используют этот бот',
                '520К',
                'аудитория'
            ]
        ]
    },
    eng: {
        mainTitle: "Our projects",
        title: ['Amnezia', 'Get site copy'],
        subTitle: [
            'Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на своём сервере. ',
            'Бот для доступа к СМИ, заблокированным государственной цензурой в России.',
        ],
        slide: [
        'bg-slideAmnezia',
        'bg-slideGetSiteCopy',
        ],
        description: [
            [
                'Бесплатное программное обеспечение с открытым исходным кодом для создания личного VPN на вашем сервере. Не требует специальных технических знаний для подготовки, а также использует широкий стек протоколов (OpenVPN, WireGuard, Shadowsocks, Cloak, Pluggable Transport), и как следствие ее сложнее заблокировать. Amnezia работает даже в репрессивной среде Туркменистана и Ирана.',
                'Буквально за несколько месяцев аудитория проекта увеличилась в 5 раз, а с введением бесплатного сервиса по доступу к заблокированным соцсетям и медиа в России AmneziaFree (который финансируется по отдельной программе), удалось увеличить активную аудиторию проекта до 140К, а общее количество загрузок AmneziaVPN для десктопов достигло 60К. Без анонсирования мобильной версии число скачиваний приложения для Android — более 10К.',
            ],
            [
                'Решение для предоставления доступа к СМИ, заблокированным государственной цензурой в России. Сейчас бот использует 40% заблокированных СМИ, в том числе BBC News Russia.',
                'Мы также интегрируемся с Радио Свобода. Аудитория, использующая наше решение - 520К. Выпускник хакатона и акселератора, позже проект интегрирован в Роскомсвободу.',
            ]
        ],
        rightColumns: [
            [
                '60К',
                'количество загрузок AmneziaVPN для десктопов за 6 мес',
                '+140К',
                'увеличили активную аудиторию проекта за 3 месяца '
            ],
            [
                '40%',
                'заблокированных СМИ используют этот бот',
                '520К',
                'аудитория'
            ]
        ]
    }
}

export const media = {
    ru: {
        title: "Медиа о нас"
    },
    eng: {
        title: "Media about us"
    }
}

export const workContent = {
    ru: {
        mainTitle: "Направления работы, на которых мы специализируемся",
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
    },
    eng: {
        mainTitle: "Areas of work in which we specialize",
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
}

export const deamhack = {
    ru: {
        hackathon: 'Хакатон',
        href: 'demhack.ru 🡽',
        text: [
            "Цель хакатона — поддержка духа сообщества, создание площадки для взаимодействия и сотрудничества специалистов из разных стран, возможность реализовать свои идеи для блага людей по всему миру и, защитить права на приватность и доступ к информации.",
            "Мы собираем интересные идеи в формате заявок и задач на хакатон, а после хакатона поддерживаем команды, которые хотят продолжать работать над проектом. Основываясь на экспертных оценках и наблюдениях за работой команд на хакатоне, мы принимаем решение о продолжении работы с проектом в рамках акселератора.",
            "Таким образом мы выстраиваем цепочку создания и развития проектов в области свободы интернета и приватности от момента инициации идеи до выхода проекта на рынок.",
            "С 2020 года Privacy Accelerator и ", "Роскомсвобода", "проводят хакатон Demhack дважды в год."
        ]
    },
    eng: {
        hackathon: 'Hackathon',
        href: 'demhack.ru 🡽',
        text: [
            "Цель хакатона — поддержка духа сообщества, создание площадки для взаимодействия и сотрудничества специалистов из разных стран, возможность реализовать свои идеи для блага людей по всему миру и, защитить права на приватность и доступ к информации.",
            "Мы собираем интересные идеи в формате заявок и задач на хакатон, а после хакатона поддерживаем команды, которые хотят продолжать работать над проектом. Основываясь на экспертных оценках и наблюдениях за работой команд на хакатоне, мы принимаем решение о продолжении работы с проектом в рамках акселератора.",
            "Таким образом мы выстраиваем цепочку создания и развития проектов в области свободы интернета и приватности от момента инициации идеи до выхода проекта на рынок.",
            "С 2020 года Privacy Accelerator и ", "Роскомсвобода", "проводят хакатон Demhack дважды в год."
        ]
    }
}

export const moreAccelerator = {
    ru: {
        mainTitle: [
            "Больше, чем",
            "просто акселератор"
        ],
        title: ['Преакселератор', 'Акселератор', 'Инкубатор'],
        context: [
            'В преакселераторе мы помогаем командам провести исследование рынка и анализ конкурентов, изучить аудиторию. Вы сможете развить свою идею и определиться с продуктом, который будет полезен для аудитории и востребован на рынке.',
            'В акселераторе мы обеспечиваем менторскую поддержку или сопровождение проектов в областях cusdev, маркетинг, ui/ux, управление проектами, право и т.д. Кроме того иногда мы привлекаем экспертов в области кибербезопасности, devops и разработки, но сама разработка всех остается на стороне команд. Программа акселератора рассчитана на 3 месяца.',
            'Подойдет проектам на стадии масштабирования, а также командам, которые  не готовы к акселерации из-за временных ограничений. Вы сможете пользоваться нашим нетворкингом, прицельно проконсультироваться с экспертами и получить помощь в своем проекте по нашим сферам компетенций.',
        ],
        requirements: "требования",
        needed: [
            'Наличие идеи и первоначальной разработки. Команда готова тратить на проект как минимум 20 часов в неделю.',
            'Наличие MVP и необходимой команды, готовых тратить на проект как минимум 20 часов в неделю. Для коммерческих проектов обязателен менеджер по продукту.',
            'Проект в сфере приватности, свободы информации или legaltech. Есть оцифрованные результаты развития проекта.'
        ]
    },
    eng: {
        mainTitle: [
            "More than",
            "just an accelerator"
        ],
        title: ['Преакселератор', 'Акселератор', 'Инкубатор'],
        context: [
            'В преакселераторе мы помогаем командам провести исследование рынка и анализ конкурентов, изучить аудиторию. Вы сможете развить свою идею и определиться с продуктом, который будет полезен для аудитории и востребован на рынке.',
            'В акселераторе мы обеспечиваем менторскую поддержку или сопровождение проектов в областях cusdev, маркетинг, ui/ux, управление проектами, право и т.д. Кроме того иногда мы привлекаем экспертов в области кибербезопасности, devops и разработки, но сама разработка всех остается на стороне команд. Программа акселератора рассчитана на 3 месяца.',
            'Подойдет проектам на стадии масштабирования, а также командам, которые  не готовы к акселерации из-за временных ограничений. Вы сможете пользоваться нашим нетворкингом, прицельно проконсультироваться с экспертами и получить помощь в своем проекте по нашим сферам компетенций.',
        ],
        requirements: "требования",
        needed: [
            'Наличие идеи и первоначальной разработки. Команда готова тратить на проект как минимум 20 часов в неделю.',
            'Наличие MVP и необходимой команды, готовых тратить на проект как минимум 20 часов в неделю. Для коммерческих проектов обязателен менеджер по продукту.',
            'Проект в сфере приватности, свободы информации или legaltech. Есть оцифрованные результаты развития проекта.'
        ]
    }
}

export const house = {
    ru: {
        mainTitle: [
            'Вот, что',
            'может дать',
            'вашему проекту'
        ],
        consultation: "Консультации с экспертами",
        show: "Посмотреть всех экспертов",
        f_name: [
            'Станислав Шакиров', 
            'Артем Игнатенко', 
            'Иван Михайлов', 
            'Наталья Малышева', 
            'Саркис Дарбинян', 
            'Daria Gorbacheva', 
            'Olga Nemirovskaya'
        ],
        experts: [
            {
                name: 'Станислав Шакиров',
                description: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.', 
                photo: 'bg-StanislavShakirov',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Артем Игнатенко',
                description: 'Agile Coach X5 Retail, ex-Product Owner Альфа-Банк, экс-директор департамента разработки группы IT-компаний, предприниматель. Эксперт в организации быстрой проверки продуктовых гипотез и организации процессов разработки продуктов', 
                photo: 'bg-ArtemIgnatenko',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Иван Михайлов',
                description: 'CEO компании ADWIST, экс-заместитель исполнительного директора Hearst Shkulev Media. Эксперт по маркетингу для b2b и b2c продуктов, развитие и запуск проектов на международных рынках', 
                photo: 'bg-IvanMikhailov',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Наталья Малышева',
                description: 'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.', 
                photo: 'bg-NataliyMalishova',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Саркис Дарбинян',
                description: 'Адвокат, глава юридической практики РосКомСвободы, управляющий в Цифровая коллегия адвокатов "DBA & Partners", эксперт в сфере защиты приватности и законодательства в сфере IT и IP', 
                photo: 'bg-SarkisDabrinyn',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Daria Gorbacheva',
                description: 'product and event manager. Expert in community building, researcher, civil and IT project manager with extensive experience working with non-profit organizations.', 
                photo: 'bg-DariaGorbacheva',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Olga Nemirovskaya',
                description: 'Product manager Privacy accelerator. Эксперт в продуктовом подходе в продажах и маркетинге', 
                photo: 'bg-OlgaNemirovskaya',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
        ],
        seeAll: [
            'bg-DariaGorbacheva',
            'bg-more2',
            'bg-more3',
            'bg-more4',
            'bg-OlgaNemirovskaya',
            'bg-more6',
            'bg-more7',
            'bg-more8',
            'bg-more9',
            'bg-more10',
            'bg-more11',
            'bg-orangeArrow'
        ],
        networking: "Нетворкинг",
        networkingDescription: "Обширные партнерские связи и нетворкинг с русскоязычными медиа и компаниями, а также  международными проектами и фондами.",
        networkingLinks: [
            'https://roskomsvoboda.org/',
            'https://habr.com/',
            'https://qrator.net/ru/',
            'https://proton.me/',
            '',
            'https://rusven.com/',
        ],
        networkingStepsTitle: [
            "Помощь с финансированием",
            "Выход на рынок",
            "Трекинг",
            "Лекции и воркшопы",
        ],
        networkingStepsDescription: [
            "Бизнес-ангелы, венчурные и некоммерческие фонды.",
            "Аудитория для Customer Development, первые последователи, масштабирование",
            "Целеполагание, четкий road map, развитие навыков, опыт и инструменты, чтобы бежать быстрее и эффективнее",
            "Практические занятия и материалы о Product Management, Customer Development, Fundraising",
        ],
        networkingStepsPhoto: [
            'bg-helpFinance',
            'bg-accessToTheMarket',
            'bg-tracking',
            'bg-lecture', 
        ],
        popUpTitle: 'Эксперты'
    },
    eng: {
        mainTitle: [
            'That\'s what',
            'can give ',
            'your project'
        ],
        consultation: "Консультации с экспертами",
        show: "Посмотреть всех экспертов",
        f_name: [
            'Станислав Шакиров', 
            'Артем Игнатенко', 
            'Иван Михайлов', 
            'Наталья Малышева', 
            'Саркис Дарбинян', 
            'Daria Gorbacheva', 
            'Olga Nemirovskaya'
        ],
        experts: [
            {
                name: 'Станислав Шакиров',
                description: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.', 
                photo: 'bg-StanislavShakirov',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Артем Игнатенко',
                description: 'Agile Coach X5 Retail, ex-Product Owner Альфа-Банк, экс-директор департамента разработки группы IT-компаний, предприниматель. Эксперт в организации быстрой проверки продуктовых гипотез и организации процессов разработки продуктов', 
                photo: 'bg-ArtemIgnatenko',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Иван Михайлов',
                description: 'CEO компании ADWIST, экс-заместитель исполнительного директора Hearst Shkulev Media. Эксперт по маркетингу для b2b и b2c продуктов, развитие и запуск проектов на международных рынках', 
                photo: 'bg-IvanMikhailov',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Наталья Малышева',
                description: 'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.', 
                photo: 'bg-NataliyMalishova',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Саркис Дарбинян',
                description: 'Адвокат, глава юридической практики РосКомСвободы, управляющий в Цифровая коллегия адвокатов "DBA & Partners", эксперт в сфере защиты приватности и законодательства в сфере IT и IP', 
                photo: 'bg-SarkisDabrinyn',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Daria Gorbacheva',
                description: 'product and event manager. Expert in community building, researcher, civil and IT project manager with extensive experience working with non-profit organizations.', 
                photo: 'bg-DariaGorbacheva',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
            {
                name: 'Olga Nemirovskaya',
                description: 'Product manager Privacy accelerator. Эксперт в продуктовом подходе в продажах и маркетинге', 
                photo: 'bg-OlgaNemirovskaya',
                allDescription: 'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы. Эксперт в продвижении IT-продуктов, кибербезопасности и интернет-предпринимательства.',
            },
        ],
        seeAll: [
            'bg-DariaGorbacheva',
            'bg-more2',
            'bg-more3',
            'bg-more4',
            'bg-OlgaNemirovskaya',
            'bg-more6',
            'bg-more7',
            'bg-more8',
            'bg-more9',
            'bg-more10',
            'bg-more11',
            'bg-orangeArrow'
        ],
        networking: "Networking",
        networkingDescription: "Обширные партнерские связи и нетворкинг с русскоязычными медиа и компаниями, а также  международными проектами и фондами.",
        networkingLinks: [
            'https://roskomsvoboda.org/',
            'https://habr.com/',
            'https://qrator.net/ru/',
            'https://proton.me/',
            '',
            'https://rusven.com/',
        ],
        networkingStepsTitle: [
            "Помощь с финансированием",
            "Выход на рынок",
            "Трекинг",
            "Лекции и воркшопы",
        ],
        networkingStepsDescription: [
            "Бизнес-ангелы, венчурные и некоммерческие фонды.",
            "Аудитория для Customer Development, первые последователи, масштабирование",
            "Целеполагание, четкий road map, развитие навыков, опыт и инструменты, чтобы бежать быстрее и эффективнее",
            "Практические занятия и материалы о Product Management, Customer Development, Fundraising",
        ],
        networkingStepsPhoto: [
            'bg-helpFinance',
            'bg-accessToTheMarket',
            'bg-tracking',
            'bg-lecture', 
        ],
        popUpTitle: 'Experts',
    }
}

export const team = {
    ru: {
        mainTitle: 'Команда Акселератора',
        name: [
            'Станислав Шакиров', 
            'Наталья Малышева', 
            'Дарья Горбачева', 
            'Olga Nemirovskaya'
        ],
        description: [
            'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы.',
            'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.',
            'Координатор Privacy Accelerator. Опыт в области коммьюнити-менеджмента, организации онлайн- и оффлайн-мероприятий.',
            'Product manager Privacy accelerator. Эксперт в продуктовом подходе в продажах и маркетинге'
        ],
        photo: [
            'bg-StanislavShakirov',
            'bg-NataliyMalishova',
            'bg-DariaGorbacheva',
            'bg-OlgaNemirovskaya'
        ],
        about: [
            'В 2020 году',
            'команда Роскомсвободы запустила акселератор для поддержки инициатив в сферах приватности и анонимности, доступа к информации и свободы слова, электронного участия, развития ценностей цифрового гражданства, защиту прав и реализацию интересов граждан в цифровой среде. Политическая и интернет-цензура в Российской Федерации неуклонно усиливается с 2012 года, достигнув пика в 2022 году. В ответ мы видим все больший запрос в обществе на сервисы для защиты данных и свободы интернета. ',
            'Так например в 2022 году Россия переместилась с 15 места в мире по скачиванию VPN-сервисов на 2-е (с 2-3 млн до 12 млн. скачиваний). В Privacy Accelerator мы стремимся решить эти проблемы, запуская большее количество качественных проектов в сфере приватности и свободы интернета, а также повышая значимость проблем защиты данных, развивая интерес к теме среди разработчиков и предпринимателей. История Рунета за 10 лет: https://x.roskomsvoboda.org',
        ]
    },
    eng: {
        mainTitle: 'Team of Accelerator',
        name: [
            'Станислав Шакиров', 
            'Наталья Малышева', 
            'Дарья Горбачева', 
            'Olga Nemirovskaya'
        ],
        description: [
            'Основатель Privacy Accelerator, сооснователь Школы киберправа и Digital Rights Center, технический директор и сооснователь Роскомсвободы.',
            'Руководитель по связям с общественностью РосКомСвободы, журналист и экоактивист. Эксперт в области СМИ, коммуникаций и продвижения, организации общественных кампаний.',
            'Координатор Privacy Accelerator. Опыт в области коммьюнити-менеджмента, организации онлайн- и оффлайн-мероприятий.',
            'Product manager Privacy accelerator. Эксперт в продуктовом подходе в продажах и маркетинге'
        ],
        photo: [
            'bg-StanislavShakirov',
            'bg-NataliyMalishova',
            'bg-DariaGorbacheva',
            'bg-OlgaNemirovskaya'
        ],
        about: [
            'In 2020 year',
            'команда Роскомсвободы запустила акселератор для поддержки инициатив в сферах приватности и анонимности, доступа к информации и свободы слова, электронного участия, развития ценностей цифрового гражданства, защиту прав и реализацию интересов граждан в цифровой среде. Политическая и интернет-цензура в Российской Федерации неуклонно усиливается с 2012 года, достигнув пика в 2022 году. В ответ мы видим все больший запрос в обществе на сервисы для защиты данных и свободы интернета. ',
            'Так например в 2022 году Россия переместилась с 15 места в мире по скачиванию VPN-сервисов на 2-е (с 2-3 млн до 12 млн. скачиваний). В Privacy Accelerator мы стремимся решить эти проблемы, запуская большее количество качественных проектов в сфере приватности и свободы интернета, а также повышая значимость проблем защиты данных, развивая интерес к теме среди разработчиков и предпринимателей. История Рунета за 10 лет: https://x.roskomsvoboda.org',
        ]
    }
}

export const contact = {
    ru: {
        mainTitle: 'Контакты',
        blocks: [
            'Подать заявку на вступление можно',
            'Связаться с нами по всем остальным вопросам:',
            'Следите за нами:'
        ],
        value: ['здесь', 'почта', 'Telegram', 'Signal', 'на Хабре', 'в Telegram-канале', 'Facebook', 'LinkedIn'],
        links: {
            here: "https://pd.roskomsvoboda.org/privacyaccelerator/",
            mail: "mailto:team@privacyaccelerator.org",
            telegram: "https://t.me/privacyaccelerator_team?domain",
            signal: "",
            habr: "https://habr.com/",
            telegramChanel: "",
            facebook: "https://www.facebook.com/privacyaccelerator",
            linkedIn: "",
        }
    },
    eng: {
        mainTitle: 'Contacts',
        blocks: [
            'Подать заявку на вступление можно',
            'Связаться с нами по всем остальным вопросам:',
            'Следите за нами:'
        ],
        value: ['здесь', 'почта', 'Telegram', 'Signal', 'на Хабре', 'в Telegram-канале', 'Facebook', 'LinkedIn'],
        links: {
            here: "https://pd.roskomsvoboda.org/privacyaccelerator/",
            mail: "mailto:team@privacyaccelerator.org",
            telegram: "https://t.me/privacyaccelerator_team?domain",
            signal: "",
            habr: "https://habr.com/",
            telegramChanel: "",
            facebook: "https://www.facebook.com/privacyaccelerator",
            linkedIn: "",
        }
    }
}