import React, { useState, useEffect, useContext } from "react";
import './../../../styles/index.css';
import { Rnd } from 'react-rnd';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";

import CAJO1 from './../../../assets/trefle/2-cajo/CAJO1.jpg'
import CAJO2 from './../../../assets/trefle/2-cajo/CAJO2.jpg'
import CAJO3 from './../../../assets/trefle/2-cajo/CAJO3.jpg'
import CAJO4 from './../../../assets/trefle/2-cajo/CAJO4.jpg'
import CAJO5 from './../../../assets/trefle/2-cajo/CAJO5.jpg'
import CAJO6 from './../../../assets/trefle/2-cajo/CAJO6.jpg'
import CAJO7 from './../../../assets/trefle/2-cajo/CAJO7.jpg'
import CAJO8 from './../../../assets/trefle/2-cajo/CAJO8.jpg'
import CAJO9 from './../../../assets/trefle/2-cajo/CAJO9.jpg'
import CAJO10 from './../../../assets/trefle/2-cajo/CAJO10.jpg'
import CAJO11 from './../../../assets/trefle/2-cajo/CAJO11.jpg'
import CAJO12 from './../../../assets/trefle/2-cajo/CAJO12.jpg'
import CAJO13 from './../../../assets/trefle/2-cajo/CAJO13.jpg'
import CAJO19 from './../../../assets/trefle/2-cajo/CAJO19.jpg'

import SITE from './../../../assets/trefle/2-cajo/SITE.gif'

import ProjectDescription from "../../utils/ProjectDescription";

