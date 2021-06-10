import React, { useState } from "react";
import './../../../styles/index.css';
import { Rnd } from 'react-rnd';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";

import HOME from './../../../assets/trefle/1-maison-macci/HOME.jpg'
import LOGO from './../../../assets/trefle/1-maison-macci/LOGO.png'

import MACCI1 from './../../../assets/trefle/1-maison-macci/photos/MACCI1.jpg'
import MACCI2 from './../../../assets/trefle/1-maison-macci/photos/MACCI2.jpg'
import MACCI3 from './../../../assets/trefle/1-maison-macci/photos/MACCI3.jpg'
import MACCI4 from './../../../assets/trefle/1-maison-macci/photos/MACCI4.jpg'
import MACCI5 from './../../../assets/trefle/1-maison-macci/photos/MACCI5.jpg'
import MACCI6 from './../../../assets/trefle/1-maison-macci/photos/MACCI6.jpg'
import MACCI7 from './../../../assets/trefle/1-maison-macci/photos/MACCI7.jpg'
import MACCI8 from './../../../assets/trefle/1-maison-macci/photos/MACCI8.jpg'
import MACCI9 from './../../../assets/trefle/1-maison-macci/photos/MACCI9.jpg'
import MACCI10 from './../../../assets/trefle/1-maison-macci/photos/MACCI10.jpg'
import MACCI11 from './../../../assets/trefle/1-maison-macci/photos/MACCI11.jpg'
import MACCI12 from './../../../assets/trefle/1-maison-macci/photos/MACCI12.jpg'
import MACCI13 from './../../../assets/trefle/1-maison-macci/photos/MACCI13.jpg'
import MACCI14 from './../../../assets/trefle/1-maison-macci/photos/MACCI14.jpg'
import MACCI15 from './../../../assets/trefle/1-maison-macci/photos/MACCI15.jpg'
import MACCI16 from './../../../assets/trefle/1-maison-macci/photos/MACCI16.jpg'
import MACCI17 from './../../../assets/trefle/1-maison-macci/photos/MACCI17.jpg'
import MACCI18 from './../../../assets/trefle/1-maison-macci/photos/MACCI18.jpg'
import MACCI19 from './../../../assets/trefle/1-maison-macci/photos/MACCI19.jpg'
import MACCI20 from './../../../assets/trefle/1-maison-macci/photos/MACCI20.jpg'
import MACCI21 from './../../../assets/trefle/1-maison-macci/photos/MACCI21.jpg'
import MACCI22 from './../../../assets/trefle/1-maison-macci/photos/MACCI22.jpg'


import SITE1 from './../../../assets/trefle/1-maison-macci/SITE1.jpg'
import SITE2 from './../../../assets/trefle/1-maison-macci/SITE2.jpg'
import SITE3 from './../../../assets/trefle/1-maison-macci/SITE3.jpg'
import ProjectDescription from "../../utils/ProjectDescription";

// Puzzle
import Puzzle from 'react-dnd-image-puzzle';
import HOMESQUARE from './../../../assets/trefle/1-maison-macci/HOMESQUARE.jpg'


