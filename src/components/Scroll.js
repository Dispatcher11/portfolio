// import { useState } from 'react';
// import { useEffect } from 'react';

// const Scroll = () => {
//     const [scrollDir, setScrollDir] = useState("scrolling down");

//     useEffect(() => {
//       const threshold = 0;
//       let lastScrollY = window.pageYOffset;
//       let ticking = false;
    
//       const updateScrollDir = () => {
//         const scrollY = window.pageYOffset;
    
//         if (Math.abs(scrollY - lastScrollY) < threshold) {
//           ticking = false;
//           return;
//         }
//         setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
//         lastScrollY = scrollY > 0 ? scrollY : 0;
//         ticking = false;
//       };
    
//       const onScroll = () => {
//         if (!ticking) {
//           window.requestAnimationFrame(updateScrollDir);
//           ticking = true;
//         }
//       };
    
//       window.addEventListener("scroll", onScroll);
//       console.log(scrollDir);
//       if (scrollDir === "scrolling down") {
//         document.documentElement.scrollTop = (document.documentElement.scrollTop + 720);
//       } else {
//         document.documentElement.scrollTop = document.documentElement.scrollTop - 800
//       }
    
//       return () => window.removeEventListener("scroll", onScroll);
//     }, [scrollDir]);
//     return ( 
//         <div></div>
//      );
// }
 
// export default Scroll;