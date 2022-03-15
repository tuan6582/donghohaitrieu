
import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home'

import AOS from 'aos';
import 'aos/dist/aos.css'



function App() {

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 500);

  }, [])

  return (

    <React.Fragment>
      <div className="App">
        <Home />
      </div>

    </React.Fragment>



  );
}

export default App;
