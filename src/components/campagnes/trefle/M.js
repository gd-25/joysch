import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import POCHETTE from './../../../assets/trefle/3-m/POCHETTE.png'
import LOGO from './../../../assets/trefle/3-m/LOGO.png'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";
import ProjectDescription from "../../utils/ProjectDescription";

export default function M() {
   return (
      <div className="w-full text-white">

         {/* ---------- DESKTOP VERSION ---------- */}
         {(window.innerWidth > 768) && <div id="mcontainer" className="relative w-full flex-col-center 3xl:min-h-screen">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/cajo" next="/maison-macci" />
            </div>

            <div className="h-40" />

            <div className="w-full flex-col-center">

               <ProjectDescription title="CLIP M - SQU4RE" content="Lors d'un voyage en Afrique du Sud, un défi m'a été lancé : réaliser un clip en 3 mois,"
                  content2="sans budget, pour le groupe français Squ4re."
                  classSpecified="w-80 md:w-auto 3xl:w-176 3xl:text-xl" />

               <div className="h-20" />

               <iframe width="840" height="480" src="https://www.youtube.com/embed/MlwgKxNFlwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

               <div className="h-20" />

               <div className="w-full grid grid-cols-2">
                  <div className="flex-center">
                     <div className="mr-12">
                        <ArrowText type="left" title="POCHETTE" title1="DU MORCEAU" classSpecified="w-54 pt-3 text-xl " />
                     </div>
                     <LazyLoadImage src={POCHETTE} className="h-64 object-contain" />
                  </div>

                  <div className="flex-center">
                     <LazyLoadImage src={LOGO} className="h-40 object-contain" />
                     <div className="ml-12">
                        <ArrowText type="big-right" title="LOGO" title1="DU MORCEAU" classSpecified="w-54 pt-3 text-xl " />
                     </div>
                  </div>
               </div>

               <div className="h-20" />

            </div>

            <div className="w-full flex-center z-50 py-10">
               <NavigationArrows previous="/cajo" next="/maison-macci" />
            </div>

         </div>}

         {/* ---------- MOBILE VERSION ---------- */}
         {(window.innerWidth < 768) && <div id="mcontainer" className="">

            <div className="h-40" />
            <ProjectDescription title="CLIP M - SQU4RE" content="Lors d'un voyage en Afrique du Sud, un défi m'a été lancé : réaliser un clip en 3 mois,"
               content2="sans budget, pour le groupe français Squ4re."
               classSpecified="w-80 md:w-auto 3xl:w-176 3xl:text-xl" />

            <div className="h-20" />

            <div className="w-full flex-center">
               <iframe width={window.innerWidth - 30} height={window.innerWidth * 9 / 16} src="https://www.youtube.com/embed/MlwgKxNFlwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="h-20" />

            <div className="w-full flex-center bg-transparent">
               <LazyLoadImage src={POCHETTE} className="w-1/2 px-4 object-contain" />
               <LazyLoadImage src={LOGO} className="w-1/2 px-4 object-contain" />
            </div>

            <div className="h-32" />

            <div className="w-full flex-center z-50 py-10">
               <NavigationArrows previous="/cajo" next="/maison-macci" />
            </div>

         </div>}

      </div>
   );
}