export default function MaisonMacci() {


   const [puzzleSolved, setPuzzleSolved] = useState(false);
   const onPuzzleComplete = () => {
      document.getElementById("puzzle").className = "p-6 bg-yellow-300";
      setTimeout(() => setPuzzleSolved(true), 1000)
      setTimeout(() => window.scrollTo(0, 0), 1000)
   }


   return (
      <div className="bg-black text-white">

         {(!puzzleSolved && window.innerWidth > 768) && <div className="w-full flex-col-center z-50 min-h-screen">
            <div className="h-40" />
            <h1 className="w-full md:w-160 flex-center text-2xl md:text-3xl text-white font-black text-center" >RÉSOUDS LE PUZZLE POUR DÉCOUVRIR MAISON MACCI</h1>

            <div className="text-xs underline hover:text-redsix cursor-pointer py-3" onClick={onPuzzleComplete}>Passer cette étape</div>

            <div id="puzzle" className="p-6 z-50">
               <Puzzle
                  image={HOMESQUARE}
                  width={window.innerWidth / 3}
                  height={window.innerWidth / 3}
                  onComplete={onPuzzleComplete}
               />
            </div>

            <div className="w-full flex-center z-50 py-10">
               <NavigationArrows previous="/cajo" next="/paire" />
            </div>
         </div>}

         {(puzzleSolved || window.innerWidth <= 768) && <div className="flex-col-center">
            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/cajo" next="/paire" />
            </div>

            <div className="h-40" />

            <div className="w-full flex flex-col justify-center items-center">
               <ProjectDescription title="MAISON MACCI" content="Maison Macci est une marque Corse de prêt-à-porter féminin. Via une matière naturelle et inlassablement chic, la soie, la créatrice confectionne chaque année un imprimé emblématique de son île. Cela fait 3 ans que je collabore avec Maison Macci au travers de shootings photo, média planning, stratégie visuelle et direction artistique."
               classSpecified="w-80 md:w-160 3xl:w-176 3xl:text-xl" />
               <div className="h-20" />
               <LazyLoadImage src={HOME} className="w-full md:w-176" />
            </div>

            <div className="w-full py-6 flex flex-col md:flex-row justify-center items-center bg-whitesix">
               <LazyLoadImage src={SITE1} className="h-80 object-contain" />
               <LazyLoadImage src={SITE2} className="h-80 object-contain" />
               <LazyLoadImage src={SITE3} className="h-80 object-contain" />
            </div>

            <div className="w-full grid grid-cols-3" >
               <div>
                  <LazyLoadImage src={MACCI8} />
                  <LazyLoadImage src={MACCI2} />
                  <LazyLoadImage src={MACCI1} />
                  <LazyLoadImage src={MACCI10} />
                  <LazyLoadImage src={MACCI11} />
                  <LazyLoadImage src={MACCI12} />
                  <LazyLoadImage src={MACCI13} />
                  <LazyLoadImage src={MACCI14} />

               </div>
               <div>
                  <LazyLoadImage src={MACCI4} />
                  <LazyLoadImage src={MACCI3} />
                  <LazyLoadImage src={MACCI5} />
                  <LazyLoadImage src={MACCI15} />
                  <LazyLoadImage src={MACCI16} />
                  <LazyLoadImage src={MACCI17} />
                  <LazyLoadImage src={MACCI14} />
                  <LazyLoadImage src={MACCI21} />

                  <h1 className="hidden md:block md:text-2xl 3xl:text-4xl p-8 text-center">"La soie sublime le modèle et le modèle sublime la soie."</h1>
               </div>
               <div>
                  <LazyLoadImage src={MACCI6} />
                  <LazyLoadImage src={MACCI7} />
                  <LazyLoadImage src={MACCI9} />
                  <LazyLoadImage src={MACCI18} />
                  <LazyLoadImage src={MACCI19} />
                  <LazyLoadImage src={MACCI20} />
                  <LazyLoadImage src={MACCI22} />



               </div>
            </div>

            <div className="w-full flex-center z-50 pt-32 pb-10">
               <NavigationArrows previous="/cajo" next="/paire" />
            </div>
         </div>}


      </div>
   );
}



/*
<div className="w-full flex-center pb-24 px-10 pt-20 md:pt-0">
            <h1 className="w-112 md:text-2xl">"La soie sublime le modèle et le modèle sublime la soie."</h1>
         </div>



         {window.innerWidth > 760 && <div id="container" className="w-full">
            <div className="w-full 3xl:px-120 flex justify-end pt-6">
               <ArrowText type="top-right" content="Déplacez les photos pour découvrir l'univers." />
            </div>

            <div className={imagesLoaded ? "w-full h-70vh mb-20 cursor-move" : "w-full h-70vh mb-20 opacity-0"} onLoad={() => setImagesLoaded(true)}>

               <Rnd
                  id="1"
                  default={{
                     x: window.innerWidth / 3 -50,
                     y: window.innerHeight / 20+10,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("1")}
               >
                  <img src={MACCI1} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="2"
                  default={{
                     x: window.innerWidth / 3-40,
                     y: window.innerHeight / 20+20,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("2")}
               >
                  <img src={MACCI2} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="3"
                  default={{
                     x: window.innerWidth / 3-20,
                     y: window.innerHeight / 20,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("3")}
               >
                  <img src={MACCI3} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="4"
                  default={{
                     x: window.innerWidth / 3+10,
                     y: window.innerHeight / 20-30,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("4")}
               >
                  <img src={MACCI4} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="5"
                  default={{
                     x: window.innerWidth / 3+30,
                     y: window.innerHeight / 20+40,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("5")}
               >
                  <img src={MACCI5} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="6"
                  default={{
                     x: window.innerWidth / 3+40,
                     y: window.innerHeight / 20,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("6")}
               >
                  <img src={MACCI6} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="7"
                  default={{
                     x: window.innerWidth / 3+50,
                     y: window.innerHeight / 20,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  onDragStart={() => updateZ("7")}
               >
                  <img src={MACCI7} className="object-fit" draggable={false} />
               </Rnd>
               <Rnd
                  id="8"
                  default={{
                     x: window.innerWidth / 3,
                     y: window.innerHeight / 20+35,
                     width: window.innerWidth / 3,
                     height: window.innerHeight / 3,
                  }}
                  bounds="#container"
                  style={{ zIndex: 1 }}
                  onDragStart={() => updateZ("8")}
               >
                  <img src={MACCI8} className="object-fit" draggable={false} />
               </Rnd>

            </div>
         </div>}
          */