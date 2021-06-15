import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PRINT1 from './../../../assets/pique/5-jetaide/PRINT1.jpg'
import PRINT2 from './../../../assets/pique/5-jetaide/PRINT2.jpg'
import PRINT3 from './../../../assets/pique/5-jetaide/PRINT3.jpg'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";

export default function JeTaide() {
   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full 3xl:max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/sante-publique" next="/trefle" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">JE T'AIDE</h1>
               <h3 className="text-lg leading-tight">Campagne de sensibilisation</h3>
               <p className="text-xs font-thin italic pt-1">Juin 2021</p>

               <p className="py-4 italic text-gray-400 opacity-80">Le Collectif Je t’Aide milite au quotidien pour une reconnaissance des 11 millions d’aidants et pour leurs droits.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectifs</h3>
                     <p className="text-sm">Questionner la société et les pouvoirs publics afin de faire bouger les lignes pour que les aidants aient une reconnaissance et des droits à la hauteur de leur rôle sociétal.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Insight</h3>
                     <p className="text-sm">Souvent oubliés dans les débats publics, les aidants souhaitent davantage de reconnaissance et un statut juridique officiel les protégeant des risques moraux et financiers auxquels ils sont confrontés. Pour conséquence et face à ce non-statut juridique, certains aidants n’ont toujours pas conscience de l’être.</p>
                     <div className="h-2" />
                  </div>

                  <div className="w-80 md:w-96">


                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm font-bold">Je ne suis pas ce que vous croyez.</p>
                     <p className="text-sm">La réalité des aidants est parfois différente de ce que l’on peut imaginer. Nous proposons une série de portraits descriptifs avec une caractéristique particulière et sa réponse, qui est à chaque fois différente de ce que l’on imagine.</p>
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

               
               <div className="h-20" />


               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/sante-publique" next="/trefle" />
               </div>
            </div>

            {/* -------- MOBILE VERSION -------- */}
            <div className="w-full md:hidden">

               <div className="h-12" />

               <LazyLoadImage effect="blur" src={PRINT1} className="px-10 py-4" />
               <LazyLoadImage effect="blur" src={PRINT2} className="px-10 py-4" />
               <LazyLoadImage effect="blur" src={PRINT3} className="px-10 py-4" />

               <div className="h-12" />

               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/sante-publique" next="/trefle" />
               </div>
            </div>

         </div>
      </div>
   );
}
