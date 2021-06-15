import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';
import ARROW from './../../logos/ARROW.svg'

export default function MenuChoices(prop) {

   const [firstHover, setFirstHover] = useState(false);
   const [secondHover, setSecondHover] = useState(false);
   const [thirdHover, setThirdHover] = useState(false);
   const [fourthHover, setFourthHover] = useState(false);

   return (
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:px-44 md:h-80 3xl:px-80">

         <div className="h-8 md:hidden" />

         {(prop.href1 && !prop.cimade) && <a href={prop.href1} onMouseEnter={() => setFirstHover(true)} onMouseLeave={() => setFirstHover(false)} >
            <img src={prop.main1}
               className={firstHover
                  ? "h-0"
                  : "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl"} />
            <div
               className={firstHover
                  ? "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl flex-center bg-white"
                  : "h-0"}>
               <img src={prop.hover1}
                  className={firstHover
                     ? "h-32 w-32 object-contain"
                     : "h-0"} />
            </div>
         </a>}

         {(prop.href1 && prop.cimade) && <a href={prop.href1} onMouseEnter={() => setFirstHover(true)} onMouseLeave={() => setFirstHover(false)} >
            <img src={prop.main1}
               className={firstHover
                  ? "h-0"
                  : "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl"} />
            <div
               className={firstHover
                  ? "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl flex-center bg-white"
                  : "h-0"}>
               <img src={prop.hover1}
                  className={firstHover
                     ? "h-44 w-44 object-contain"
                     : "h-0"} />
            </div>
         </a>}

         <div className="w-40 flex-none h-8"></div>

         {prop.href2 && <a href={prop.href2} onMouseEnter={() => setSecondHover(true)} onMouseLeave={() => setSecondHover(false)}>
            <img src={prop.main2}
               className={secondHover
                  ? "h-0"
                  : "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl"} />
            {prop.hover2full ? <img src={prop.hover2}
               className={secondHover
                  ? "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl"
                  : "h-0"} />
               : <div
                  className={secondHover
                     ? "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl flex-center bg-white"
                     : "h-0"}>
                  <img src={prop.hover2}
                     className={secondHover
                        ? "h-32 w-32 object-contain"
                        : "h-0"} />
               </div>}
         </a>}

         <div className="w-40 flex-none h-8"></div>

         {prop.href3 && <a href={prop.href3} onMouseEnter={() => setThirdHover(true)} onMouseLeave={() => setThirdHover(false)}>
            <img src={prop.main3}
               className={thirdHover
                  ? "h-0"
                  : "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl"} />
            {prop.hover3full ? <img src={prop.hover3}
               className={thirdHover
                  ? "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl"
                  : "h-0"} />
               : <div
                  className={thirdHover
                     ? "object-cover h-48 w-48 3xl:h-80 3xl:w-80 rounded-xl flex-center bg-white"
                     : "h-0"}>
                  <img src={prop.hover3}
                     className={thirdHover
                        ? "h-32 w-32 object-contain"
                        : "h-0"} />
               </div>}
         </a>}
         

      </div>
   );
}
