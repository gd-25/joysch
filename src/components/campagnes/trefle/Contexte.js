import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Utils
import ArrowText from '../../utils/ArrowText';
import ProjectDescription from '../../utils/ProjectDescription';

import NavigationArrows from "../../utils/NavigationArrows";
import HTMLFlipBook from "react-pageflip";

import PAGES0 from './../../../assets/trefle/4-contexte/PAGES0.jpg'
import PAGES1 from './../../../assets/trefle/4-contexte/PAGES1.jpg'
import PAGES2 from './../../../assets/trefle/4-contexte/PAGES2.jpg'
import PAGES3 from './../../../assets/trefle/4-contexte/PAGES3.jpg'
import PAGES4 from './../../../assets/trefle/4-contexte/PAGES4.jpg'
import PAGES5 from './../../../assets/trefle/4-contexte/PAGES5.jpg'
import PAGES6 from './../../../assets/trefle/4-contexte/PAGES6.jpg'
import PAGES7 from './../../../assets/trefle/4-contexte/PAGES7.jpg'
import PAGES8 from './../../../assets/trefle/4-contexte/PAGES8.jpg'
import PAGES9 from './../../../assets/trefle/4-contexte/PAGES9.jpg'
import PAGES10 from './../../../assets/trefle/4-contexte/PAGES10.jpg'
import PAGES11 from './../../../assets/trefle/4-contexte/PAGES11.jpg'
import PAGES12 from './../../../assets/trefle/4-contexte/PAGES12.jpg'
import PAGES13 from './../../../assets/trefle/4-contexte/PAGES13.jpg'
import PAGES14 from './../../../assets/trefle/4-contexte/PAGES14.jpg'
import PAGES15 from './../../../assets/trefle/4-contexte/PAGES15.jpg'
import PAGES16 from './../../../assets/trefle/4-contexte/PAGES16.jpg'

export default function Contexte() {
   return (
      <div className="w-full bg-black text-white min-h-screen">
         <div className="h-40" />

         <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
            <NavigationArrows previous="/trefle" next="/cajo" />
         </div>

         <div className="w-full flex-col-center">
            <ProjectDescription title="CONTEXTE" content='C’est un projet d’édition, de direction artistique, de rédaction et d’impression. Il questionne sur l’Homme et son rapport à l’appartenance. Nous mettons des mots sur le désir, sur des émotions mais également sur notre époque. Dans ce premier numéro intitulé "MEOW", traduction anglophone de "miaulement", nous parlons de l’Homme et du dressage qu’il subit puis exécute à son tour. Cette onomatopée est le bruit de notre souffle lorsque la société n’est plus faite d’échanges moraux sains et droits.'
               classSpecified="w-80 md:w-220 3xl:w-176 3xl:text-xl" />
         </div>

         <div className="absolute top-0 right-0 3xl:pr-40 pt-120 text-white">
            <ArrowText type="right" content="Tourner la page n’a jamais été aussi simple. Cliquez." />
         </div>

         <div className="hidden md:flex w-full flex-center">
            <HTMLFlipBook showCover drawShadow={false} width="330" height="700">
               <img src={PAGES0} className="object-78 h-192 w-full object-cover cursor-pointer " />

               <img src={PAGES1} className="object-22 h-192 w-full object-cover cursor-pointer " />
               <img src={PAGES1} className="object-78 h-192 w-full object-cover cursor-pointer " />

               <img src={PAGES2} className="object-22 h-192 w-full object-cover cursor-pointer " />
               <img src={PAGES2} className="object-78 h-192 w-full object-cover cursor-pointer " />

               <img src={PAGES3} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES3} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES4} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES4} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES5} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES5} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES6} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES6} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES7} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES7} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES8} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES8} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES9} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES9} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES10} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES10} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES11} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES11} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES12} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES12} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES13} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES13} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES14} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES14} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES15} className="object-22 h-192 w-full object-cover cursor-pointer" />
               <img src={PAGES15} className="object-78 h-192 w-full object-cover cursor-pointer" />

               <img src={PAGES16} className="object-22 h-192 w-full object-cover cursor-pointer" />
            </HTMLFlipBook>
         </div>

         <div className="md:hidden flex-col-center w-full">
            <LazyLoadImage src={PAGES0} className="w-full object-contain" />

            <LazyLoadImage src={PAGES1} className="w-full object-contain" />

            <LazyLoadImage src={PAGES2} className="w-full object-contain" />

            <LazyLoadImage src={PAGES3} className="w-full object-contain" />

            <LazyLoadImage src={PAGES4} className="w-full object-contain" />

            <LazyLoadImage src={PAGES5} className="w-full object-contain" />

            <LazyLoadImage src={PAGES6} className="w-full object-contain" />

            <LazyLoadImage src={PAGES7} className="w-full object-contain" />

            <LazyLoadImage src={PAGES8} className="w-full object-contain" />

            <LazyLoadImage src={PAGES9} className="w-full object-contain" />

            <LazyLoadImage src={PAGES10} className="w-full object-contain" />

            <LazyLoadImage src={PAGES11} className="w-full object-contain" />

            <LazyLoadImage src={PAGES12} className="w-full object-contain" />

            <LazyLoadImage src={PAGES13} className="w-full object-contain" />

            <LazyLoadImage src={PAGES14} className="w-full object-contain" />

            <LazyLoadImage src={PAGES15} className="w-full object-contain" />

            <LazyLoadImage src={PAGES16} className="w-full object-contain" />
         </div>


         <div className="w-full flex-center z-50 py-10">
            <NavigationArrows previous="/trefle" next="/cajo" />
         </div>
      </div>
   );
}
