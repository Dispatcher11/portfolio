import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SoundContext } from "../contexts/SoundContext";


const Toggle = () => {

  const { toggle, setToggle, callMySound, soundSrc } = useContext(SoundContext);

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--main-purple", toggle ? "#774069" : "#6FDCBF");
    root?.style.setProperty("--main-dark", toggle ? "#29272A" : "#F6F4F6");
    root?.style.setProperty("--text-white", toggle ? "#FFF" : "#404040");
    root?.style.setProperty("--text-purple", toggle ? "hsl(240, 33%, 77%)" : "#6FDCBF");
    root?.style.setProperty("--main-turqoise", toggle ? "#4C3A69" : "#AE8FDB");
    root?.style.setProperty("--main-background-dark", toggle ? "#2C2A32" : "#FEF8B4");
    root?.style.setProperty("--text-gray", toggle ? "#E0E0E0" : "#2C2A32");
    root?.style.setProperty("--scrollbar", toggle ? "#2C2A32" : "#FFFCE0");
    
  }, [toggle]);

  const clickHandle = () => {
    setToggle(!toggle);
    if (window.innerWidth > 700) {
    callMySound(soundSrc);
  }
  };

    return ( 
    <div className="toggle">
            <input className="toggle-input" type="checkbox" checked={toggle} onClick={clickHandle} />
                <div className="toggle-bg"></div>
          <div className="toggle-switch">
               <div className="toggle-switch-figure"></div>
              <div className="toggle-switch-figureAlt"></div>
         </div>  
    </div>

     );
}
 
export default Toggle;