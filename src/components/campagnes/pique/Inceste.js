import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PRINT1 from './../../../assets/pique/4-inceste/PRINT_1.jpg'
import PRINT2 from './../../../assets/pique/4-inceste/PRINT_2.jpg'
import PRINT3 from './../../../assets/pique/4-inceste/PRINT_3.jpg'
import INTRODUCTION from './../../../assets/pique/4-inceste/INTRODUCTION.mp4'
import SPOT from './../../../assets/pique/4-inceste/SPOT.mp4'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";
import ProjectDescription from "../../utils/ProjectDescription";

export default function Inceste() {
   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full 3xl:max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/sante-publique" next="/trefle" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">L'INCESTE</h1>
               <h3 className="text-lg leading-tight">Campagne fictive de sensibilisation</h3>
               <p className="text-xs font-thin italic pt-1">Janvier 2021</p>

               <p className="py-4 italic text-gray-400 opacity-80">1 enfant sur 10 est victime d’inceste. Bercé dans le silence, la violence, la honte, l’inceste détruit l’écosystème des victimes, sans jamais leur laisser de choix.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectifs</h3>
                     <p className="text-sm">Sensibiliser, informer, médiatiser, fédérer.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Cible</h3>
                     <p className="text-sm">17/ 25 ans. La génération qui se lève !</p>
                     <div className="h-2" />

                     <h3 className="text-base">Insight</h3>
                     <p className="text-sm">L’enfance est un processus long et fragile qui se construit au travers de l’affection et de l’éducation. L’agression quant à elle, ne fait que détruire. </p>
                     <div className="h-2" />
                  </div>

                  <div className="w-80 md:w-96">


                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm font-bold">Agresser est un choix. <br />S’unir l’est aussi.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Parti pris</h3>
                     <p className="text-sm">Tonalité extravagante, chute inattendue.</p>
                  </div>
               </div>
            </div>

            <div className="h-16" />

            {/* -------- DESKTOP VERSION -------- */}
            <div className="w-full hidden md:block">
               <div className="w-full flex-center pb-8">
                  <video src={INTRODUCTION} controls className="object-cover w-320 h-40 focus:outline-none" style={{ filter: "invert(1) grayscale(100%)" }} />
               </div>

               <div className="h-20" />

               <div className="w-full flex-center">
                  <div className="w-220 flex flex-col justify-start">
                     <h1 className="text-2xl 3xl:text-4xl">SCRIPT SPOT RADIO</h1>
                     <div className="h-3" />
                     <p className="pr-8">« L’inceste ne se cache pas que dans le silence, aussi dans le quotidien, « chez Monsieur et madame tout monde ». Ce spot radio bouleverse les codes des campagnes de sensibilisation classiques en heurtant par son décalage et sa chute inattendue. Lors de l’écoute, on ne peut s’empêcher de faire le choix d’imaginer un membre de sa famille, jusqu’à ce que la fin arrive et que le dégoût s’empare de l’auditeur.</p>
                  </div>
               </div>

               <div className="w-full flex-center pb-8">
                  <video src={SPOT} controls className="object-cover w-320 h-40 focus:outline-none" style={{ filter: "invert(1) grayscale(100%)" }} />
               </div>

               <div className="h-20" />


               <div className="flex flex-col md:flex-row justify-center items-center">
                  <LazyLoadImage effect="blur" src={PRINT1} className="object-contain h-128 px-8" />
                  <LazyLoadImage effect="blur" src={PRINT2} className="object-contain h-128 px-8" />
                  <LazyLoadImage effect="blur" src={PRINT3} className="object-contain h-128 px-8" />
               </div>

               <div className="w-full flex justify-start pl-6">
                  <ArrowText type="big-bottom-left" title="PRINTS" content="Position du spectateur impuissant face à une situation déjà irréversible."
                     content1="Tonalité déconcertante et inattendue."
                     content2="Accentuation du concept créatif « Le choix »." />
               </div>

               <div className="h-32" />

               {/*
               <div className="w-full flex-center">
                  <div className="w-220 flex flex-col justify-start">
                     <h1 className="text-2xl 3xl:text-4xl">FIL ROUGE STRATÉGIE DIGITALE</h1>
                     <div className="h-3" />
                     <p className="pr-8">Détournement des fonctionnalités des touchpoints de la cible en ne laissant pas le choix.</p>
                     <div className="h-2" />

                     <h3 className="font-bold">Youtube</h3>
                     <p>Faux Call to action « passez cette annonce » sur des prerolls non skippables.</p>
                     <div className="h-2" />

                     <h3 className="font-bold">Twitch</h3>
                     <p>Encarts publicitaires dissimulés en faux lives pour attirer le clic.</p>
                  </div>
               </div>
                              <div className="h-20" />

               */}


               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/sante-publique" next="/trefle" />
               </div>
            </div>

            {/* -------- MOBILE VERSION -------- */}
            <div className="w-full md:hidden px-10">

               <div className="h-20" />

               <LazyLoadImage effect="blur" src={PRINT1} className="" />
               <LazyLoadImage effect="blur" src={PRINT2} className="" />
               <LazyLoadImage effect="blur" src={PRINT3} className="" />

               <div className="h-20" />


               <div className="h-20" />

               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/sante-publique" next="/trefle" />
               </div>
            </div>

         </div>
      </div>
   );
}
