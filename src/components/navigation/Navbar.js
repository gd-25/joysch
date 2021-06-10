import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import './../../styles/index.css';

import LOGO from './../../logos/LOGO.gif'

export default function Navbar() {
   const [cardsOpen, setCardsOpen] = useState(false);
   const [location, setLocation] = useState("/cv");

   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      if (menuOpen) {
         setMenuOpen(!menuOpen)
         document.querySelector(".nav-icon-before").style.transform = "scale(1)";
         document.querySelector(".nav-icon-middle").style.transform = "scale(1)";
         document.querySelector(".nav-icon-after").style.transform = "scale(1)";
         console.log(menuOpen)
      } else {
         setMenuOpen(!menuOpen)
         document.querySelector(".nav-icon-before").style.transform = "translateY(11px) rotate(135deg)";
         document.querySelector(".nav-icon-middle").style.transform = "scale(0)";
         document.querySelector(".nav-icon-after").style.transform = "translateY(-11px) rotate(-135deg)";
         console.log(menuOpen)
      }
   }

   return (
      <div className="fixed z-30 h-28 3xl:h-48 w-full text-white flex justify-between items-center lulo-font" onLoad={() => setLocation(window.location.pathname)}>
         <a href="/" className="z-30 md:pl-3">
            <img src={LOGO} alt="Logo" className="h-32 3xl:h-48 z-30" />
         </a>

         <div className="hidden md:flex-center pr-8">
            <div className="relative w-48 3xl:w-80">
               <div className={(location === "/pique" || location === "/trefle" || location === "/carreau") ? "select-none font-bold text-base 3xl:text-2xl cursor-pointer text-center text-redsix lulo-font" : "select-none font-bold text-base 3xl:text-2xl cursor-pointer text-center hover:text-redsix lulo-font"} onClick={() => setCardsOpen(!cardsOpen)}>LES CARTES</div>

               {cardsOpen && <div className="bg-black rounded-lg mt-8 3xl:mt-12 pl-6 w-48 3xl:w-80 3xl:pl-12 absolute top-0 flex flex-col justify-center items-start z-50">
                  <a href="/carreau" className={(location === "/carreau") ? "font-bold text-base 3xl:text-2xl py-2 3xl:py-4 text-redsix lulo-font" : "font-bold text-base 3xl:text-2xl py-2 3xl:py-4 hover:text-redsix lulo-font"}>CARREAU</a>
                  <a href="/pique" className={(location === "/pique") ? "font-bold text-base 3xl:text-2xl py-2 3xl:py-4 text-redsix lulo-font" : "font-bold text-base 3xl:text-2xl py-2 3xl:py-4 hover:text-redsix lulo-font"}>PIQUE</a>
                  <a href="/trefle" className={(location === "/trefle") ? "font-bold text-base 3xl:text-2xl py-2 3xl:py-4 text-redsix lulo-font" : "font-bold text-base 3xl:text-2xl py-2 3xl:py-4 hover:text-redsix lulo-font"}>TRÈFLE</a>
               </div>}
            </div>
            <a href="/cv" className={(location === "/cv") ? "font-bold text-base 3xl:text-2xl text-redsix ml-0.5 mr-3 3xl:mr-8 lulo-font" : "font-bold text-base 3xl:text-2xl ml-0.5 mr-3 3xl:mr-8 hover:text-redsix lulo-font"}>MON CV</a>

            <a href="/contact" className={(location === "/contact") ? "font-bold text-base 3xl:text-2xl text-redsix mx-3 lulo-font" : "font-bold text-base 3xl:text-2xl mx-3 hover:text-redsix lulo-font"}>CONTACT</a>
         </div>

         <div className="nav-icon md:hidden z-30" onClick={toggleMenu}>
            <div className="nav-icon-before"></div>
            <div className="nav-icon-middle"></div>
            <div className="nav-icon-after"></div>
         </div>

         <div className={`menu ${menuOpen ? 'show bg-black text-white' : 'bg-black text-white'}`}>
            <div className={(location === "/pique" || location === "/trefle" || location === "/carreau") ? "font-bold text-2xl py-2 3xl:py-4 text-redsix mx-3 lulo-font" : "font-bold text-2xl py-2 3xl:py-4 mx-3 lulo-font"}>LES CARTES</div>
            <a href="/carreau" className={(location === "/carreau") ? "font-bold text-xl py-2 3xl:py-4 text-redsix mx-3 lulo-font" : "font-bold text-xl py-2 3xl:py-4 mx-3 lulo-font"}>CARREAU</a>
            <a href="/pique" className={(location === "/pique") ? "font-bold text-xl py-2 3xl:py-4 text-redsix mx-3 lulo-font" : "font-bold text-xl py-2 3xl:py-4 mx-3 lulo-font"}>PIQUE</a>
            <a href="/trefle" className={(location === "/trefle") ? "font-bold text-xl py-2 3xl:py-4 text-redsix mx-3 lulo-font" : "font-bold text-xl py-2 3xl:py-4 mx-3 lulo-font"}>TRÈFLE</a>


            <div className="h-4" />

            <a href="/cv" className={(location === "/cv") ? "font-bold text-2xl py-2 3xl:py-4 text-redsix mx-3 lulo-font" : "font-bold text-2xl py-2 3xl:py-4 mx-3 lulo-font"}>MON CV</a>

            <a href="/contact" className={(location === "/contact") ? "font-bold text-2xl py-2 3xl:py-4 text-redsix mx-3 lulo-font" : "font-bold text-2xl py-2 3xl:py-4 mx-3 lulo-font"}>CONTACT</a>
         </div>

      </div>
   );
}
