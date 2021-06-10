import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PRINT1 from './../../../assets/pique/3-la-cimade/PRINT_1.jpg'
import PRINT2 from './../../../assets/pique/3-la-cimade/PRINT_2.jpg'
import PRINT3 from './../../../assets/pique/3-la-cimade/PRINT_3.jpg'

import MOCKUP1 from './../../../assets/pique/3-la-cimade/MOCKUP1.png'
import MOCKUP2 from './../../../assets/pique/3-la-cimade/MOCKUP2.png'
import MOCKUP3 from './../../../assets/pique/3-la-cimade/MOCKUP3.png'

import VIDEO from './../../../assets/pique/3-la-cimade/VIDEO.mp4'
import PLACEHOLDER from './../../../assets/pique/3-la-cimade/PLACEHOLDER.png'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";

export default function LaCimade() {
   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full 3xl:max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/pique" next="/wwf" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">LA CIMADE</h1>
               <h3 className="text-lg leading-tight">Campagne de sensibilisation</h3>
               <p className="text-xs font-thin italic pt-1">Mars 2021</p>

               <p className="py-4 italic text-gray-400 opacity-80">Chaque année, des milliers de réfugiés et migrants sont exploités, discriminés et opprimés.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectifs</h3>
                     <p className="text-sm">Sensibiliser, appeler aux dons, enclencher un réveil collectif.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Insight</h3>
                     <p className="text-sm">La vie est souvent faite de rencontres. Mais <br />aujourd’hui, elle est aussi faite de nombreuses occasions de rencontres manquées, creusant <br />un peu plus chaque jour une déshumanisation.</p>
                     <div className="h-2" />
                  </div>

                  <div className="w-80 md:w-96">


                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm font-bold">Ne passons pas à côté de l’humanité.</p>
                  </div>
               </div>
            </div>

            <div className="h-16" />

            {/* -------- DESKTOP VERSION -------- */}
            <div className="w-full hidden md:block">
               <div className="flex flex-col md:flex-row justify-center items-center">
                  <LazyLoadImage effect="blur" src={PRINT1} className="object-contain h-128 px-8" />
                  <LazyLoadImage effect="blur" src={PRINT2} className="object-contain h-128 px-8" />
                  <LazyLoadImage effect="blur" src={PRINT3} className="object-contain h-128 px-8" />
               </div>

               <div className="h-32" />

               <div className="w-full flex-center h-full">
                  <iframe src="https://player.vimeo.com/video/528834636" width="840" height="480" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
               </div>

               <div className="h-32" />

               <div className="flex flex-col md:flex-row justify-center items-center px-20">
                  <a href="https://jai-un-pote-dans-la.com/avec-la-cimade-et-josiane-lhumanite-passe-par-lautre/" target="_blank" className="hover:opacity-70">
                     <LazyLoadImage effect="blur" src={MOCKUP1} className="object-contain w-full px-3" />
                  </a>
                  <a href="http://www.packshotmag.com/films/la-cimade-ne-passons-plus-a-cote-de-lhumanite/" target="_blank" className="hover:opacity-70">
                     <LazyLoadImage effect="blur" src={MOCKUP2} className="object-contain w-full px-3" />
                  </a>
                  <a href="https://creapills.com/la-cimade-humanite-josiane-20210329" target="_blank" className="hover:opacity-70">
                     <LazyLoadImage effect="blur" src={MOCKUP3} className="object-contain w-full px-3" />
                  </a>
               </div>

               <div className="h-20" />


               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/pique" next="/wwf" />
               </div>
            </div>

            {/* -------- MOBILE VERSION -------- */}
            <div className="w-full md:hidden">

               <div className="h-12" />

               <LazyLoadImage effect="blur" src={PRINT1} className="px-10 py-4" />
               <LazyLoadImage effect="blur" src={PRINT2} className="px-10 py-4" />
               <LazyLoadImage effect="blur" src={PRINT3} className="px-10 py-4" />

               <div className="h-12" />

               <div className="w-full flex-center">
                  <iframe src="https://player.vimeo.com/video/528834636" width={window.innerWidth - 30} height={window.innerWidth * 9 / 16} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
               </div>

               <div className="h-12" />

               <div className="flex-col-center">
                  <a href="https://jai-un-pote-dans-la.com/avec-la-cimade-et-josiane-lhumanite-passe-par-lautre/" target="_blank" className="hover:opacity-70">
                     <LazyLoadImage effect="blur" src={MOCKUP1} className="object-contain w-full py-3" />
                  </a>
                  <a href="http://www.packshotmag.com/films/la-cimade-ne-passons-plus-a-cote-de-lhumanite/" target="_blank" className="hover:opacity-70">
                     <LazyLoadImage effect="blur" src={MOCKUP2} className="object-contain w-full py-3" />
                  </a>
                  <a href="https://creapills.com/la-cimade-humanite-josiane-20210329" target="_blank" className="hover:opacity-70">
                     <LazyLoadImage effect="blur" src={MOCKUP3} className="object-contain w-full py-3" />
                  </a>
               </div>

               <div className="h-20" />


               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/pique" next="/wwf" />
               </div>
            </div>

         </div>
      </div>
   );
}
