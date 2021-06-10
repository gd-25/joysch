import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';
import TREFLE from './../../logos/TREFLE.gif'

import MACCI from './../../assets/trefle/1-maison-macci/HOME.jpg'
import LOGOMACCI from './../../assets/trefle/1-maison-macci/LOGO.png'

import CAJO from './../../assets/trefle/2-cajo/CAJO.jpg'
import CAJO19 from './../../assets/trefle/2-cajo/CAJO19.jpg'

import M from './../../assets/trefle/3-m/POCHETTE.png'
import LOGOM from './../../assets/trefle/3-m/LOGO.png'

import CONTEXTE from './../../assets/trefle/4-contexte/MINIATURE.jpg'
import LOGOCONTEXTE from './../../assets/trefle/4-contexte/LOGO.png'

// Utils
import NavigationArrows from "../utils/NavigationArrows";
import MenuChoices from "../utils/MenuChoices";
import MenuTitles from "../utils/MenuTitles";


export default function Trefle() {

   return (
      <div className="w-full bg-black text-white">
         <div className="w-full flex-col-center 3xl:h-screen">
            <div className="h-32" />

            <div className="fixed z-50 top-0 right-0 mt-28 mr-6 md:mr-28 3xl:mt-40">
               <NavigationArrows previous="/pique" next="/cv" />
            </div>

            <MenuTitles
               title="TRÈFLE"
               subtitle="La carte vertueuse."
               content="Dans cette page, vous pourrez découvrir des projets qui nous animent et nous passionnent."
               src={TREFLE} />

            <div className="h-10 3xl:h-24" />

            <MenuChoices
               main1={CONTEXTE}
               hover1={LOGOCONTEXTE}
               href1="/contexte"

               main2={CAJO19}
               hover2={CAJO}
               href2="/cajo"

               main3={M}
               hover3={LOGOM}
               href3="/m"

               main4={MACCI}
               hover4={LOGOMACCI}
               href4="/maison-macci"
            />

            <div className="h-32" />

         </div>
      </div>
   );
}
