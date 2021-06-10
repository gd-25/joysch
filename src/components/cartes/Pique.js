import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';
import PIQUE from './../../logos/PIQUE.gif'
import TREFLE from './../../logos/TREFLE.gif'
import CARREAU from './../../logos/CARREAU.gif'

import BALEINE from './../../assets/pique/1-WWF/MINIATURE.png'
import LOGOWWF from './../../assets/pique/1-WWF/LOGO.png'

import SANTE from './../../assets/pique/2-sante-publique/MINIATURE.jpg'
import LOGOSANTE from './../../assets/pique/2-sante-publique/LOGO.png'

import CIMADE from './../../assets/pique/3-la-cimade/MINIATURE.jpg'
import LOGOCIMADE from './../../assets/pique/3-la-cimade/LOGO.png'

import INCESTE from './../../assets/pique/4-inceste/MINIATURE.jpg'
import LOGOCINCESTE from './../../assets/pique/4-inceste/LOGO2.png'


// Utils
import NavigationArrows from "../utils/NavigationArrows";
import MenuChoicesAlt from "../utils/MenuChoicesAlt";
import MenuTitles from "../utils/MenuTitles";


export default function Pique() {

   return (
      <div className="w-full bg-black text-white">
         <div className="w-full flex-col-center 3xl:h-screen">
            <div className="h-32" />

            <div className="fixed z-50 top-0 right-0 mt-28 mr-6 md:mr-28 3xl:mt-40">
               <NavigationArrows previous="/carreau" next="/trefle" />
            </div>

            <MenuTitles
               title="PIQUE"
               subtitle="La carte de l'engagement."
               content="Dans cette page, vous pourrez découvrir nos projets relatifs aux causes importantes de notre époque, réalisés au cours de notre alternance et lors de compétitions de l'École Sup de Pub."
               src={PIQUE} />

            <div className="h-10 3xl:h-24" />

            <MenuChoicesAlt
               main1={CIMADE}
               hover1={LOGOCIMADE}
               href1="/la-cimade"
               cimade

               main2={SANTE}
               hover2={LOGOSANTE}
               href2="/sante-publique"

            />

            <div className="h-32" />

         </div>
      </div>
   );
}
