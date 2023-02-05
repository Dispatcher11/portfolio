import { motion } from "framer-motion";
import { useState } from "react";
import { useContext } from "react";
import { SoundContext } from "../contexts/SoundContext";

const windowVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
		transition: {
			delay: 2,
			type: 'spring',
			stiffness: 280,
			mass: .6
		  }
    }
}
const windowVariants2 = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
		transition: {
			delay: .2,
			type: 'spring',
			stiffness: 280,
			mass: .6
		  }
    }
}

const slashVariants = {
    animation: {
        opacity: [1, 0, 1],    
        transition: {
            repeat: Infinity,
            duration: .9,
        }
    },
}

const widthVariants = {
    hidden: {
        // opacity: 0
        scaleX: 0
    },
    visible: {
        // opacity: 1,
        originX: 0,
        scaleX: 1
    }
}

const opacityVariants = {
	hidden : {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
}

const Desk = () => {
    const { toggle, setToggle, callMySound, soundSrc } = useContext(SoundContext);
    const click = () => {
      callMySound(soundSrc);
      setToggle(!toggle);
    }
	const [scrolled, setScrolled] = useState(false);

		window.onscroll = function (e) {  
		setScrolled(true);
		// console.log(document.documentElement.scrollTop);
		};

		const [light, setLight] = useState(false);
		setTimeout(() => {
			setLight(true);
		}, 1700);

    return ( 
<svg id="Layer_1" style={{"enableBackground":"new 140 0 850 1080"}} version="1.1" viewBox="140 0 850 1080" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<g id="_x35_a6fe8bf-98bb-4d52-87c1-f2468f4c684c" transform="matrix(1 0 0 1 540 540)"/>
	<g id="_x31_242b916-0f68-4bce-a717-6fed70e5c597" transform="matrix(1 0 0 1 540 540)">
		<rect className="st0" height="1080" width="1080" vectorEffect="non-scaling-stroke" x="-540" y="-540"/>
	</g>
	<g transform="matrix(2.19 0 0 2.19 561.57 540)">
		<g>
		<motion.g initial={{y: "-100vh", x: "0vw", rotate: "0deg"}} animate={{y: 0, x: 0, rotate: 0}} transition={{delay: 1, duration: .8, type: "tween"}}>
			<g transform="matrix(1 0 0 1 -161.44 -23.45)">
				<path className="st1" d="M-4.8,1c1.3,5.6,4.1,10.8,8,15C5.2,10.6,5.8,4.7,4.8-1     c-1.3-5.6-4-10.8-8-15C-5.2-10.6-5.8-4.7-4.8,1z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -151.44 -20.22)">
				<path className="st2" d="M5.8,1C3.9,9.8-3.4,16-3.4,16S-7.6,7.9-5.8-1c1.9-8.9,9.2-15,9.2-15     S7.6-7.8,5.8,1z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -170.62 -4.72)">
				<path className="st2" d="M-5.2-0.7C0.2,11.4,9.7,25.5,9.7,25.5S10.5,5.9,5.2-6.3     C1.8-13.8-3.3-20.4-9.8-25.5C-10-17-8.5-8.6-5.2-0.7z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -142.78 -4.73)">
				<path className="st2" d="M5.3-1.1C0.7,11.4-8.5,26.2-8.5,26.2S-10,6.6-5.4-5.8     c3-7.7,7.7-14.7,13.8-20.3C9.2-17.7,8.2-9.1,5.3-1.1z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -163.56 -6.25)">
				<path className="st2" d="M-4.8-2.1c2.7,11.2,9.6,25.9,9.6,25.9s2.6-17.4,0-28.7     c-1.7-6.9-5-13.4-9.6-18.9C-6.3-16.7-6.3-9.3-4.8-2.1z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -163.72 -2.78)">
				<path className="st3" d="M-4.8-2.1c2.3,9.6,8.9,22.9,8.9,22.9S7,4.7,4.8-4.9     c-1.5-6-4.6-11.5-8.9-15.9C-5.8-14.7-6.1-8.3-4.8-2.1z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -151.06 -1.28)">
				<path className="st1" d="M-6.3-4.8C-7.5,6.8-2.3,25.1-2.3,25.1S5.1,8.4,6.3-3.2     c1.2-11.6-4.1-21.9-4.1-21.9S-5.1-16.5-6.3-4.8z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -156.84 0.59)">
				<path className="st4" d="M-4.9,3.5C-4.7,9.3-3,14.9,0,19.8C3,14.9,4.7,9.3,4.9,3.5     c0-9-4.9-23.3-4.9-23.3S-4.9-5.5-4.9,3.5z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -156.55 19.35)">
				<path className="st5" d="M10.9-9.5c-0.1-0.8-23.2-4.2-23.2-3.4l2.8,25.2c0,0.2,0.1,0.3,0.2,0.4     c0.1,0.2,0.3,0.3,0.5,0.2H9.6c0.5,0,0.6-0.1,0.8-0.4c0.1-0.3,0.2-0.5,0.2-0.8c0.7-7.1,1.3-14.2,1.7-21.3     C12.3-10.3,11-10.3,10.9-9.5z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -156.11 9.2)">
				<path className="st6" d="M14.4-3.7c-0.5-0.5-1.5-0.6-3.5-0.6h-21.8c-2,0-3,0.1-3.5,0.6     c-0.5,0.5-0.4,1.1-0.4,2.2v2.3c0,1.5,0,2.4,0.5,2.9c0.5,0.5,1.6,0.6,3.3,0.6h21.8c2,0,2.9,0,3.4-0.6c0.5-0.6,0.4-1.1,0.4-2.4V0     c0-0.5,0-1.1,0.1-1.6C14.8-2.6,14.9-3.2,14.4-3.7z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -157.57 14.69)">
				<path className="st7" d="M-11.7-8.7C-12-7.6-12.1-6.4-12-5.3c0.1,0.5,0.9,0.5,0.8,0     c-0.1-1.1-0.1-2.1,0.2-3.2c0-0.2-0.1-0.4-0.3-0.5S-11.7-8.9-11.7-8.7z M-11.2-3.6c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4     s-0.4,0.2-0.4,0.4C-11.6-3.8-11.4-3.6-11.2-3.6z M9.6,5c-0.2,0.7-0.4,1.8,0.6,2.2c0.9,0.3,1.4-0.5,1.5-1.2c0.1-0.8-0.3-1.6-1-1.9     c-0.4-0.1-0.9,0.1-1.1,0.5C9.5,4.6,9.4,4.8,9.4,4.9c-0.1,0.2,0,0.5,0,0.7c-0.1,0.4,0.2,0.9,0.6,1c0.4,0.1,0.9-0.1,1-0.6     c0-0.2,0-0.3,0-0.5V5.3c0-0.2-0.1-0.2-0.3,0.3h-0.4C10,5.5,9.9,5.4,10.1,5.7c0.1,0.3-0.3,0,0.3-0.1h0.4c0.2,0.1,0.3,0.8,0.4,0.2     c0-0.1,0-0.3,0.1-0.4C11.5,4.4,9.9,3.9,9.6,5L9.6,5z M11.2,3.7c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8     C10.4,3.4,10.8,3.7,11.2,3.7z M11,8.9c0.5,0,0.8-0.4,0.8-0.8S11.4,7.3,11,7.3s-0.8,0.4-0.8,0.8S10.5,8.9,11,8.9z" vectorEffect="non-scaling-stroke"/>
			</g>
			</motion.g>
			<motion.g initial={{y: "-100vh"}} animate={{y: 0}} transition={{delay: 1, duration: .7, type: "tween"}}>
			<g transform="matrix(1 0 0 1 -118.44 13.39)">
				<path className="st2" d="M-0.1,19.2l9.6-34.5c0.1-0.4,0.1-0.8-0.1-1.2s-0.6-0.6-1-0.7l-6.4-2     c-0.4-0.2-0.8-0.2-1.2,0s-0.6,0.5-0.7,0.9l-9.6,34.5c-0.1,0.2,0,0.5,0.3,0.6c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.2-0.3     l0.1-0.4l7.9,2.4" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -120.36 13.21)">
				<path className="st8" d="M4.1-17.6c-0.7-0.2-1.5,0.3-1.7,1l-9.1,32.9l3.8,1.2l9.6-34.3L4.1-17.6z     " vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -116.63 14.24)">
				<path className="st9" d="M-2.6,17.8l9.1-32.9c0.3-0.7-0.1-1.5-0.8-1.8L3-17.8l-9.6,34.3     L-2.6,17.8" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -114.71 4.45)">
				<path className="st10" d="M-2.1,7c0,0,2.1-9.9,4.2-14C1.6-4.5,1.5-3.3-2.1,7z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="BOOKS" transform="matrix(1 0 0 1 -112.61 2.93)">
				<polygon className="st11" points="-2.1,1.2 0.9,2.2 0.7,0.2 2.1,-1.2 -1.1,-2.2    " vectorEffect="non-scaling-stroke"/>
			</g>
			</motion.g>
			<motion.g initial={{y: "-100vh"}} animate={{y: 0}} transition={{delay: .8, duration: .7, type: "tween"}}>
			<g id="BOOKS_00000175285301045302723780000012834520345054180796_" transform="matrix(1 0 0 1 -92.55 8.07)">
				<motion.polyline className="st12" points="-5.6,24.9 -5.6,-24.9 5.6,-24.9 5.6,24.9    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="BOOKS_00000004548072878665264780000004032571971750196396_" transform="matrix(1 0 0 1 -92.54 -9.6)">
				<rect className="st2" height="1.8" width="11.2" vectorEffect="non-scaling-stroke" x="-5.6" y="-0.9"/>
			</g>
			<g id="BOOKS_00000001652582996886360610000005339211712140787129_" transform="matrix(1 0 0 1 -92.54 -7)">
				<rect className="st2" height="1.8" width="11.2" vectorEffect="non-scaling-stroke" x="-5.6" y="-0.9"/>
			</g>
			</motion.g>
			<motion.g initial={{y: "-100vh"}} animate={{y: 0}} transition={{delay: .9, duration: .7, type: "tween"}}>
			<g id="BOOKS_00000037680235909877239910000013604162107499866497_" transform="matrix(1 0 0 1 -103.56 10.25)">
				<polyline className="st13" points="-5.3,22.7 -5.3,-22.7 5.3,-22.7 5.3,22.7    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="BOOKS_00000100341604263673286110000004881721339735289501_" transform="matrix(1 0 0 1 -103.56 -1.72)">
				<rect className="st14" height="1.6" width="10.6" vectorEffect="non-scaling-stroke" x="-5.3" y="-0.8"/>
			</g>
			<g id="BOOKS_00000106831751801142540430000001350553558068303028_" transform="matrix(1 0 0 1 -103.56 0.63)">
				<rect className="st14" height="1.6" width="10.6" vectorEffect="non-scaling-stroke" x="-5.3" y="-0.8"/>
			</g>
			</motion.g>
			<g transform="matrix(1 0 0 1 97.79 142.63)">
				<path className="st15" d="M7.3,2.5H-7.2C-9.1-4.1,9.1-4.2,7.3,2.5z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 97.78 142.32)">
				<path className="st16" d="M-7.2,0.9c1.5-4.1,12.9-4.4,14.4,0C2.6,2.8-2.6,2.8-7.2,0.9z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 97.79 140.02)">
				<path className="st17" d="M0.7,0.2C0.7,0.3,0.7,0.3,0.7,0.2l-1.3,0.1c0,0-0.1,0-0.1-0.1v-0.4     c0-0.1,0.3-0.2,0.6-0.2h0.3c0.3,0,0.6,0.1,0.6,0.2V0.2z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="mouse" transform="matrix(1 0 0 1 97.78 145.49)">
				<path className="st18" d="M-12.5-0.4h24.9c0.2,0,0.3,0.1,0.3,0.3v0.2c0,0.2-0.1,0.3-0.3,0.3     h-24.9c-0.2,0-0.3-0.1-0.3-0.3v-0.2C-12.8-0.3-12.6-0.4-12.5-0.4z" vectorEffect="non-scaling-stroke"/>
			</g>
			<motion.g initial={{x: "-100vh"}} animate={{x: 0}} transition={{delay: .7, duration: .7, type: "spring", stiffness: 120, mass: .4}}>
			<g id="shelf" transform="matrix(1 0 0 1 -127.17 34.1)">
				<rect className="st19" height="4.2" width="99.8" vectorEffect="non-scaling-stroke" x="-49.9" y="-2.1"/>
			</g>
			</motion.g>
			<motion.g initial={{y: "-50vh"}} animate={{y: 0}} transition={{delay: 1}}>
			<g transform="matrix(1 0 0 1 -17.91 -112.95)">
				<path className="st20" d="M11.8,0c0,7.1-5.3,12.9-11.8,12.9c-6.5,0-11.7-5.8-11.7-12.9     S-6.5-12.9,0-12.9C6.5-12.9,11.8-7.1,11.8,0z" vectorEffect="non-scaling-stroke"/>
			</g>
            <a href="javascript:{}">
				{/* start light */}
			{light && <g onClick={click} id="light" className={toggle? "light-on" : "light-off"} transform="matrix(1 0 0 1 -13.86 16.26)">
				<polygon className="st21" points="-30.4,-129.2 -124.4,129.2 124.4,129.2 22.2,-129.2    " vectorEffect="non-scaling-stroke"/>
			</g>    }    
				{/* end light */}

            </a>

			<g id="light_00000007414788025995047120000008032692188891973807_" transform="matrix(1 0 0 1 -17.91 -210.49)">
				<rect className="st11" height="91.1" width="2.1" vectorEffect="non-scaling-stroke" x="-1.1" y="-45.5"/>
			</g>
			<g transform="matrix(1 0 0 1 -17.92 -165.13)">
				<path className="st18" d="M2.9,2.6v-2.8C3-1.5,2-2.6,0.7-2.6h-1.4C-2-2.6-3-1.5-3-0.2v2.8     C-1.1,1.9,1.1,1.9,2.9,2.6L2.9,2.6z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -17.91 -153.95)">
				<path className="st11" d="M8.7,0.4v8.8L8.3,9C3.3,8.3-1.9,8.2-6.9,8.9L-8.3,9l-0.4,0.1V0.4     c0-0.5,0-0.9,0.1-1.4c0.1-0.5,0.2-1,0.3-1.5c0-0.1,0-0.1,0.1-0.2C-8.1-2.9-8-3.2-7.9-3.4c0,0,0-0.1,0-0.1l0.2-0.4     c0.1-0.1,0.1-0.3,0.2-0.4c0.3-0.5,0.6-1,1-1.5c0.4-0.5,0.9-1,1.4-1.4c0.2-0.1,0.3-0.2,0.5-0.4C-4.4-7.8-4.3-7.9-4.1-8     c0.2-0.1,0.4-0.2,0.6-0.3L-3-8.6C-2-8.9-1-9.1,0-9.1c1,0,2,0.2,3,0.6c2.6,1.1,4.5,3.3,5.3,6C8.5-1.6,8.7-0.6,8.7,0.4z" vectorEffect="non-scaling-stroke"/>
			</g>
        <a href="#">
			<g transform="matrix(1 0 0 1 -17.91 -129.25)"  onClick={click} >
				<path className="st11" d="M26.3,16.3h-52.7l1.6-12.7c1-7.9,8.1-17.5,16.1-19.2l0.4-0.1l1.4-0.2     c5-0.6,10.2-0.6,15.2,0.2l0.3,0.1c8,1.7,15.1,11.3,16.1,19.2L26.3,16.3z" vectorEffect="non-scaling-stroke"/>
			</g>
        </a>
			<g transform="matrix(1 0 0 1 -17.92 -150.64)">
				<path className="st18" d="M8.7-2.9H-8.7c0-0.5,0-0.9,0.1-1.4c0.1-0.5,0.2-1,0.3-1.5H8.2     C8.5-4.9,8.7-3.9,8.7-2.9z M8.7,3v2.8L8.3,5.7C3.3,5-1.9,4.9-6.9,5.5l-1.4,0.2l-0.4,0.1V3.1c3-0.3,6.2-0.5,9.4-0.5     C3.4,2.7,6.1,2.8,8.7,3z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="light_00000044897804992477434110000014733005151247895712_" transform="matrix(1 0 0 1 -17.91 -113.08)">
				<polygon className="st18" points="26.3,-1.9 -26.3,-1.9 -28.4,-1.9 -28.4,1.9 28.4,1.9      28.4,-1.9    " vectorEffect="non-scaling-stroke"/>
			</g>
			</motion.g>
			<g id="desk" transform="matrix(1 0 0 1 -8.41 150.48)">
				<path className="st19" d="M-136-5h272c2.8,0,5,2.2,5,5l0,0c0,2.8-2.2,5-5,5h-272     c-2.8,0-5-2.2-5-5l0,0C-141-2.8-138.8-5-136-5z" vectorEffect="non-scaling-stroke"/>
			</g>
			<motion.g initial={{y: "-100vh"}} animate={{y: 0}} transition={{delay: .15, duration: .7, type: "tween"}}>
			<g transform="matrix(1 0 0 1 -99.37 131.55)">
				<path className="st22" d="M2.9-4.4c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9     c0-0.3-0.1-0.6-0.3-0.9C0.7-5.7,0.4-6.1,0-6.4c-0.3-0.3-0.7-0.4-1.2-0.4c-0.3,0-0.5,0.1-0.7,0.2L-2-6.5c-0.6,0.4-0.9,1-1,1.6     c-0.1,1,0.1,1.9,0.6,2.8C-2.4-2-2.3-1.8-2.2-1.6c0.8,1.1,1.7,2.1,2.7,3c1.8,1.7,3.7,3.5,4.2,6c0.1,0.3,0,0.7-0.2,0.9     C4.3,8.5,4,8.6,3.6,8.5S3.1,8.1,3.1,7.8c-0.4-2-2.1-3.6-3.7-5.1c-1.1-1-2.1-2.1-3-3.4C-3.8-0.9-3.9-1.1-4-1.3     c-0.6-1.2-0.9-2.5-0.8-3.8C-4.6-6.3-3.9-7.4-2.9-8l0.3-0.1c0.5-0.2,1-0.4,1.5-0.4c0.8,0,1.6,0.3,2.2,0.8c0.6,0.5,1.1,1,1.4,1.7     C2.8-5.5,2.9-5,2.9-4.4z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -88.58 133.68)">
				<path className="st23" d="M8.9-11.6C9-6.9,7.8,7.8,4,11.6H-4C-7.8,7.8-9-6.9-8.9-11.6H8.9z" vectorEffect="non-scaling-stroke"/>
			</g>
			</motion.g>
			<g transform="matrix(1 0 0 1 -87.55 109.32)">
				<path className="st24" d="M-0.2,6.2c-0.6-0.6-3-3.5,0-6.2c3-2.7,1.9-3.8,0.1-6.2" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -83.35 113.81)">
				<path className="st24" d="M-0.2,6.2c-0.6-0.6-3-3.5,0-6.2c3-2.7,1.9-3.8,0.1-6.2" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 -93.46 113.81)">
				<path className="st25" d="M-0.2,6.2c-0.6-0.6-3-3.5,0-6.2c3-2.7,1.9-3.8,0.1-6.2" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="pc" transform="matrix(1 0 0 1 33.19 135.03)">
				<polygon className="st26" points="17.7,7.9 15.2,-7.9 -15.2,-7.9 -17.7,7.9    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 33.2 117.94)">
				<path className="st27" d="M-95.8,11c-1.8,0-3.3-1.5-3.3-3.3V-11H99.1V7.7c0,1.8-1.5,3.3-3.3,3.3     H-95.8z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 33.18 117.96)">
				<path className="st19" d="M98.9-10.8V7.7c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.4,0.9-2.2,0.9H-95.8     c-1.7,0-3-1.4-3-3.1v-18.5H98.9 M99.4-11.3H-99.4v19c0,2,1.6,3.6,3.6,3.6H95.9c0.9,0,1.8-0.4,2.5-1s1-1.6,1-2.5V-11.3z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 33.2 53.74)">
				<path className="st19" d="M93.9-54.3H-93.9c-1.4,0-2.8,0.6-3.9,1.6s-1.6,2.4-1.6,3.8V54.3H99.4     V-48.9c0-1.4-0.6-2.8-1.6-3.8S95.4-54.3,93.9-54.3z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="pc_00000088127773178771939890000002718096293030774964_" transform="matrix(1 0 0 1 33.29 53.78)">
				<rect className="st28" height="95.7" width="184.3" vectorEffect="non-scaling-stroke" x="-92.1" y="-47.9"/>
			</g>
            <motion.g className="webpage" clipPath="url(#clippy)">
	<g id="website">
		<rect height="87.8" width="52.47" fill="#f0f0f2" rx="3.57" x="133.88" y="270"/>
		<rect height="28.15" width="40.59" fill="#f2c5c2" rx="3.22" x="139.83" y="275.67"/>
		<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .4}} fill="none" opacity=".68" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="144.8" x2="161.56" y1="299.31" y2="299.31"/>
		<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .3}} fill="none" opacity=".68" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="144.8" x2="169.32" y1="294.69" y2="294.69"/>
		<motion.path variants={windowVariants2} initial="hidden"  animate={ scrolled ? "visible" : "hidden" } style={{"mixBlendMode":"overlay"}} d="M154.57 284.27a5.58 5.58 0 11-5.58-5.35 5.46 5.46 0 015.58 5.35z" fill="#fff" opacity=".48"/>
		<g>
			<rect height="49.32" width="37.69" fill="#bdc0f4" rx="3.34" x="139.83" y="308.41"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: 1.1}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="163.05" y1="348.39" y2="348.39"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: 1}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="168.46" y1="343.39" y2="343.39"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .95}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="163.05" y1="338.39" y2="338.39"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .9}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="157.69" y1="333.39" y2="333.39"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .8}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="163.05" y1="328.77" y2="328.77"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .7}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="168.46" y1="323.91" y2="323.91"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .6}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="172.42" y1="318.62" y2="318.62"/>
			<motion.line variants={opacityVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" } transition={{delay: .5}} fill="none" opacity=".81" stroke="#fff" strokeLinecap="round" strokeWidth="1.2" x1="146.12" x2="168.46" y1="313.32" y2="313.32"/>
		</g>

	</g>

</motion.g>
			<g id="pc_00000026843142186350743910000008929179898517251991_" transform="matrix(1 0 0 1 33.2 144.08)">
				<rect className="st29" height="2.4" width="64.3" vectorEffect="non-scaling-stroke" x="-32.1" y="-1.2"/>
			</g>
			<g id="pc_00000072987691415787106770000016562058555726785937_" transform="matrix(1 0 0 1 33.19 118.81)">
				<ellipse className="st30" cx="0" cy="0" rx="3.8" ry="3.8" vectorEffect="non-scaling-stroke"/>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_1_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000144295694245607745440000006811060629146903685_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="vs-code" style={{"clipPath":"url(#SVGID_00000144295694245607745440000006811060629146903685_)"}} transform="matrix(1 0 0 1 65.73 53.78)">
					<rect className="st32" height="95.7" width="119.6" vectorEffect="non-scaling-stroke" x="-59.8" y="-47.9"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000183218552674631476720000010472864757637045413_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000036242880917487808950000000312966908816303291_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="vs-code_00000183927369642101639490000002147482270174449028_" style={{"clipPath":"url(#SVGID_00000036242880917487808950000000312966908816303291_)"}} transform="matrix(1 0 0 1 65.73 9.13)">
					<rect className="st34" height="6.4" width="119.6" vectorEffect="non-scaling-stroke" x="-59.8" y="-3.2"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000009589559151911914780000002707970181362599814_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000036213723549443190380000006092905777058862466_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="vs-code_00000145755936664660035500000005619432020864533632_" style={{"clipPath":"url(#SVGID_00000036213723549443190380000006092905777058862466_)"}} transform="matrix(1 0 0 1 11.74 9.13)">
					<ellipse className="st36" cx="0" cy="0" rx="1.4" ry="1.4" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000075145219097312141400000014533330649440133267_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000139285641062887136060000015878638449918511039_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="vs-code_00000119837316242225514590000006862676900562258092_" style={{"clipPath":"url(#SVGID_00000139285641062887136060000015878638449918511039_)"}} transform="matrix(1 0 0 1 16.95 9.13)">
					<ellipse className="st38" cx="0" cy="0" rx="1.4" ry="1.4" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000049223100388278259260000008222679988502297022_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000036231901741879751220000012134926388776180150_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="vs-code_00000183244283456426361360000005251714952579334569_" style={{"clipPath":"url(#SVGID_00000036231901741879751220000012134926388776180150_)"}} transform="matrix(1 0 0 1 21.9 9.13)">
					<ellipse className="st40" cx="0" cy="0" rx="1.4" ry="1.4" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000026877891859851214650000016008074719346305183_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000163032046630800264390000012261787259010644112_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g style={{"clipPath":"url(#SVGID_00000163032046630800264390000012261787259010644112_)"}} transform="matrix(1 0 0 1 15.56 56.57)">
					<path className="st42" d="M-2.7-38.8c1.2-0.1,1.5-0.2,1.5-0.4c0-0.2-0.3-0.4-1.2-0.6V-40      l1.1-0.9h-1.3v-0.7h2.1l0.1,0.7l-1.1,0.8c0.8,0.2,1.1,0.5,1.1,0.9c0,0.6-0.7,1.1-2.2,1.1L-2.7-38.8z M0.3-38.1l-0.1-0.6      c1-0.7,1.5-1.2,1.5-1.6s-0.3-0.5-1.4-0.5l0.1-0.7c1.6,0,2.1,0.5,2.1,1c0,0.5-0.5,1.1-1.3,1.8h1.4v0.7L0.3-38.1z M-2.7-32.1      c1.2-0.1,1.5-0.2,1.5-0.4s-0.3-0.4-1.2-0.5v-0.3l1.1-0.9h-1.3v-0.7h2.1l0.1,0.7l-1.1,0.8c0.8,0.2,1.1,0.5,1.1,0.9      c0,0.6-0.7,1.1-2.2,1.1L-2.7-32.1z M0.3-31.5l-0.1-0.6c1-0.7,1.5-1.2,1.5-1.6c0-0.5-0.3-0.5-1.4-0.5L0.4-35c1.6,0,2.1,0.5,2.1,1      S2-32.8,1.2-32.2h1.4v0.7L0.3-31.5z M-2.7-25.5c1.2-0.1,1.5-0.2,1.5-0.4s-0.3-0.4-1.2-0.5v-0.3l1.1-0.9h-1.3v-0.7h2.1l0.1,0.7      l-1.1,0.8c0.8,0.2,1.1,0.5,1.1,0.9c0,0.6-0.7,1.1-2.2,1.1L-2.7-25.5z M2.4-25.4v0.6H1.7v-0.6H0.3c0-1,0.1-1.9,0.3-2.9l0.8,0.1      l-0.6,2.2h0.8v-1.1l0.7-0.1v1.2h0.4l-0.1,0.7L2.4-25.4z M-2.7-18.8c1.2-0.1,1.5-0.2,1.5-0.4c0-0.2-0.3-0.4-1.2-0.5v-0.4l1.1-0.9      h-1.3v-0.7h2.1l0.1,0.7l-1.1,0.8c0.8,0.2,1.1,0.5,1.1,0.9c0,0.6-0.7,1.1-2.2,1.1L-2.7-18.8z M0.4-18.1v-0.7      c1.2-0.1,1.5-0.2,1.5-0.5s-0.4-0.4-1.4-0.5l0.1-1.8h2l-0.1,0.7H1.2v0.6c1.1,0.2,1.4,0.6,1.4,1C2.6-18.7,1.9-18.2,0.4-18.1z       M-2.7-12.2c1.2-0.1,1.5-0.2,1.5-0.4c0-0.2-0.3-0.4-1.2-0.5v-0.3l1.1-0.9h-1.3V-15h2.1l0.1,0.7l-1.1,0.8      c0.8,0.2,1.1,0.5,1.1,0.9c0,0.6-0.7,1-2.2,1.1L-2.7-12.2z M0.2-12.8c0-1,0.6-1.7,1.8-2.3l0.3,0.6c-0.8,0.3-1.2,0.6-1.3,1      c0.8-0.4,1.7-0.1,1.7,0.8c0,0.5-0.3,0.9-0.7,1.1c-0.4,0.2-0.9,0.2-1.3-0.1C0.3-11.9,0.1-12.4,0.2-12.8L0.2-12.8z M2-12.6      c0-0.5-0.4-0.7-1-0.4v0.1c0,0.6,0.2,0.8,0.6,0.8C1.8-12.1,2-12.2,2-12.6z M-2.7-5.5c1.2-0.1,1.5-0.2,1.5-0.4      c0-0.2-0.3-0.4-1.2-0.6v-0.3l1.1-0.9h-1.3v-0.7h2.1l0.1,0.7l-1.1,0.8C-0.8-6.7-0.5-6.3-0.5-6c0,0.6-0.7,1.1-2.2,1.1L-2.7-5.5z       M0.6-4.9c0.3-0.9,0.8-1.8,1.3-2.7H0.3l0.1-0.7h2.3v0.7c-0.5,0.9-1,1.8-1.3,2.8L0.6-4.9z M-2.7,1.1C-1.6,1-1.2,0.9-1.2,0.7      s-0.3-0.4-1.2-0.5v-0.3L-1.4-1h-1.3v-0.7h2.1L-0.6-1l-1.1,0.8C-0.8,0-0.5,0.3-0.5,0.7c0,0.6-0.7,1.1-2.2,1.1L-2.7,1.1z M0.2,0.9      c0.4-0.1,0.6-0.5,0.6-0.9c0-0.4-0.2-0.7-0.6-0.9c0-0.5,0.4-1,1.2-1c0.6,0,1.1,0.3,1.1,0.8c0,0.4-0.3,0.7-0.6,0.9      c0.4,0.2,0.7,0.5,0.7,0.9c0,0.4-0.5,1-1.3,1S0.2,1.5,0.2,0.9z M1.9,0.9c0-0.2-0.3-0.4-0.7-0.6C1.1,0.4,1,0.6,0.9,0.8      c0,0.2,0.1,0.4,0.5,0.4C1.8,1.3,1.9,1.1,1.9,0.9L1.9,0.9z M1.6-0.3c0.2-0.1,0.3-0.3,0.3-0.5c0-0.2-0.1-0.4-0.4-0.4      C1.1-1.1,1-1,1-0.9S1.3-0.5,1.6-0.3L1.6-0.3z M-2.7,7.8c1.2-0.1,1.5-0.2,1.5-0.4c0-0.2-0.3-0.4-1.2-0.5V6.5l1.1-0.9h-1.3V5h2.1      l0.1,0.7l-1.1,0.8C-0.8,6.6-0.5,7-0.5,7.3c0,0.6-0.7,1.1-2.2,1.1L-2.7,7.8z M0.5,7.9c0.8-0.3,1.2-0.6,1.3-1      C1.1,7.3,0.2,6.9,0.2,6.1c0-0.5,0.3-0.9,0.7-1.1c0.4-0.2,0.9-0.2,1.3,0.1c0.4,0.3,0.6,0.7,0.5,1.2c0,1-0.6,1.7-1.8,2.3L0.5,7.9z       M1.9,6.4L1.9,6.4c0-0.7-0.2-0.9-0.6-0.9C1.1,5.5,0.9,5.7,0.9,6C0.9,6.5,1.3,6.7,1.9,6.4z M-0.6,14.5V15h-0.7v-0.6h-1.4      c0-1,0.1-1.9,0.3-2.9l0.8,0.1l-0.6,2.2h0.8v-1.1l0.7-0.1v1.2h0.4l-0.1,0.7H-0.6z M0.1,13.4c0-1.1,0.5-1.8,1.3-1.8      s1.3,0.6,1.3,1.7c0,1.1-0.5,1.9-1.3,1.9S0.1,14.5,0.1,13.4z M0.9,13.3l1.1-0.5c-0.1-0.4-0.2-0.6-0.5-0.6      C1.2,12.2,0.9,12.5,0.9,13.3L0.9,13.3z M2,13.4l-1,0.5c0.1,0.4,0.2,0.6,0.5,0.6C1.8,14.5,2,14.1,2,13.4z M-0.6,21.1v0.6h-0.7      v-0.6h-1.4c0-1,0.1-1.9,0.3-2.9l0.8,0.1l-0.6,2.2h0.8v-1.1l0.7-0.1v1.2h0.4l-0.1,0.7H-0.6z M0.3,21.7V21h0.9v-1.8H0.4v-0.6      l0.8-0.1v-0.4L2,18.1V21h0.8l-0.1,0.6L0.3,21.7z M-0.6,27.8v0.6h-0.7v-0.6h-1.4c0-1,0.1-1.9,0.3-2.9l0.8,0l-0.6,2.1h0.8V26      l0.7-0.1v1.1h0.4l-0.1,0.7H-0.6z M0.3,28.3l-0.1-0.6c1-0.7,1.5-1.2,1.5-1.6s-0.3-0.5-1.4-0.5l0.1-0.7c1.6,0,2.1,0.5,2.1,1.1      c0,0.6-0.5,1.1-1.3,1.8h1.4v0.7H0.3z M-0.6,34.4V35h-0.7v-0.6h-1.4c0-1,0.1-1.9,0.3-2.9l0.8,0.1l-0.6,2.2h0.8v-1.1l0.7-0.1v1.1      h0.4l-0.1,0.7L-0.6,34.4z M0.3,34.4c1.2-0.1,1.5-0.2,1.5-0.4c0-0.2-0.3-0.4-1.2-0.5v-0.3l1.1-0.9H0.4v-0.7h2l0.1,0.7L1.4,33      c0.8,0.2,1.1,0.5,1.1,0.9c0,0.6-0.7,1.1-2.2,1.1V34.4z M-0.6,41v0.6h-0.7V41h-1.4c0-1,0.1-1.9,0.3-2.9l0.8,0l-0.6,2.2h0.8v-1.1      l0.7-0.1v1.2h0.4L-0.3,41L-0.6,41z M2.4,41v0.6H1.7V41H0.3c0-1,0.1-1.9,0.3-2.9l0.8,0l-0.6,2.2h0.8v-1.1l0.7-0.1v1.2h0.4L2.7,41      L2.4,41z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
             {/* Lines start */}
        <motion.g initial="hidden" animate={ scrolled ? "visible" : "hidden" }>
			<motion.g variants={widthVariants} transition={{delay: .7, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000008866688838130603100000017718271304592527270_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000036931972966194750700000012650919390915750311_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code" style={{"clipPath":"url(#SVGID_00000036931972966194750700000012650919390915750311_)"}} transform="matrix(1 0 0 1 58.78 17.05)">
					<rect className="st44" height="3.1" width="71" vectorEffect="non-scaling-stroke" x="-35.5" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: .8, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000102535096149015356440000010075432197329224341_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000036943953014037678180000008529031465635379628_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000113344129119095676640000013642293258138020505_" style={{"clipPath":"url(#SVGID_00000036943953014037678180000008529031465635379628_)"}} transform="matrix(1 0 0 1 61.08 23.64)">
					<rect className="st46" height="3.1" width="75.6" vectorEffect="non-scaling-stroke" x="-37.8" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: .9, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000030459021416546375950000013252467186578115242_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000023240915304181884610000005744898997115451019_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000021080351303217109790000007792163805465080232_" style={{"clipPath":"url(#SVGID_00000023240915304181884610000005744898997115451019_)"}} transform="matrix(1 0 0 1 54.09 30.29)">
					<rect className="st48" height="3.1" width="61.6" vectorEffect="non-scaling-stroke" x="-30.8" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000183242032856894569160000003864136375246257852_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000002376847253952349800000012219523262325165246_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000092444200747958365450000006769197891967552182_" style={{"clipPath":"url(#SVGID_00000002376847253952349800000012219523262325165246_)"}} transform="matrix(1 0 0 1 49.64 37)">
					<rect className="st50" height="3.1" width="52.7" vectorEffect="non-scaling-stroke" x="-26.3" y="-1.5"/>
				</g>
        </motion.g>
 			<motion.g variants={widthVariants} transition={{delay: 1.1, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000170267368249192094600000017727847311536349063_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000094600528578359611000000011380892836013456820_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000100362964700964789630000005406595669673355691_" style={{"clipPath":"url(#SVGID_00000094600528578359611000000011380892836013456820_)"}} transform="matrix(1 0 0 1 45.14 43.58)">
					<rect className="st52" height="3.1" width="43.7" vectorEffect="non-scaling-stroke" x="-21.8" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.2, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000113334367487595615910000005174261489006719409_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000024717202463705672560000013551218726759921841_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000030444515951234564500000012710294401998736306_" style={{"clipPath":"url(#SVGID_00000024717202463705672560000013551218726759921841_)"}} transform="matrix(1 0 0 1 59.84 50.28)">
					<rect className="st54" height="3.1" width="73.1" vectorEffect="non-scaling-stroke" x="-36.5" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.3, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000174569005434180273490000000427747360769914755_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000183237716019777515370000004138708566390868105_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000022546286688731928240000017679625254640438926_" style={{"clipPath":"url(#SVGID_00000183237716019777515370000004138708566390868105_)"}} transform="matrix(1 0 0 1 66.16 57.14)">
					<rect className="st56" height="3.1" width="85.7" vectorEffect="non-scaling-stroke" x="-42.9" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.4, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000110434774904011965910000018182724726964906927_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000089563971881863878340000003260404503881898119_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000120534519968279665490000012982031234872384410_" style={{"clipPath":"url(#SVGID_00000089563971881863878340000003260404503881898119_)"}} transform="matrix(1 0 0 1 59.07 63.58)">
					<rect className="st58" height="3.1" width="71.5" vectorEffect="non-scaling-stroke" x="-35.8" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.5, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000182504004813180178200000014570331771194527639_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000181056830347687647650000013369211508519223990_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000177461412486121740720000005017857325957558668_" style={{"clipPath":"url(#SVGID_00000181056830347687647650000013369211508519223990_)"}} transform="matrix(1 0 0 1 57.06 70.22)">
					<rect className="st60" height="3.1" width="67.5" vectorEffect="non-scaling-stroke" x="-33.8" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.6, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000008137389799883866450000012177355751989452442_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000109709161540076485110000012861485090928833683_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000169523510976137661580000010414172739634664854_" style={{"clipPath":"url(#SVGID_00000109709161540076485110000012861485090928833683_)"}} transform="matrix(1 0 0 1 39.35 76.81)">
					<rect className="st62" height="3.1" width="32.1" vectorEffect="non-scaling-stroke" x="-16" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.7, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000084521734187395912060000012880249985573408907_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000001637230628285634200000000070392336110502813_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000149359546608713194580000006019101228906610338_" style={{"clipPath":"url(#SVGID_00000001637230628285634200000000070392336110502813_)"}} transform="matrix(1 0 0 1 70.04 83.47)">
					<rect className="st64" height="3.1" width="93.5" vectorEffect="non-scaling-stroke" x="-46.7" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.8, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000128481030164355460440000017425665608194441099_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000078747226468036611350000004915046208729364610_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000045581594065117910600000017281658388853428653_" style={{"clipPath":"url(#SVGID_00000078747226468036611350000004915046208729364610_)"}} transform="matrix(1 0 0 1 57.06 90.11)">
					<rect className="st66" height="3.1" width="67.5" vectorEffect="non-scaling-stroke" x="-33.8" y="-1.5"/>
				</g>
			</motion.g>
			<motion.g variants={widthVariants} transition={{delay: 1.9, duration: .9}}>
				<defs>
					<rect height="209.7" id="SVGID_00000055671208706157892330000000624641115276063149_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000074399771989809758090000004529444099353349565_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="code_00000126296924520157501660000009373225836498788024_" style={{"clipPath":"url(#SVGID_00000074399771989809758090000004529444099353349565_)"}} transform="matrix(1 0 0 1 48.2 96.77)">
					<rect className="st68" height="3.1" width="50" vectorEffect="non-scaling-stroke" x="-25" y="-1.5"/>
				</g>
			</motion.g>
       </motion.g>
            {/* Lines End */}
            <motion.g variants={windowVariants} initial="hidden" animate={ scrolled ? "visible" : "hidden" }>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000150792564494447130840000014883169700731803285_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000130624576656877129670000005671708579079136670_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="iterm" style={{"clipPath":"url(#SVGID_00000130624576656877129670000005671708579079136670_)"}} transform="matrix(1 0 0 1 96.81 78.8)">
					<rect className="st30" height="38.6" width="48.7" vectorEffect="non-scaling-stroke" x="-24.4" y="-19.3"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000106857528456322000930000005125107064523261886_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000079479221659621910940000010789304900147441536_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g style={{"clipPath":"url(#SVGID_00000079479221659621910940000010789304900147441536_)"}} transform="matrix(1 0 0 1 96.76 58.19)">
					<path className="st71" d="M-23.7-2.6h47.2c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.3,0.4,0.3,0.6v4.4      h-48.8v-4.5C-24.4-2.3-24.1-2.6-23.7-2.6z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000175312748426461130910000014208092473677518261_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000164476411690501307390000014412663057287212202_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="iterm_00000145744970693831856280000013193894883097175740_" style={{"clipPath":"url(#SVGID_00000164476411690501307390000014412663057287212202_)"}} transform="matrix(1 0 0 1 75.15 58.46)">
					<circle className="st36" cx="0" cy="0" r="1" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000136374118222853597090000006235271705331295368_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000103982633001332589090000008841877557759250607_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="iterm_00000023971615292143198990000012637165273277711250_" style={{"clipPath":"url(#SVGID_00000103982633001332589090000008841877557759250607_)"}} transform="matrix(1 0 0 1 79.04 58.46)">
					<circle className="st38" cx="0" cy="0" r="1" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<rect height="209.7" id="SVGID_00000144303750195795222340000006650036828844732336_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000057139378392452307370000018059227849310386872_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<g id="iterm_00000039824216967967433880000007768717211537050038_" style={{"clipPath":"url(#SVGID_00000057139378392452307370000018059227849310386872_)"}} transform="matrix(1 0 0 1 82.75 58.46)">
					<circle className="st40" cx="0" cy="0" r="1" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
            </motion.g>
			<g> 
				<defs>
					<rect height="209.7" id="SVGID_00000140716697420861607950000006288679967197049532_" width="403.6" x="-168.5" y="-51"/>
				</defs>
				<clipPath id="SVGID_00000158743101332037790460000014055144494510433977_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51"/>
				</clipPath>
				<motion.g initial={{opacity: 0}} transition={{delay: 2.1}} animate={ scrolled ? {opacity: 1} : {opacity: 0} } style={{"clipPath":"url(#SVGID_00000158743101332037790460000014055144494510433977_)"}} transform="matrix(1 0 0 1 77.7 66.4)">
					<path className="st76" d="M-0.8,2c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.3      L0.2,0l-1.4-1.3c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.3C-1-1.9-0.9-2-0.8-2c0.1,0,0.2,0,0.3,0.1l1.7,1.6C1.2-0.2,1.2-0.1,1.2,0      c0,0.1,0,0.2-0.1,0.3l-1.7,1.6C-0.6,1.9-0.7,2-0.8,2z" vectorEffect="non-scaling-stroke"/>
				</motion.g>
			</g>
			<motion.g variants={windowVariants} transition={{delay: 2}} initial="hidden" animate={ scrolled ? "visible" : "hidden" }>
				<defs>
					<rect height="209.7" id="SVGID_00000035518033331834917350000009081568889596101801_" width="403.6" x="-168.5" y="-51.1"/>
				</defs>
				<clipPath id="SVGID_00000127729963397617561300000012348105695866019256_">
					<rect height="209.7" style={{"overflow":"visible"}} width="403.6" x="-168.5" y="-51.1"/>
				</clipPath>
				<motion.g  variants={slashVariants} animate="animation" style={{"clipPath":"url(#SVGID_00000127729963397617561300000012348105695866019256_)"}} transform="matrix(1 0 0 1 80.48 67.96)">
					<path className="st76" d="M1.6,0c0-0.1,0-0.2-0.1-0.3C1.4-0.4,1.3-0.4,1.2-0.4h-2.4      c-0.1,0-0.3,0.1-0.3,0.2c-0.1,0.1-0.1,0.3,0,0.4c0.1,0.1,0.2,0.2,0.3,0.2h2.4c0.1,0,0.2,0,0.3-0.1C1.6,0.2,1.6,0.1,1.6,0z" vectorEffect="non-scaling-stroke"/>
				</motion.g>
			</motion.g>
			<motion.g className="gotcha">
				<defs>
					<polygon id="SVGID_00000178168195395087263600000017485775195208033719_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000015334712932927014830000011084002287003071630_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000136398751817612805120000002481152799670246580_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000015331537790979047440000017443484897864322702_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000111156344665404328700000000797299671591593905_" style={{"clipPath":"url(#SVGID_00000015331537790979047440000017443484897864322702_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000054259019786854986850000007815020802542298240_" style={{"clipPath":"url(#SVGID_00000111156344665404328700000000797299671591593905_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website" style={{"clipPath":"url(#SVGID_00000054259019786854986850000007815020802542298240_)"}} transform="matrix(1 0 0 1 -27.13 -15.63)">
					<path className="st81" d="M-22.7-121.1h45.3c2,0,3.6,1.6,3.6,3.6v235c0,2-1.6,3.6-3.6,3.6h-45.3      c-2,0-3.6-1.6-3.6-3.6v-235C-26.2-119.5-24.6-121.1-22.7-121.1z" vectorEffect="non-scaling-stroke"/>
				</g>
			</motion.g>
			<g>
				<defs>
					<polygon id="SVGID_00000058555372807196953750000013617471934697021577_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000126282453376813992190000009710799424365152157_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000103977930437576999890000012067477953377653927_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000060728513150809623050000009608814214342672541_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000091700842687376794770000008494546491209103276_" style={{"clipPath":"url(#SVGID_00000060728513150809623050000009608814214342672541_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000000935632941410865520000003128146594862478488_" style={{"clipPath":"url(#SVGID_00000091700842687376794770000008494546491209103276_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000134232148468844180660000008034341840844001413_" style={{"clipPath":"url(#SVGID_00000000935632941410865520000003128146594862478488_)"}} transform="matrix(1 0 0 1 -29.39 -123.29)">
					<line className="st85" vectorEffect="non-scaling-stroke" x1="-16.2" x2="16.2" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000044885438577621234660000012283316394805273985_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000044874290654271733700000014850533736030937777_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000143606607959824058620000010464982121698438558_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000085208771475135378620000016962211493861562510_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000101813059441251316740000014987037981659281599_" style={{"clipPath":"url(#SVGID_00000085208771475135378620000016962211493861562510_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000039123196631158806020000009140260545428309640_" style={{"clipPath":"url(#SVGID_00000101813059441251316740000014987037981659281599_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000006688780321467999320000014164059287094984867_" style={{"clipPath":"url(#SVGID_00000039123196631158806020000009140260545428309640_)"}} transform="matrix(1 0 0 1 -26.52 -118)">
					<line className="st85" vectorEffect="non-scaling-stroke" x1="-19.1" x2="19" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000106138812337518747740000007109943431780658565_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000028303684021634121050000000678258451000252570_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000149361638490410155970000013756458348354184618_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000016049673404186447620000012583664660414928000_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000113320567350359951760000013497327483057216645_" style={{"clipPath":"url(#SVGID_00000016049673404186447620000012583664660414928000_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000010302094954638524850000003644518588925679512_" style={{"clipPath":"url(#SVGID_00000113320567350359951760000013497327483057216645_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000178207098247258540900000000944900159000690572_" style={{"clipPath":"url(#SVGID_00000010302094954638524850000003644518588925679512_)"}} transform="matrix(1 0 0 1 -29.39 -112.7)">
					<line className="st85" vectorEffect="non-scaling-stroke" x1="-16.2" x2="16.2" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000130606722967676848450000006523693237373303696_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000061443358887964443950000006707029931442030507_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000054945972154444865710000015290610285527743387_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000027607022479605530100000004492046136673943728_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000157276168938714591380000007436358879994391185_" style={{"clipPath":"url(#SVGID_00000027607022479605530100000004492046136673943728_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000138538780197094396510000005148340347826603689_" style={{"clipPath":"url(#SVGID_00000157276168938714591380000007436358879994391185_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000053532888336560326850000005741594406036225670_" style={{"clipPath":"url(#SVGID_00000138538780197094396510000005148340347826603689_)"}} transform="matrix(1 0 0 1 -27.11 -90.36)">
					<path className="st95" d="M-17.1-14.1h34.2c1.8,0,3.2,1.4,3.2,3.2v21.7c0,1.8-1.4,3.2-3.2,3.2      h-34.2c-1.8,0-3.2-1.4-3.2-3.2v-21.7C-20.3-12.6-18.9-14.1-17.1-14.1z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000175281675600312040830000000734679100770900914_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000119082619517262152610000013941741391380783021_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000038376047158307717230000000798495032651032221_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000096771561284349153200000003241468033962679682_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000014633563024641715290000008726533923567408534_" style={{"clipPath":"url(#SVGID_00000096771561284349153200000003241468033962679682_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000168825182700381432580000017619626186068002463_" style={{"clipPath":"url(#SVGID_00000014633563024641715290000008726533923567408534_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g style={{"clipPath":"url(#SVGID_00000168825182700381432580000017619626186068002463_)"}} transform="matrix(1 0 0 1 -38.24 -95.6)">
					<path className="st99" d="M5.6-0.2C5.7,2,4.4,4.1,2.3,5.1S-2.2,5.6-3.9,4C-5.5,2.5-6,0-5.2-2.1      S-2.3-5.6,0-5.6c1.4,0,2.9,0.5,3.9,1.5C4.9-3.1,5.6-1.7,5.6-0.2z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000051379586411456175400000014374204773744613561_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000129907754246426916750000005234132014144177545_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000103261179453549236610000007653603901536703622_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000041255366557451182820000009405354672104813494_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000049195754756125927230000004056325295972938656_" style={{"clipPath":"url(#SVGID_00000041255366557451182820000009405354672104813494_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000018207049480960123320000017447334409541758906_" style={{"clipPath":"url(#SVGID_00000049195754756125927230000004056325295972938656_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000007416716833185830740000009291923684258490811_" style={{"clipPath":"url(#SVGID_00000018207049480960123320000017447334409541758906_)"}} transform="matrix(1 0 0 1 -34.05 -80.79)">
					<line className="st103" vectorEffect="non-scaling-stroke" x1="-8.4" x2="8.4" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000110461634131616127820000012333996360499184804_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000181781204736298448790000011450208642810634381_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000145018829796903731360000006447024580974936468_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000084505095646255379120000006775227988825106844_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000153692008855542805840000013284089455827671429_" style={{"clipPath":"url(#SVGID_00000084505095646255379120000006775227988825106844_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000054954312860138737740000007671517179019269807_" style={{"clipPath":"url(#SVGID_00000153692008855542805840000013284089455827671429_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000064327153928115868020000000435401385498082211_" style={{"clipPath":"url(#SVGID_00000054954312860138737740000007671517179019269807_)"}} transform="matrix(1 0 0 1 -30.17 -85.41)">
					<line className="st103" vectorEffect="non-scaling-stroke" x1="-12.3" x2="12.3" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000011753591186961866800000001404194467139479436_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000122708819602610894190000010650548614075542148_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000176027699078832197750000005887632454027735986_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000067943760266411801680000014113305812455359150_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000083088819411830329610000005812089220939262399_" style={{"clipPath":"url(#SVGID_00000067943760266411801680000014113305812455359150_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000058567090932046490630000003896312440753562788_" style={{"clipPath":"url(#SVGID_00000083088819411830329610000005812089220939262399_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000152248810514601450270000002613086584678373250_" style={{"clipPath":"url(#SVGID_00000058567090932046490630000003896312440753562788_)"}} transform="matrix(1 0 0 1 -28.56 -47.03)">
					<path className="st110" d="M-15.5-24.7h31c1.8,0,3.3,1.5,3.3,3.3v42.6c0,1.8-1.5,3.3-3.3,3.3      h-31c-1.8,0-3.3-1.5-3.3-3.3v-42.6C-18.8-23.2-17.3-24.7-15.5-24.7z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000050655793271209214920000011215683827188458901_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000106124203077147625660000006860440448886674595_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000013871392104901807780000016987274625432755626_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000044137617828552236080000002677737867622860449_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000008836984130979601010000014861415266160604340_" style={{"clipPath":"url(#SVGID_00000044137617828552236080000002677737867622860449_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000097471400457575546470000014747460333136461997_" style={{"clipPath":"url(#SVGID_00000008836984130979601010000014861415266160604340_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000123428382443435429920000013491065720263393182_" style={{"clipPath":"url(#SVGID_00000097471400457575546470000014747460333136461997_)"}} transform="matrix(1 0 0 1 -35.34 -46.71)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-5.8" x2="5.8" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000038394643689938363070000004514685240836347577_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000024705226732720267360000007634306941067018898_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000152262162650063321460000002026159795546115229_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000116237833858924566670000000727788978533474702_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000041259746972134553770000016797256048639108236_" style={{"clipPath":"url(#SVGID_00000116237833858924566670000000727788978533474702_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000007408649962018659020000006436219468712420031_" style={{"clipPath":"url(#SVGID_00000041259746972134553770000016797256048639108236_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000163795889682529390040000015153836153693977747_" style={{"clipPath":"url(#SVGID_00000007408649962018659020000006436219468712420031_)"}} transform="matrix(1 0 0 1 -32.65 -51.33)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-8.5" x2="8.5" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000153680868121548565580000005868902630266445992_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000137114339596193154200000005212306405678819483_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000178184052872518253460000005019697447026581653_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000178904300920932896910000014125666836833191049_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000095296936093071097680000007583356511925265801_" style={{"clipPath":"url(#SVGID_00000178904300920932896910000014125666836833191049_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000139291075887277841690000016161690806946573480_" style={{"clipPath":"url(#SVGID_00000095296936093071097680000007583356511925265801_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000109719792529947651670000011624785665454282139_" style={{"clipPath":"url(#SVGID_00000139291075887277841690000016161690806946573480_)"}} transform="matrix(1 0 0 1 -29.95 -56.19)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-11.2" x2="11.2" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000145047241743019058060000014675508458907267208_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000054987190668689385930000016920219674519431598_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000108287708889168975960000013788994202570431887_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000110430000328788816890000009446810655670328475_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000019644805065560477590000003270358754774152378_" style={{"clipPath":"url(#SVGID_00000110430000328788816890000009446810655670328475_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000051379508562206039940000005062769469622256033_" style={{"clipPath":"url(#SVGID_00000019644805065560477590000003270358754774152378_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000065032456213115635150000004388013117266019236_" style={{"clipPath":"url(#SVGID_00000051379508562206039940000005062769469622256033_)"}} transform="matrix(1 0 0 1 -27.97 -61.48)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-13.2" x2="13.1" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000163065860049845251200000000696989623990680747_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000023995558885535792020000009503630677813720454_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000169531287427512925490000006636526808480828570_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000008129344413187342480000006521082462845316507_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000016759905332293075100000001409466946554243231_" style={{"clipPath":"url(#SVGID_00000008129344413187342480000006521082462845316507_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000005234266214445854580000001576264780712698762_" style={{"clipPath":"url(#SVGID_00000016759905332293075100000001409466946554243231_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000072255846009612315490000018436256922378550717_" style={{"clipPath":"url(#SVGID_00000005234266214445854580000001576264780712698762_)"}} transform="matrix(1 0 0 1 -29.95 -66.78)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-11.2" x2="11.2" y1="0" y2="0"/>
				</g>
			</g>
			<motion.g id="pages">
				<defs>
					<polygon id="SVGID_00000000221411762664289200000011872361335249131945_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000091707389759155718170000012126654683248434616_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000100361056450872700970000012403754794252103044_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000000939667346970447530000008017141510415022998_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000127013566559794180480000005844640797207658139_" style={{"clipPath":"url(#SVGID_00000000939667346970447530000008017141510415022998_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000078009623151551268080000009670422573454883481_" style={{"clipPath":"url(#SVGID_00000127013566559794180480000005844640797207658139_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000153696486181778203210000017047385172566660253_" style={{"clipPath":"url(#SVGID_00000078009623151551268080000009670422573454883481_)"}} transform="matrix(1 0 0 1 -27.11 12.95)">
					<path className="st130" d="M-17.1-29.2h34.2c1.8,0,3.2,1.4,3.2,3.2v52c0,1.8-1.4,3.2-3.2,3.2      h-34.2c-1.8,0-3.2-1.4-3.2-3.2v-52C-20.3-27.8-18.9-29.2-17.1-29.2z" vectorEffect="non-scaling-stroke"/>
				</g>
			</motion.g>
			<g>
				<defs>
					<polygon id="SVGID_00000121277148467850766910000004150376272959215492_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000012458156567303710120000014394525442651217063_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000164474546268831291630000017769597068492584627_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000098198226478913187750000012988028314443350945_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000061448464261399358860000002534032594945952165_" style={{"clipPath":"url(#SVGID_00000098198226478913187750000012988028314443350945_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000084487669216199868160000015575022046736792488_" style={{"clipPath":"url(#SVGID_00000061448464261399358860000002534032594945952165_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000030470370882696955060000005093209415653652668_" style={{"clipPath":"url(#SVGID_00000084487669216199868160000015575022046736792488_)"}} transform="matrix(1 0 0 1 -35.31 34.03)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-6.9" x2="6.9" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000165214308473480379230000003120522951717621146_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000145054666811127054920000001700343920935558582_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000123427051023841906370000015248749543334213526_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000168090718887616754120000008636513600533853338_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000036960831093407329400000004919932064027119745_" style={{"clipPath":"url(#SVGID_00000168090718887616754120000008636513600533853338_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000047048571826476664800000016540816654893184434_" style={{"clipPath":"url(#SVGID_00000036960831093407329400000004919932064027119745_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000029039265236587493590000018126325381738691456_" style={{"clipPath":"url(#SVGID_00000047048571826476664800000016540816654893184434_)"}} transform="matrix(1 0 0 1 -33.22 30.4)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-9.2" x2="9.2" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000052813617354857690040000012166217623429428920_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000011016064643392807030000015043113351754660750_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000155143829211018379930000005711772910339405714_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000040532615603209148850000012273635231213515396_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000151515384679262324530000008309739975012658623_" style={{"clipPath":"url(#SVGID_00000040532615603209148850000012273635231213515396_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000126302038237276285960000005088414899980684426_" style={{"clipPath":"url(#SVGID_00000151515384679262324530000008309739975012658623_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000029016945558574084780000012934121834374275468_" style={{"clipPath":"url(#SVGID_00000126302038237276285960000005088414899980684426_)"}} transform="matrix(1 0 0 1 -31.83 26.59)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-10.8" x2="10.8" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000137089724591957223510000008192387969023161992_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000039110621086581231640000009238629008101615524_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000072960671698417083470000002407950793804312492_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000175292062933553111340000003943006495296580515_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000127749429968688369070000009757346085502300339_" style={{"clipPath":"url(#SVGID_00000175292062933553111340000003943006495296580515_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000174602643208564689980000012952848983904568484_" style={{"clipPath":"url(#SVGID_00000127749429968688369070000009757346085502300339_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000016763315675709291900000005442754829481356978_" style={{"clipPath":"url(#SVGID_00000174602643208564689980000012952848983904568484_)"}} transform="matrix(1 0 0 1 -32.5 22.82)">
					<line className="st103" vectorEffect="non-scaling-stroke" x1="-10.1" x2="10.1" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000140699078961518574330000016547422799430599341_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000110442790955966494060000007397926543585308070_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000093874764694121701150000008562238346939556784_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000007403899205377413100000004163934721096459444_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000034787775538346054220000010155366676015743416_" style={{"clipPath":"url(#SVGID_00000007403899205377413100000004163934721096459444_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000020362776611556036620000003529041424134668469_" style={{"clipPath":"url(#SVGID_00000034787775538346054220000010155366676015743416_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000120529211892579415450000013162873655873989004_" style={{"clipPath":"url(#SVGID_00000020362776611556036620000003529041424134668469_)"}} transform="matrix(1 0 0 1 -35.62 19.06)">
					<line className="st103" vectorEffect="non-scaling-stroke" x1="-6.9" x2="6.9" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000008862436841546128790000017987147180044815264_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000133497738316438261820000005654893429728382391_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000023265065315630423620000012509504140787097745_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000152232451857754619820000003039504912565596296_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000010294221046915056470000016135901699291924650_" style={{"clipPath":"url(#SVGID_00000152232451857754619820000003039504912565596296_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000068642243688900239720000003757080928342770071_" style={{"clipPath":"url(#SVGID_00000010294221046915056470000016135901699291924650_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000115491090550776748410000003554040218855835582_" style={{"clipPath":"url(#SVGID_00000068642243688900239720000003757080928342770071_)"}} transform="matrix(1 0 0 1 -27.83 0.04)">
					<path className="st99" d="M-7.8-11.6H7.7c3.8,0,6.9,3.1,6.9,6.9v9.5c0,3.8-3.1,6.9-6.9,6.9H-7.8      c-3.8,0-6.9-3.1-6.9-6.9v-9.5C-14.6-8.5-11.5-11.6-7.8-11.6z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000051371721782402796640000004772172500157816218_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000176020238598240248600000011153108774653768620_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000155138014232838158150000017506076060328825218_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000076576096280410968100000001683121074416019594_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000166653772753534800960000000605866955795457446_" style={{"clipPath":"url(#SVGID_00000076576096280410968100000001683121074416019594_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000132061978376738162490000014407446845068654997_" style={{"clipPath":"url(#SVGID_00000166653772753534800960000000605866955795457446_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000137102609781751340240000014284267105469115268_" style={{"clipPath":"url(#SVGID_00000132061978376738162490000014407446845068654997_)"}} transform="matrix(1 0 0 1 -26.95 73.8)">
					<path className="st152" d="M-16.6-20.2h33.1c1.8,0,3.3,1.5,3.3,3.3v33.8c0,1.8-1.5,3.3-3.3,3.3      h-33.1c-1.8,0-3.3-1.5-3.3-3.3v-33.8C-19.9-18.7-18.4-20.2-16.6-20.2z" vectorEffect="non-scaling-stroke"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000054247194209379049800000015630931563078000565_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000113316490090135023660000001245902765697272484_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000121248880084012394980000000350670019064504992_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000163791807698464225690000007260593906068173497_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000018234780151849321030000004612950244053466536_" style={{"clipPath":"url(#SVGID_00000163791807698464225690000007260593906068173497_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000173121567656349129210000015630452319290259860_" style={{"clipPath":"url(#SVGID_00000018234780151849321030000004612950244053466536_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000078740571878198762540000009707384053220527253_" style={{"clipPath":"url(#SVGID_00000173121567656349129210000015630452319290259860_)"}} transform="matrix(1 0 0 1 -28.41 87.56)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-11.8" x2="11.8" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000008850304318806592800000007638981553019286948_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000106129975683724536100000013747837711097119661_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000027603692644163462020000001374527006404531880_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000011003353724308529430000005886203572165521564_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000026844756739838207830000006719219509256712362_" style={{"clipPath":"url(#SVGID_00000011003353724308529430000005886203572165521564_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000139290932467923233170000006151616163782338478_" style={{"clipPath":"url(#SVGID_00000026844756739838207830000006719219509256712362_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000024680985906170823460000006081707515637636230_" style={{"clipPath":"url(#SVGID_00000139290932467923233170000006151616163782338478_)"}} transform="matrix(1 0 0 1 -26.32 83.21)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-13.9" x2="13.9" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000160901560405281107050000007041076152860524977_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000036212664937040122960000007394483875565148083_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000108990648696248864630000004488754115614359986_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000054233622083037568530000003379902387824018332_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000160883610528759373860000000959451713777055115_" style={{"clipPath":"url(#SVGID_00000054233622083037568530000003379902387824018332_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000074434650711824066470000006201786869816880780_" style={{"clipPath":"url(#SVGID_00000160883610528759373860000000959451713777055115_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000025434549020176236850000015881515014749428886_" style={{"clipPath":"url(#SVGID_00000074434650711824066470000006201786869816880780_)"}} transform="matrix(1 0 0 1 -28.41 78.87)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-11.8" x2="11.8" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000018220384015295645890000004380287465827048850_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000144305634077734075690000014658248850157694369_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000140707984306931920190000004548640957106785206_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000078759698175586371810000005958202893380815246_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000141436660455309634280000017838837303029320613_" style={{"clipPath":"url(#SVGID_00000078759698175586371810000005958202893380815246_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000029746718622849851660000000976804949161098137_" style={{"clipPath":"url(#SVGID_00000141436660455309634280000017838837303029320613_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000138568932653661916320000012572970279369963420_" style={{"clipPath":"url(#SVGID_00000029746718622849851660000000976804949161098137_)"}} transform="matrix(1 0 0 1 -34.1 74.06)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-6.1" x2="6.1" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000144339994225977596830000010887225921514100611_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000008119457699264610870000014952330975091773352_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000088108795461409108760000012702220565813228941_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000003808023971349079470000014234688892066161554_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000054951030243867656050000014599433266395532695_" style={{"clipPath":"url(#SVGID_00000003808023971349079470000014234688892066161554_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000105389637574191095880000014771858563678650271_" style={{"clipPath":"url(#SVGID_00000054951030243867656050000014599433266395532695_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000134932851627808912640000004207955656512435608_" style={{"clipPath":"url(#SVGID_00000105389637574191095880000014771858563678650271_)"}} transform="matrix(1 0 0 1 -31.27 70.27)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-8.9" x2="8.9" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000152953603622975567590000011539261345394609569_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000124872384989737317520000012149192101909351571_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000162320486822154109870000006604943530395007118_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000000209617740618256690000015799505971051265670_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000047030019215840537540000012140498479049104304_" style={{"clipPath":"url(#SVGID_00000000209617740618256690000015799505971051265670_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000085938128192646177370000017768379091117047466_" style={{"clipPath":"url(#SVGID_00000047030019215840537540000012140498479049104304_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000183930105087975051930000009752688141422129566_" style={{"clipPath":"url(#SVGID_00000085938128192646177370000017768379091117047466_)"}} transform="matrix(1 0 0 1 -28.41 66.29)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-11.8" x2="11.8" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000067224143110780970010000003543509610895447480_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000070089530401864320870000017719565224648669077_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000165919881940059729620000006296730604730027194_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000182512471893114417320000009694929971469431949_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000055708454082309986140000016576407113324450176_" style={{"clipPath":"url(#SVGID_00000182512471893114417320000009694929971469431949_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000174585240108639982300000001719612465305955471_" style={{"clipPath":"url(#SVGID_00000055708454082309986140000016576407113324450176_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000121239386943857616620000010709558009126564264_" style={{"clipPath":"url(#SVGID_00000174585240108639982300000001719612465305955471_)"}} transform="matrix(1 0 0 1 -26.32 61.94)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-13.9" x2="13.9" y1="0" y2="0"/>
				</g>
			</g>
			<g>
				<defs>
					<polygon id="SVGID_00000003062528451927878800000003282815544871655044_" points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</defs>
				<defs>
					<polygon id="SVGID_00000081621033443281361740000004546943796809097884_" points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</defs>
				<defs>
					<rect height="179.2" id="SVGID_00000128470844522852509370000015136029023714122647_" width="114.7" x="-84.4" y="-35.3"/>
				</defs>
				<clipPath id="SVGID_00000136394825280764401170000002991022670484968334_">
					<polygon style={{"overflow":"visible"}} points="-26.1,55.3 -25.1,55.3 -26.1,56.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000119095394060657248410000016974755281946931387_" style={{"clipPath":"url(#SVGID_00000136394825280764401170000002991022670484968334_)"}}>
					<polygon style={{"overflow":"visible"}} points="-28.1,53.3 -29.1,53.3 -28.1,52.3     "/>
				</clipPath>
				<clipPath id="SVGID_00000120534101741257661220000002877767659905057693_" style={{"clipPath":"url(#SVGID_00000119095394060657248410000016974755281946931387_)"}}>
					<rect height="179.2" style={{"overflow":"visible"}} width="114.7" x="-84.4" y="-35.3"/>
				</clipPath>
				<g id="website_00000031902388763033718370000006630312433138995135_" style={{"clipPath":"url(#SVGID_00000120534101741257661220000002877767659905057693_)"}} transform="matrix(1 0 0 1 -28.41 57.6)">
					<line className="st114" vectorEffect="non-scaling-stroke" x1="-11.8" x2="11.8" y1="0" y2="0"/>
				</g>
			</g>
			<g id="pc_00000051385532671054069070000009671899655126163617_" transform="matrix(1 0 0 1 -27.07 11.26)">
				<rect className="st177" height="4.2" width="52.4" vectorEffect="non-scaling-stroke" x="-26.2" y="-2.1"/>
			</g>
			<g id="pc_00000183213851500282286260000012770492165239251119_" transform="matrix(1 0 0 1 -50.33 11.26)">
				<ellipse className="st178" cx="0" cy="0" rx="0.9" ry="0.9" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="pc_00000138538234817878994890000011123207876016026811_" transform="matrix(1 0 0 1 -46.86 11.26)">
				<ellipse className="st29" cx="0" cy="0" rx="0.9" ry="0.9" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="pc_00000145780071554054771910000005448368202907609267_" transform="matrix(1 0 0 1 -43.55 11.26)">
				<ellipse className="st178" cx="0" cy="0" rx="0.9" ry="0.9" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="pc_00000111886721214882667120000003980803152096506758_" transform="matrix(1 0 0 1 -27.13 96.66)">
				<rect className="st29" height="2.8" width="52.5" vectorEffect="non-scaling-stroke" x="-26.2" y="-1.4"/>
			</g>
			<g id="pc_00000094616513985088802750000002774370557619901608_" transform="matrix(1 0 0 1 -2.8 54.3)">
				<rect className="st27" height="81.8" width="3.8" vectorEffect="non-scaling-stroke" x="-1.9" y="-40.9"/>
			</g>
			<g id="scrollbar" transform="matrix(1 0 0 1 -2.8 83.81)">
				<path className="st177" d="M-0.2-11.1h0.4c0.6,0,1,0.5,1,1v20.2c0,0.6-0.5,1-1,1h-0.4     c-0.6,0-1-0.5-1-1v-20.2C-1.2-10.6-0.7-11.1-0.2-11.1z" vectorEffect="non-scaling-stroke"/>
			</g>
			{/* <g id="shapes" transform="matrix(1 0 0 1 36.09 61.69)">
				<polygon className="st179" points="1.9,6.4 1.8,1.7 6.5,1.6 6.4,-1.9 1.7,-1.8 1.6,-6.5      -1.9,-6.4 -1.8,-1.7 -6.5,-1.6 -6.4,1.9 -1.7,1.8 -1.6,6.5    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000017488389791176808470000010868533853384084380_" transform="matrix(1 0 0 1 37.5 60.75)">
				<polygon className="st180" points="9,0.3 2.9,-1.6 4.8,-7.6 0.3,-9 -1.6,-2.9 -7.6,-4.8 -9,-0.2      -2.9,1.6 -4.8,7.6 -0.3,9 1.6,2.9 7.6,4.8    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000013172990255659593370000004569816511697199778_" transform="matrix(1 0 0 1 32.86 58.68)">
				<circle className="st181" cx="0" cy="0" r="6.7" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000127742671307465195880000009231449279971094924_" transform="matrix(1 0 0 1 36.47 57.8)">
				<polygon className="st182" points="-4.8,6.1 5.5,-0.6 -5.5,-6.1    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000031204715019170381410000009579823012878495166_" transform="matrix(1 0 0 1 37.3 61.68)">
				<polygon className="st183" points="-5.7,-1.7 3.8,6.1 5.7,-6.1    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000146471082616890105630000013233972147205689523_" transform="matrix(1 0 0 1 29.53 59.69)">
				<polyline className="st184" points="-11.3,6.1 -6.3,7.8 -5.6,2.7 -0.7,4.3 0,-0.8 4.9,0.8      5.6,-4.3 10.6,-2.6 11.3,-7.8    " vectorEffect="non-scaling-stroke"/>
			</g> */}
			{/* <g transform="matrix(1 0 0 1 33.31 62.07)">
				<path className="st185" d="M5.2,3.5V1.6l5.3-1.9L5.2-2.1V-4l7.6,2.8v1.8L5.2,3.5z M-12.8,0.7     v-1.8L-5.2-4v1.9l-5.3,1.9l5.3,1.9v1.8L-12.8,0.7z M1.9-5.9h1.6L-1.1,5.9h-1.6L1.9-5.9z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 33.66 59.15)">
				<path className="st186" d="M-4.8,1l-0.6,2.6c-0.3,1.4,0,2,0.9,2.2L-4.1,6l-0.7,2.3l-1.5-0.4     c-0.8-0.2-1.5-0.7-1.9-1.4c-0.4-0.7-0.5-1.6-0.3-2.3l0.8-3.5c0.3-1.2,0.1-1.6-1-2L-8-3.7c1.1,0.3,1.5,0.1,1.9-1.1l1.2-3.3     c0.2-0.8,0.8-1.5,1.5-1.8c0.7-0.4,1.6-0.4,2.4-0.1l1.5,0.5l-0.7,2.3l-0.4-0.1c-1-0.3-1.5,0-2,1.4l-0.9,2.5     c-0.3,1.1-1.3,1.9-2.4,1.8C-4.9-1.2-4.5,0-4.8,1z M4.8-1.1l0.6-2.6c0.3-1.4,0-2-0.9-2.2L4.1-6l0.7-2.3l1.5,0.4     c0.8,0.2,1.5,0.7,1.9,1.4c0.4,0.7,0.5,1.6,0.3,2.3L7.7-0.6c-0.3,1.2-0.1,1.6,1,2L8,3.7C6.9,3.3,6.5,3.6,6.1,4.8L4.9,8     C4.7,8.8,4.2,9.5,3.5,9.9c-0.7,0.4-1.6,0.4-2.4,0.1l-1.5-0.4l0.7-2.3l0.4,0.1c1,0.3,1.5,0,2-1.4l0.9-2.5C3.8,2.4,4.9,1.7,6,1.8     C4.9,1.3,4.4,0,4.8-1.1z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 37.02 63.16)">
				<path className="st187" d="M-5.6,1.3L-3,2.9c0.7-1.2,1.8-2,3.1-2.4C1.4,0.1,2.8,0.3,4,1l0.4-0.7     l1.3-2.1c-1.8-1.1-4-1.4-6-0.9C-2.6-2.1-4.5-0.7-5.6,1.3z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 36.27 61.87)">
				<path className="st187" d="M-4.8-4.5C-6.6-3.3-8-1.8-9.1,0l2.6,1.6c1.1-1.8,2.8-3.3,4.7-4.2     c3-1.4,6.4-1.2,9.2,0.4L9.1-5C4.8-7.5-0.6-7.3-4.8-4.5z M-0.6,5.2L2,6.8l1.6-2.7C2.9,3.7,2.1,3.6,1.3,3.8C0.5,4-0.2,4.5-0.6,5.2z     " vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 32.08 60.95)">
				<path className="st188" d="M0-9.5C0-7-1-4.6-2.8-2.8C-4.6-1-7,0-9.5,0 M0-9.5C0-7,1-4.6,2.8-2.8     C4.6-1,7,0,9.5,0 M0,9.5C0,7-1,4.6-2.8,2.8C-4.6,1-7,0-9.5,0 M0,9.5C0,7,1,4.6,2.8,2.8C4.6,1,7,0,9.5,0" vectorEffect="non-scaling-stroke"/>
			</g> */}
			{/* <g id="shapes_00000157990921425195190120000000508426650543919498_" transform="matrix(1 0 0 1 29.39 56.05)">
				<circle className="st189" cx="0" cy="0" r="7.1" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000010285947367503639710000009732421579121903501_" transform="matrix(1 0 0 1 37.48 57.91)">
				<polyline className="st190" points="-4.6,-12.1 -7.7,-3.2 1.6,-4.4 -1.6,4.4 7.7,3.2 4.6,12.1         " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000107566263282955671680000008646924923738495650_" transform="matrix(1 0 0 1 35.24 60.84)">
				<circle className="st179" cx="0" cy="0" r="5.8" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000178205130124370499770000011578678847321571774_" transform="matrix(1 0 0 1 34.67 58.68)">
				<polygon className="st179" points="5.7,7.1 3.1,1.2 9,-1.3 7.1,-5.7 1.2,-3.1 -1.3,-9 -5.7,-7.1      -3.1,-1.2 -9,1.4 -7.1,5.7 -1.2,3.1 1.4,9    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g transform="matrix(1 0 0 1 39.49 61.93)">
				<path className="st185" d="M-2.3,3.4l1.1,1.9c0.6,1.1,1.1,1.2,1.8,0.9L0.9,6l0.9,1.8L0.6,8.4     C0,8.7-0.7,8.8-1.3,8.6C-2,8.3-2.5,7.9-2.7,7.3l-1.5-2.6C-4.7,3.8-5.1,3.6-5.9,4l-0.9-1.8c0.9-0.4,0.9-0.8,0.6-1.8l-1.1-2.8     c-0.3-0.6-0.4-1.3-0.1-1.9c0.2-0.6,0.7-1.1,1.4-1.4L-5-6.2l0.9,1.8l-0.3,0.2c-0.7,0.3-0.9,0.8-0.4,1.9L-4-0.2     c0.5,0.8,0.3,1.8-0.5,2.4C-3.6,2-2.7,2.5-2.3,3.4z M2.3-3.3l-1.1-2C0.6-6.3,0.1-6.5-0.6-6.2L-0.9-6l-0.9-1.8l1.1-0.5     c0.6-0.3,1.3-0.4,1.9-0.2c0.6,0.2,1.2,0.7,1.4,1.3l1.5,2.6C4.7-3.8,5-3.6,5.9-4l0.9,1.8C5.9-1.8,5.9-1.4,6.2-0.5l1.1,2.8     c0.3,0.6,0.4,1.3,0.2,1.9C7.3,4.9,6.8,5.4,6.2,5.6L5,6.2L4.1,4.4l0.3-0.2c0.7-0.3,0.9-0.8,0.4-2L4,0.2C3.5-0.6,3.7-1.6,4.5-2.2     C3.6-2,2.6-2.4,2.3-3.3z" vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000153697268898179590150000001968263976711042947_" transform="matrix(1 0 0 1 30.7 61.21)">
				<polygon className="st191" points="-5.1,6.6 5.9,-0.7 -5.9,-6.6    " vectorEffect="non-scaling-stroke"/>
			</g>
			<g id="shapes_00000055669986689739013660000004708447269374025889_" transform="matrix(1 0 0 1 35.1 63.25)">
				<circle className="st181" cx="0" cy="0" r="6.7" vectorEffect="non-scaling-stroke"/>
			</g> */}
			{/* <g transform="matrix(1 0 0 1 35.86 59.67)">
				<path className="st192" d="M6.3,1L5.5-0.6l3.9-4L3.8-4L3-5.7l8.1-0.9l0.8,1.6L6.3,1z M-11.1,6.5     l-0.8-1.6L-6.3-1l0.8,1.7l-3.9,4L-3.8,4L-3,5.7L-11.1,6.5z M-0.8-5.9l1.4-0.7L1.7,6L0.2,6.7L-0.8-5.9z" vectorEffect="non-scaling-stroke"/>
			</g> */}
		</g>
	</g>
</svg>
     );
}
 
export default Desk;