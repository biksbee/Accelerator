/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1280px',
      xm: '1100px',
      xs: '1024px',
      xms: '950px',
      ms: '900px',
      md: '768px',
      mds: '640px',
      ds: '540px',
      m: '415px',
      sq: '367px',
      s: '360px',
      xss: '340px'
    }, 
    extend: {
      backgroundImage: {
        'startProjects': "url(./assets/image/startProjects.png)",
        'startPageTheLoop': "url(./assets/icon/TheLoopStartPage.svg)",
        'ourProjectsTheLoop': "url(./assets/icon/TheLoopOurProjects.svg)",
        'moreAcceleratorLoop': "url(./assets/icon/MoreAccelerator.svg)",
        'curveLineConsultation': "url(./assets/icon/CurveLineConsultation.svg)",
        'orangeArrow': "url(./assets/icon/OrangeArrow.svg)",
        //projects
        'slideAmnezia': "url(./assets/image/amnezia.png)",
        'slideGetSiteCopy': "url(./assets/image/getSiteCopy.png)",
        'slideSelfPrivacy': "url(./assets/image/SelfPrivacy.png)",
        'slideEppie': "url(./assets/image/eppie.png)",
        'slideSecurno': "url(./assets/image/securno.png)",
                
        //experts
        "StanislavShakirov": "url(./assets/image/Шакиров Станислав.jpg)",
        'NataliyMalishova': "url(./assets/image/Наталья Малышева.jpg)",
        'DariaGorbacheva': "url(./assets/image/Дарья Горбачева.jpg)",
        'ArtemIgnatenko': "url(./assets/image/Игнатенко Артем.jpg)",
        'SarkisDabrinyn': "url(./assets/image/Дарбинян Саркис.jpg)",
        'IvanMikhailov': "url(./assets/image/Михайлов Иван.jpg)",
        'EkaterinaAbashina': "url(./assets/image/Екатерина Абашина.jpg)",
        'MisbahSoloviev': "url(./assets/image/Мисбах-Соловьев Вадим.jpg)",
        'AlexShevelev': "url(./assets/image/Алексей Шевелёв.jpg)",
        'DmitrikNikolay': "url(./assets/image/Дмитрик Николай.jpg)",
        'VladimirOjereliev': "url(./assets/image/Владимир Ожерельев.jpg)",
        'PleninDaniil': "url(./assets/image/Пленин Даниил.jpg)",
        'BegtinIvan': "url(./assets/image/Бегтин Иван.jpg)",

        //networking part2
        'helpFinance': "url(./assets/image/helpFinance.png)",
        'accessToTheMarket': "url(./assets/image/accessToTheMarket.png)",
        'tracking': "url(./assets/image/tracking.png)",
        'lecture': "url(./assets/image/lecture.png)",

      },
      
      colors: {
        c_white: {
          button: 'rgba(255, 255, 255, 0.9)',
        },
        c_black: {
          dark: 'rgba(20, 22, 26, 1)',
        },
        c_gray: {
          light: 'rgba(255, 255, 255, 0.1)',
          line: 'rgba(164, 170, 174, 1)',
          regular: 'rgba(210, 220, 255, 1)',
          trapezoid: 'rgba(252, 252, 252, 1)',
          primary: 'rgba(162, 161, 181, 1)',
          blur: 'rgba(216, 209, 241, 1)',
          demhack: 'rgba(209, 208, 218, 1)',
        },
        c_purple: {
          header: '#45344C',
          media: 'rgba(66, 61, 87, 1)',
        },
        c_orange: {
          blur: 'rgba(186, 102, 48, 1)',
          link_op: 'rgba(222, 63, 14, 0.3)',
          regular: 'rgba(244, 68, 13, 1)',
          hover: 'rgba(245, 87, 37, 1)',
          pressed: 'rgba(244, 68, 13, 0.5)',
          primary: 'rgba(248, 128, 37, 1)',
          bright: 'rgba(229, 68, 18, 1)',
        },
        c_blue: {
          deepDark: 'rgba(46, 43, 89, 1)',
          deepDarkOp: 'rgba(46, 43, 89, 0.9)',
          dark: 'rgba(23, 19, 71, 1)',
          moreDark: 'rgba(36, 19, 71, 1)',
          regular: 'rgba(155, 170, 221, 1)',
          cont: '#171347',
          filterLayer: 'rgba(62, 64, 120, 0.25)',
          popUp: 'rgba(69, 66, 108, 1)',
          footer: 'rgba(198,195,223,1)'
        },
        c_red: {
          regular: 'rgba(125, 34, 6, 1)',
          deep: 'rgba(77, 48, 48, 1)',
        },
        c_pink: {
          regular: 'rgba(232, 208, 208, 1)',
        },
        c_yellow: {
          light: 'rgba(230, 225, 214, 1)',
          regular: 'rgba(184, 154, 24, 1)',
          dirty: 'rgba(173, 134, 44, 1)',
        },
        c_green: {
          regular: 'rgba(4, 255, 255, 1)',
        }
      },
      fontFamily: {
        'otf-normal': ['otf-normal'],
        'otf-book': ['otf-book'],
        'otf-semiBold': ['otf-semiBold'],
        'otf-bold': ['otf-bold'],
        'otf-light': ['otf-light'],
      }
    },
  },
  plugins: [],
}