export default function Cajo() {
   const updateZ = (img) => {
      for (var i = 1; i < 15; i++) {
         document.getElementById(i).style.zIndex = 0
         console.log("CAJO " + i + " " + document.getElementById(i).style.transform)
      }
      document.getElementById(img).style.zIndex = 1;
   }

   const [imagesLoaded, setImagesLoaded] = useState(false);

   return (
      <div className="w-full text-white">

         {/* ---------- MOBILE VERSION ---------- */}
         {(window.innerWidth <= 768) &&
            <div className="w-full">
               <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
                  <NavigationArrows previous="/contexte" next="/m" />
               </div>

               <div className="h-40 " />
               <div className="px-10">
               <ProjectDescription title="CAJO" content="CAJO est une marque de prêt-à-porter, que j'ai co-fondée en 2016." />

               </div>

               <div className="h-12" />
               
               <div className="w-full grid grid-cols-3" >
                  <div>
                     <LazyLoadImage src={CAJO1} />
                     <LazyLoadImage src={CAJO2} />
                     <LazyLoadImage src={CAJO3} />
                  </div>
                  <div>
                     <LazyLoadImage src={CAJO4} />
                     <LazyLoadImage src={CAJO5} />
                     <LazyLoadImage src={CAJO6} />
                     <LazyLoadImage src={CAJO10} />
                     <LazyLoadImage src={CAJO11} />

                  </div>
                  <div>
                     <LazyLoadImage src={CAJO7} />
                     <LazyLoadImage src={CAJO8} />
                     <LazyLoadImage src={CAJO9} />

                  </div>
               </div>
            </div>}



         {/* ---------- DESKTOP VERSION ---------- */}
         {(window.innerWidth > 768) && <div id="cajocontainer" className="relative w-full flex-col-center 3xl:min-h-screen">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/contexte" next="/m" />
            </div>

            <div className="h-40" />

            <div className="w-full flex-col-center">

               <ProjectDescription title="CAJO" content="CAJO est une marque de prêt-à-porter, que j'ai co-fondée en 2016."
               content2="Le but premier était de retranscrire sur le tissu nos idées farfelues"
               content3="traduites par des phrases cultes et parfois provocatrices."
               classSpecified="w-80 md:w-auto 3xl:w-176 3xl:text-xl" />

               <div className="md:h-20" />

               <div id="container" className="w-full">
                  <div className="w-full pr-12 3xl:pr-40 flex justify-end pt-6">
                     <ArrowText type="right" content="Déplacez les photos pour découvrir davantage l'univers de la marque." />

                  </div>

                  <div className={imagesLoaded ? "w-full h-70vh mb-20 cursor-move" : "w-full h-70vh mb-20 opacity-0"} onLoad={() => setImagesLoaded(true)}>

                     <Rnd
                        id="1"
                        default={{
                           x: 930 * (window.innerWidth / 1440),
                           y: 680 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("1")}
                     >
                        <img src={CAJO1} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="2"
                        default={{
                           x: 200 * (window.innerWidth / 1440),
                           y: 610 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("2")}
                     >
                        <img src={CAJO2} className="object-fit transform -rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="3"
                        default={{
                           x: 760 * (window.innerWidth / 1440),
                           y: 500 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("3")}
                     >
                        <img src={CAJO3} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="4"
                        default={{
                           x: 530 * (window.innerWidth / 1440),
                           y: 610 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("4")}
                     >
                        <img src={CAJO4} className="object-fit transform -rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="5"
                        default={{
                           x: 400 * (window.innerWidth / 1440),
                           y: 510 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("5")}
                     >
                        <img src={CAJO5} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="6"
                        default={{
                           x: 630 * (window.innerWidth / 1440),
                           y: 470 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("6")}
                     >
                        <img src={CAJO6} className="object-fit transform -rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="7"
                        default={{
                           x: 530 * (window.innerWidth / 1440),
                           y: 520 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("7")}
                     >
                        <img src={CAJO7} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="8"
                        default={{
                           x: 270 * (window.innerWidth / 1440),
                           y: 550 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("8")}
                     >
                        <img src={CAJO8} className="object-fit transform -rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="9"
                        default={{
                           x: 900 * (window.innerWidth / 1440),
                           y: 730 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("9")}
                     >
                        <img src={CAJO9} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="10"
                        default={{
                           x: 770 * (window.innerWidth / 1440),
                           y: 810 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("10")}
                     >
                        <img src={CAJO10} className="object-fit transform -rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="11"
                        default={{
                           x: 700 * (window.innerWidth / 1440),
                           y: 660 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("11")}
                     >
                        <img src={CAJO11} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="12"
                        default={{
                           x: 380 * (window.innerWidth / 1440),
                           y: 640 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("12")}
                     >
                        <img src={CAJO12} className="object-fit transform -rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="13"
                        default={{
                           x: 950 * (window.innerWidth / 1440),
                           y: 630 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("13")}
                     >
                        <img src={CAJO13} className="object-fit transform rotate-12" draggable={false} />
                     </Rnd>
                     <Rnd
                        id="14"
                        default={{
                           x: 560 * (window.innerWidth / 1440),
                           y: 700 - 600,
                           width: window.innerWidth / 5,
                           height: window.innerHeight / 5,
                        }}
                        bounds="#container"
                        onDragStart={() => updateZ("14")}
                     >
                        <img src={CAJO19} className="object-fit rotate-12" draggable={false} />
                     </Rnd>

                  </div>
               </div>


               <div className="w-full flex-center z-50 pt-10 pb-24">
                  <NavigationArrows previous="/contexte" next="/m" />
               </div>
            </div>

         </div>}
      </div>
   );
}

/*
<div className="w-full grid grid-cols-3" >
                  <div>
                     <LazyLoadImage src={CAJO17} />
                     <LazyLoadImage src={CAJO2} />

                  </div>
                  <div>
                     <LazyLoadImage src={CAJO4} />
                     <LazyLoadImage src={CAJO5} />
                     <LazyLoadImage src={CAJO3} />
                  </div>
                  <div>
                     <LazyLoadImage src={CAJO13} />
                     <LazyLoadImage src={CAJO14} />
                  </div>
               </div>
                */