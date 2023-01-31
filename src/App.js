import Home from './components/Home';
import Navbar from './components/Navbar';
import './app.scss';
import Footer from './components/Footer';
import { useState } from 'react';
import SoundContextProvider from './contexts/SoundContext';
import Scroll from './components/Scroll';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import LanguageContextProvider from './contexts/LanguageContext';

function App() {
  const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
      const threshold = 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;
    
      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;
    
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? false : true);
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
    
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
    
      window.addEventListener("scroll", onScroll);
      // console.log(scrollDir);
    
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
  const {ref: footer, inView: myFooterInView} = useInView();
    
  return (
    <div className="App">
    <LanguageContextProvider>
      <SoundContextProvider>
        {/* <Scroll /> */}
      <Navbar myFooterInView={myFooterInView} scrollDir={scrollDir}  />
     <Home footer={footer} myFooterInView={myFooterInView} />
     </SoundContextProvider>
  </LanguageContextProvider>

    </div>
  );
}

export default App;
