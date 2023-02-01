import {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import PopUp from "./components/modules/popUp"
import Projects from './components/ourProjects/Projects';

const App = () => {
  
  const [open, setOpen] = useState(false)
  const [loc, setLoc] = useState("")
  const back = 'bg-c_yellow-light'
  
  
  return (
    <div className="App">
        <Helmet>
          
        </Helmet>
      {/* { !open ?   */}
         {/* <div> */}
          <Header />
          <Body setOpen={setOpen} setLocation={setLoc}/>
        {/* </div> */}
        {/* :  */}
         {/* <PopUp setOpen={setOpen} background={back} c={0}> */}
          {/* <Projects loc={loc}/> */}
        {/* </PopUp> */}
       {/* }   */}
      <Footer />
    </div>
  );
}

export default App;
