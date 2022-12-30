/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: '1280px',
      xs: '1024px',
      ms: '900px',
      md: '768px',
      mds: '640px',
      m: '415px',
      s: '360px',
    }, 
    extend: {
      backgroundImage: {
        'startProjects': "url(./assets/image/startProjects.png)",
        'startPageTheLoop': "url(./assets/icon/TheLoopStartPage.svg)",
        'ourProjectsTheLoop': "url(./assets/icon/TheLoopOurProjects.svg)",
        'moreAcceleratorLoop': "url(./assets/icon/MoreAccelerator.svg)",
        'curveLineConsultation': "url(./assets/icon/CurveLineConsultation.svg)",
        'orangeArrow': "url(./assets/icon/OrangeArrow.svg)",

        'slideAmnezia': "url(./assets/image/amnezia.png)",
        'slideGetSiteCopy': "url(./assets/image/getSiteCopy.png)",
        

        "StanislavShakirov": "url(./assets/image/StanislavShakirov.png)",
        'NataliyMalishova': "url(./assets/image/NataliyMalishova.png)",
        'DariaGorbacheva': "url(./assets/image/DariaGorbacheva.png)",
        'OlgaNemirovskaya': "url(./assets/image/OlgaNemirovskaya.png)",
        'ArtemIgnatenko': "url(./assets/image/ArtemIgnatenko.png)",
        'SarkisDabrinyn': "url(./assets/image/SarkisDabrinyn.png)",
        'IvanMikhailov': "url(./assets/image/IvanMikhailov.png)",
        'more2': "url(./assets/image/more2.png)",
        'more3': "url(./assets/image/more3.png)",
        'more4': "url(./assets/image/more4.png)",
        'more6': "url(./assets/image/more6.png)",
        'more7': "url(./assets/image/more7.png)",
        'more8': "url(./assets/image/more8.png)",
        'more9': "url(./assets/image/more9.png)",
        'more10': "url(./assets/image/more10.png)",
        'more11': "url(./assets/image/more11.png)",

        'helpFinance': "url(./assets/image/helpFinance.png)",
        'accessToTheMarket': "url(./assets/image/accessToTheMarket.png)",
        'tracking': "url(./assets/image/tracking.png)",
        'lecture': "url(./assets/image/lecture.png)",

      },
      
      colors: {
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

        },
        c_purple: {
          header: '#45344C',
          media: 'rgba(66, 61, 87, 1)',
        },
        c_orange: {
          blur: 'rgba(186, 102, 48, 1)',
          link: 'rgba(222, 80, 36, 1)',
          link_op: 'rgba(222, 63, 14, 0.3)',
          regular: 'rgba(244, 68, 13, 1)',
          hover: 'rgba(244, 68, 13, 0.9)',
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
      dropShadow: {
        default: '2px 1px 4px rgba(99, 93, 96, 0.3)',
        hover: '2px 1px 20px rgba(99, 93, 96, 0.4)',
      },
      fontFamily: {
        'otf-normal': ['otf-normal'],
        'otf-book': ['otf-book'],
        'otf-semiBold': ['otf-semiBold'],
        'otf-bold': ['otf-bold'],
      }
    },
  },
  plugins: [],
}
