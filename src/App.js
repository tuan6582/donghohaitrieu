
import React from 'react';
import './App.css';
import Home from './pages/Home/Home'


import 'aos/dist/aos.css'
import Aos from 'aos';


function App() {

  Aos.init();

  return (

    <React.Fragment>
      <div className="App">
        <Home />
      </div>

    </React.Fragment>



  );
}

export default App;
