import React, { useState, useEffect, useContext } from "react";
import './../../../styles/index.css';


import CARTE1 from './../../../assets/carreau/4-cr/CARTE1.png'
import CARTE2 from './../../../assets/carreau/4-cr/CARTE2.png'
import CARTE3 from './../../../assets/carreau/4-cr/CARTE3.png'
import CARTE4 from './../../../assets/carreau/4-cr/CARTE4.png'
import CARTE5 from './../../../assets/carreau/4-cr/CARTE5.png'
import CARTE6 from './../../../assets/carreau/4-cr/CARTE6.png'
import CARTE7 from './../../../assets/carreau/4-cr/CARTE7.png'
import CARTE8 from './../../../assets/carreau/4-cr/CARTE8.png'
import CARTEDOS from './../../../assets/carreau/4-cr/CARTEDOS.png'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";
import ProjectDescription from "../../utils/ProjectDescription";
import HTMLFlipBook from "react-pageflip";


// CARTES
const cardsToSlide = [
   CARTE1,
   CARTE2,
   CARTE3,
   CARTE4,
   CARTE5,
   CARTE6,
   CARTE7,
   CARTE8
];



export default function CR() {

   return (
      <>
         <div className="w-full h-screen hidden md:flex-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/inegalites-salariales" next="/pique" />
            </div>

            <div className="absolute top-0 right-0 3xl:pr-40 pt-64 text-white">
               <ArrowText type="right" content="Les mots ont encore leurs mots à dire." content1=" " content2="Cliquez pour tirer les cartes signatures de marques." />
            </div>

            <HTMLFlipBook showCover drawShadow={false} width={400} height={800}>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE1} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE2} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE3} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE4} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE5} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE6} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE7} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain pt-8 cursor-pointer" /></div>

               <div data-density="hard"><img src={CARTE8} className="h-full object-contain pt-8 cursor-pointer" /></div>
               <div data-density="hard"></div>

            </HTMLFlipBook>

         </div>


         <div className="min-h-screen md:hidden flex-col-center">

            <div className="h-40" />

            <p className="w-full px-20 text-white">Les mots ont encore leurs mots à dire. Cliquez pour tirer les cartes signatures de marques.</p>

            <div className="w-full flex-center">
               <HTMLFlipBook showCover drawShadow={false} width={window.innerWidth / 2} height={window.innerWidth}>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE1} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE2} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE3} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE4} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE5} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE6} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE7} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"><img src={CARTEDOS} className="h-full object-contain cursor-pointer" /></div>

                  <div data-density="hard"><img src={CARTE8} className="h-full object-contain cursor-pointer" /></div>
                  <div data-density="hard"></div>

               </HTMLFlipBook>
            </div>
            <div className="w-full flex-center">
               <NavigationArrows previous="/inegalites-salariales" next="/pique" />
            </div>
         </div>
      </>
   );
}
