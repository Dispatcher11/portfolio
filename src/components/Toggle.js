import { useEffect } from "react";
import { useState } from "react";
import { Howl } from 'howler';
import sound1 from '../sounds/switchone.mp3';
import sound2 from '../sounds/switchtwo.mp3';


const Toggle = ({toggle, setToggle}) => {

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
    
    localStorage.setItem('toggle', toggle);
  }, [toggle]);

  const soundSrc = toggle ? sound1 : sound2;

  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }
    return ( 
     <span onClick={() => callMySound(soundSrc)}>
    <div className="toggle" onClick={() => setToggle(!toggle)}>
            <input className="toggle-input" type="checkbox" checked={toggle} />
                <div className="toggle-bg"></div>
          <div className="toggle-switch">
               <div className="toggle-switch-figure"></div>
              <div className="toggle-switch-figureAlt"></div>
         </div>  
    </div>
    </span>

     );
}
 
export default Toggle;