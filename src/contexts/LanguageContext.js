import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
// import languages from "./data";


export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
    const languages = {
        english: {
            language: "arabic",
            hero: [
                "I like making", "fun", "interactive things with code.", "I also", "talk", "&", "write", "about those things."
            ],
            about: [
                "Frontend",
                " Developer",
                "I craft scalable front-end products with great user experiences while staying fashionable.",
                "In building JavaScript applications, I'm equipped with the right tools, and can absolutely function independently of them to deliver fast."
            ],
            projects: [
                [
                    "Adventure Time!",
                    "An animated page about the nostalgic cartoon Adventure Time. It introduces you to the characters once again!",
                    "MADE WITH",
                    "VISIT THE SITE"
                ],
                [
                    "Cenimatic Iconics!",
                    "On this website you can find the most iconic and memorable scenes of the best TV shows, series, and movies!",
                    "MADE WITH"
                ],
            ],
            contact: [
                "I'm available to grab a coffee and chat! Drop a comment, if you got a question, concern, or Spotify playlist, and thanks for stopping by!",
                "Find me on these online spaces!",
                "name",
                "email",
                "let's build something together!",
                "Hey There!",
                "SEND IT!"

            ],
            headlines: ["PROJECTS", "ARSENAL"],
            arsenal: [
                "HTML5",
                "CSS",
                "JAVASCRIPT",
                "SASS",
                "FRAMER MOTION",
                "TYPESCRIPT",
                "REACT",
                "FIREBASE",
                "GIT",
                "TERMINAL",
                "RESPONSIVE",
                "BOOTSTRAP"
            ],
            navbar: [
                "about",
                "projects",
                "contact",
                "arabic"
            ],
            id: 1
        },
       arabic: {
            language: "english",
            hero: [
                "أحب أن اصنع أشياء تفاعلية باستخدام الكود. و أنا أيضا أتحدث وأكتب عن هذه الأشياء."
            ],
            about: [
                "مطور",
                " الواجهة الأمامية",
                 "أنا أصنع واجهات أمامية مرنة مع تجربة مستخدم رائعة مع الحفاظ على عصريتها.",
                "في بناء تطبيقات جافا سكريبت، أنا مُجهز بالأدوات المناسبة ، ويمكن تمامًا العمل بشكل مستقل عنها لانجاز العمل."
            ],
            projects: [
                [
                    "!وقت المغامرة",
                    "!صفحة متحركة عن  كارتون وقت المغامرة، تقدم لك الشخصيات مرة أخرى",
                    "صنع مع",
                    "زور الموقع"
                ],
                [
                    "!أيقونات سينمائية",
                    "!يمكنك العثور في هذا الموقع على أكثر المشاهد شهرة وتذكرًا لأفضل البرامج التلفزيونية والمسلسلات والأفلام",
                    "صنع مع"
                ],
            ],
            contact: [
                "أنا متاح لتناول القهوة والتحدث! اترك تعليقًا، إذا كان لديك سؤال أو استفسار، وشكرًا لزيارتكم",
                "!اعثر في هذه المساحات على الإنترنت",
                "الأسم",
                "الايميل",
                "!لنبني شيئًا معًا",
                "!مرحبا",
                "!أرسل"
            ],
            headlines: ["المشاريع", "المهارات"],
            arsenal: [
                "أتش تي أم أل",
                "CSS",
                "JAVASCRIPT",
                "SASS",
                "FRAMER MOTION",
                "TYPESCRIPT",
                "REACT",
                "FIREBASE",
                "GIT",
                "TERMINAL",
                "RESPONSIVE",
                "BOOTSTRAP"
            ],
            navbar: [
                "عني",
                "مشاريع",
                "تواصل",
                "الانجليزية"
            ],
            id: 2
        },         
    };

    const [lanToggle, setLanToggle] = useState(localStorage.getItem('lanToggle') === "true");
    const english = languages['english'];
    const arabic = languages["arabic"];
    const lan = lanToggle ? arabic : english;

  useEffect(() => {
    localStorage.setItem('lanToggle', lanToggle);

    }, [lanToggle]);

    return ( 
        <LanguageContext.Provider value={{lanToggle, setLanToggle, lan}}>
            {props.children}
        </LanguageContext.Provider>
     );
}
 
export default LanguageContextProvider;