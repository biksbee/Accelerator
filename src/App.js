import {useState} from 'react'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {

  const [lang, setLang] = useState("eng")

  return (
    <div className="App">
        <Header lan={lang} setLan={setLang}/>
        <Body lang={lang} setLang={setLang}/>
        <Footer />
    </div>
  );
}

export default App;
