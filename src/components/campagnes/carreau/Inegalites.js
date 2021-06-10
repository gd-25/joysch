import React, { useState, useEffect, useContext } from "react";
import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import UNEQUAL from './../../../assets/carreau/3-inegalites/UNEQUAL.jpg'
import ZOOM from './../../../assets/carreau/3-inegalites/ZOOM.jpg'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";
import ProjectDescription from "../../utils/ProjectDescription";

export default function Inegalites() {
   const [animationFinished, setAnimationFinished] = useState(false);
   const [zoom, setZoom] = useState(5)
   const [offsetX, setOffsetX] = useState(-20);
   const [offsetY, setOffsetY] = useState(-14);

   useEffect(() => {
      window.scrollTo(0, 0);
      if (window.innerWidth > 768) {
         document.body.style.overflow = "hidden";
      }
   }, [])

   const dezoomPicture = (e) => {
      if (window.pageYOffset === 0 && e.deltaY < 0) {
         console.log('scrolling up');
         if (zoom < 5 && offsetX > -20 && offsetY > -14) {
            setZoom(zoom + 0.05);
            setOffsetX(offsetX - 0.25);
            setOffsetY(offsetY - 0.25);
         } else if (zoom < 5 && offsetX >= -20 && offsetY <= -14) {
            setZoom(zoom + 0.05);
            setOffsetX(offsetX - 0.25);
         } else if (zoom < 5 && offsetX <= -20 && offsetY <= -14) {
            setZoom(zoom + 0.05);
         } else {
            setAnimationFinished(true);
            setTimeout(() => document.body.style.overflow = "scroll", 1000)
         }
      }
      else if (e.deltaY > 0) {
         console.log('scrolling down');
         if (zoom > 1.1 && offsetX < 0 && offsetY < 0) {
            document.body.style.overflow = "hidden";
            setZoom(zoom - 0.05);
            setOffsetX(offsetX + 0.25);
            setOffsetY(offsetY + 0.25);
         } else if (zoom > 1.1 && offsetY >= 0 && offsetX < 0) {
            document.body.style.overflow = "hidden";
            setZoom(zoom - 0.05);
            setOffsetX(offsetX + 0.25);
         } else if (zoom > 1.1 && offsetX >= 0 && offsetY >= 0) {
            document.body.style.overflow = "hidden";
            setZoom(zoom - 0.05);
         } else {
            setAnimationFinished(true);
            setTimeout(() => document.body.style.overflow = "scroll", 1000)
         }
      }

   }

   return (
      <>
         {/* -------- DESKTOP VERSION -------- */}
         <div className="w-full bg-black text-white flex-col-center h-full hidden md:block" >

            <div className="w-full h-screen" onWheel={(e) => dezoomPicture(e)}>
               <img src={UNEQUAL} className="w-full h-full object-cover" style={{ transform: `scale(${zoom}) translateX(${offsetX}vw) translateY(${offsetY}vw)` }} />

            </div>

            {animationFinished && <div className="flex-center">
               <div className="w-full 3xl:max-w-7xl flex-col-center">

                  <div className="h-40" />

                  <div className="w-full md:w-220 px-8">
                     <h1 className="text-4xl">INÉGALITÉS HOMME-FEMME</h1>
                     <h3 className="text-lg leading-tight">Installation</h3>
                     <p className="text-xs font-thin italic pt-1">Mai 2019</p>

                     <p className="py-4 italic text-gray-400 opacity-80">L’homme a marché sur les droits de la femme en s'étant déclaré supérieur il y a 2400 ans.</p>

                     <div className="flex flex-col md:flex-row justify-between" >
                        <div className="w-80 md:w-96">
                           <h3 className="text-base">Objectifs</h3>
                           <p className="text-sm">Interpeller, déranger, enclencher un changement.</p>

                        </div>

                        <div className="w-80 md:w-96">


                           <h3 className="text-base">Concept</h3>
                           <p className="text-sm font-bold">Écrasées sous le poids de l’inaction.</p>

                        </div>
                     </div>
                  </div>

                  <div className="h-16" />

                  <div className="w-full hidden md:block">

                     <div className="h-16" />

                     <div className="w-full flex-center">
                        <div className="w-220 flex flex-col justify-start">
                           <h1 className="text-2xl 3xl:text-4xl">MÉCANIQUE</h1>
                           <div className="h-3" />
                           <div>
                              <p className="py-2">Installation de 109 m2 sur la place de la Défense, berceau de l’économie française.</p>
                              <p className="py-2">Un écran est au sol recouvert d’une plaque de verre. Il illustre des femmes écrasées, cherchant à briser cette représentation du plafond de verre.</p>
                              <p className="py-2">Ancrée dans l’architecture de la place, l’installation devient une représentation physique des inégalités salariales. </p>
                              <p className="py-2">Au sol, il est difficile de ne pas marcher dessus sans effectuer un détour. Là où le drainage de travailleurs est important, ce détour n’est souvent pas permis par peur de perdre du temps.</p>
                              <p className="py-2">Avec plus de hauteur, dans les tours des grandes firmes, le signe de l’inégalité se dessine (pas visible au sol).</p>

                           </div>
                        </div>
                     </div>

                     <div className="h-32" />

                     {animationFinished && <div className="w-full flex-center">
                        <div className="w-220 flex flex-col justify-start">
                           <h1 className="text-2xl 3xl:text-4xl">ÉCHANTILLONAGE DE RÉACTIONS</h1>
                           <div className="h-8" />
                           <div className="w-full flex-center">
                              <iframe width="840" height="480" src="https://www.youtube.com/embed/jxoHQHQm3rY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                           </div>
                        </div>
                     </div>}

                     <div className="h-20" />

                     <div className="w-full z-50 py-10 flex-center">
                        <NavigationArrows previous="/eure" next="/cr" />
                     </div>
                  </div>


               </div>
            </div>}
         </div>

         {/* -------- MOBILE VERSION -------- */}
         <div className="w-full md:hidden px-8 text-white">
            <div className="h-32" />

            <LazyLoadImage src={ZOOM} className="w-full py-3" />

            <LazyLoadImage src={UNEQUAL} className="w-full py-3" />
            <div className="h-32" />


            <h1 className="text-4xl">INÉGALITÉS HOMME-FEMME</h1>
            <h3 className="text-lg leading-tight">Installation</h3>
            <p className="text-xs font-thin italic pt-1">Mai 2019</p>

            <p className="py-4 italic text-gray-400 opacity-80">L’homme a marché sur les droits de la femme en s'étant déclaré supérieur il y a 2400 ans.</p>

            <div className="flex flex-col md:flex-row justify-between" >
               <div className="w-80 md:w-96">
                  <h3 className="text-base">Objectifs</h3>
                  <p className="text-sm">Interpeller, déranger, enclencher un changement.</p>

               </div>

               <div className="w-80 md:w-96">


                  <h3 className="text-base">Concept</h3>
                  <p className="text-sm font-bold">Écrasées sous le poids de l’inaction.</p>

               </div>
            </div>

            <div className="h-32" />

            <div className="w-full flex-center">
               <div className="w-full flex flex-col justify-start">
                  <h1 className="text-2xl 3xl:text-4xl">MÉCANIQUE</h1>
                  <div className="h-3" />
                  <div>
                     <p className="py-2">Installation de 109 m2 sur la place de la Défense, berceau de l’économie française.</p>
                     <p className="py-2">Un écran est au sol recouvert d’une plaque de verre. Il illustre des femmes écrasées, cherchant à briser cette représentation du plafond de verre.</p>
                     <p className="py-2">Ancrée dans l’architecture de la place, l’installation devient une représentation physique des inégalités salariales. </p>
                     <p className="py-2">Au sol, il est difficile de ne pas marcher dessus sans effectuer un détour. Là où le drainage de travailleurs est important, ce détour n’est souvent pas permis par peur de perdre du temps.</p>
                     <p className="py-2">Avec plus de hauteur, dans les tours des grandes firmes, le signe de l’inégalité se dessine (pas visible au sol).</p>

                  </div>
               </div>
            </div>

            <div className="h-32" />

            <div className="w-full flex-center">
               <div className="w-full flex flex-col justify-start">
                  <h1 className="text-2xl 3xl:text-4xl">ÉCHANTILLONAGE DE RÉACTIONS</h1>
                  <div className="h-8" />
                  <div className="w-full flex-center">
                     <iframe width={window.innerWidth - 20} height={(window.innerWidth - 20) * 9 / 16} src="https://www.youtube.com/embed/jxoHQHQm3rY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
               </div>
            </div>

            <div className="h-20" />

            <div className="w-full z-50 py-10 flex-center">
               <NavigationArrows previous="/eure" next="/cr" />
            </div>

         </div>
      </>


   );
}
