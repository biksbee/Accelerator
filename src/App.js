import {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import PopUp from "./components/modules/popUp"
import Projects from './components/ourProjects/Projects';

const App = () => {

  const [lang, setLang] = useState("eng")
  const [open, setOpen] = useState(false)
  const [loc, setLoc] = useState("")
  const back = 'bg-c_yellow-light'

  return (
    <div className="App">
      { !open ?  
        <div>
          <Header lan={lang} setLan={setLang}/>
          <Body lang={lang} setLang={setLang} setOpen={setOpen} setLocation={setLoc}/>
        </div>
        : 
        <PopUp setOpen={setOpen} background={back} c={0}>
          <Projects lang={lang} loc={loc}/>
        </PopUp>
      }  
      <Footer />
    </div>
    // <div className="App">
    //   <Helmet>
    //     <title>App bugaga</title>
    //     <meta name="description" content="App Description" />
    //     <meta name="theme-color" content="#ff0000" />
    //     <meta property="og:title" content="BUGAGA" />
    //     <meta property="og:image" content="%PUBLIC_URL%/OGIMG.jpg"></meta>
    //   </Helmet>
    // </div>
  );
}

export default App;
