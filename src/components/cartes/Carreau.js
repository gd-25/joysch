import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';
import PIQUE from './../../logos/PIQUE.gif'
import TREFLE from './../../logos/TREFLE.gif'
import CARREAU from './../../logos/CARREAU.gif'

import SOJASUN from './../../assets/carreau/1-sojasun/PRINT_1.jpg'
import LOGOSOJASUN from './../../assets/carreau/1-sojasun/LOGO.svg'

import EURE from './../../assets/carreau/2-eure/PRINT_3.jpg'
import LOGOEURE from './../../assets/carreau/2-eure/LOGO.png'

import INEGALITES from './../../assets/carreau/3-inegalites/ZOOM.jpg'
import LOGOINEGALITES from './../../assets/carreau/3-inegalites/LOGO.png'

import CR from './../../assets/carreau/4-cr/MINIATURE.png'
import LOGOCR from './../../assets/carreau/4-cr/LOGO.png'

// Utils
import NavigationArrows from "../utils/NavigationArrows";
import MenuChoices from "../utils/MenuChoices";
import MenuTitles from "../utils/MenuTitles";


export default function Carreau() {

   return (
      <div className="w-full bg-black text-white">
         <div className="w-full flex-col-center 3xl:h-screen">
            <div className="h-32" />

            <div className="fixed z-50 top-0 right-0 mt-28 mr-6 md:mr-28 3xl:mt-40">
               <NavigationArrows previous="/" next="/pique" />
            </div>

            <MenuTitles
               title="Carreau"
               subtitle="La carte des différents angles de vue"
               content="Dans cette page, vous pourrez découvrir nos réalisations"
               extra1="bercées par différents formats."
               src={CARREAU} />

            <div className="h-10 3xl:h-24" />

            

            <MenuChoices
               main1={SOJASUN}
               hover1={LOGOSOJASUN}
               href1="/sojasun"

               main2={EURE}
               hover2={LOGOEURE}
               href2="/eure"

               main3={INEGALITES}
               hover3={LOGOINEGALITES}
               href3="/inegalites-salariales"

               main4={CR}
               hover4={LOGOCR}
               href4="/cr"
            />

            <div className="h-32" />

         </div>
      </div>
   );
}


/*

<div className="w-80 h-80 flex-center text-4xl bg-white text-black font-bold">
               <h1 className="text-center">RECUEIL <br></br> DE CR</h1>
            </div>
            */