import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Footer from './component/Footer';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }
  const darkmode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert("Dark mode is Enable", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode is Enable", "success")
    }
  }
  setTimeout(() => {
    setalert()
  }, 3000);
  return (
    <>
      <Navbar heading="TextUtils" darkmode={darkmode} />
      <Alert alert={alert}/>
      <Textform showalert={showalert}/>
      <Footer/>
    </>
  );
}

export default App;
