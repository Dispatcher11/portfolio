import { useEffect } from "react";
import { useState } from "react";


const Toggle = () => {
   const [toggle, settoggle] = useState(localStorage.getItem('toggle') === "true");

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


    return ( 
    <div class="toggle" onClick={() => settoggle(!toggle)}>
            <input class="toggle-input" type="checkbox" checked={toggle} />
                <div class="toggle-bg"></div>
          <div class="toggle-switch">
               <div class="toggle-switch-figure"></div>
              <div class="toggle-switch-figureAlt"></div>
         </div>  
    </div>

     );
}
 
export default Toggle;