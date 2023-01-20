import { useState } from "react";

const Toggle = () => {
     const [checked, setChecked] = useState(true);

     const handleClick = () => {
          setChecked(!checked);
     }

    return ( 
    <div class="toggle" onClick={handleClick}>
            <input class="toggle-input" type="checkbox" checked={checked} />
                <div class="toggle-bg"></div>
          <div class="toggle-switch">
               <div class="toggle-switch-figure"></div>
              <div class="toggle-switch-figureAlt"></div>
         </div>  
    </div>

     );
}
 
export default Toggle;