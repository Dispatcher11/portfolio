import Home from './components/Home';
import Navbar from './components/Navbar';
import './app.scss';
import Footer from './components/Footer';
import { useState } from 'react';

import SoundContextProvider from './contexts/SoundContext';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="App">
      <SoundContextProvider>
        {/* <Scroll /> */}
      <Navbar/>
     <Home/>
     </SoundContextProvider>
    </div>
  );
}

export default App;