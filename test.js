workContent = {
    mainTitle: "Направления работы, на которых мы специализируемся",
    title: 'Приватность, Доступ к информации, LegalTech',
    text: {
      0: {
        0: 'Проекты, отстаивающие право на конфиденциальность и направленные на  защиту персональных данных пользователя, защиту информации, переписок, логи посещения сайтов',
        1: 'Мы хотим создать технические решения по защите права на конфиденциальность.',
        2: 'То есть тут блок скорее про свободу, отсутствие конфиденциальности в сети значит наличие контроля за твоими данными сторонних организаций или отдельных лиц',
        length: 3
      },
      1: {
        0: 'Противодействие блокировок (амнезия), защита свободы слова (get site copy) или же содействие улучшению качества распространения информации (секьюрно)',
        length: 1,
      },
      2: {
        0: 'Проекты для автоматизации и цифровизации юридической работы',
        length: 1,
      },
      length: 3                        
    },
  }

let q = Array.from(workContent.text).map((item) => { 
    Array.from(item).map((item) => {
        console.log('1. ' + item) 
    })
    console.log('________________________')
})