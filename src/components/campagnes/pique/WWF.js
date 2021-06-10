import './../../../styles/index.css';

import BALEINE from './../../../assets/pique/1-WWF/BALEINE.png'
import RHINO from './../../../assets/pique/1-WWF/RHINO.png'
import PUMA from './../../../assets/pique/1-WWF/PUMA.png'

import INSTA1 from './../../../assets/pique/1-WWF/INSTA-1.png'
import INSTA2 from './../../../assets/pique/1-WWF/INSTA-2.png'
import VIDEO from './../../../assets/pique/1-WWF/VIDEO.mp4'
import LOGO from './../../../assets/pique/1-WWF/LOGO.png'

import ARROW from './../../../logos/ARROW.svg'

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";

export default function WWF() {
   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/la-cimade" next="/sante-publique" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">WWF</h1>
               <h3 className="text-lg leading-tight">Campagne fictive 360° Internationale de sensibilisation</h3>
               <p className="text-xs font-thin italic pt-1">Octobre 2019</p>

               <p className="py-4 italic text-gray-400 opacity-80">Tous les ans, plus de 26 000 espèces disparaissent de la surface de la terre.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectifs</h3>
                     <p className="text-sm">Sensibiliser, heurter, happer.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Coeur de cible</h3>
                     <p className="text-sm">17-20 ans. Génération née avec et dans le Digital. Hyper connectée, active sur les réseaux sociaux. Éveillée (avertie quant aux préoccupations sociales, environnementales et politiques d’aujourd’hui). <br />Happée par l’idée d’appartenir à une ou plusieurs communautés. Actrice du monde de demain.</p>
                     <div className="h-2" />
                  </div>

                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Problématique de communication</h3>
                     <p className="text-sm">En capitalisant sur l’image influente et puissante de la plateforme Netflix, comment faire comprendre à une génération ancrée dans le digital qu’elle est actrice de son propre futur ?</p>
                     <div className="h-2" />

                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm font-bold">Devenez acteur de votre futur.</p>
                  </div>
               </div>
            </div>

            <div className="h-16" />

            {/* -------- DESKTOP VERSION -------- */}
            <div className="w-full hidden md:block">
               <div className="flex flex-col md:flex-row justify-center items-center">
                  <LazyLoadImage effect="blur" src={BALEINE} alt="baleine" className="object-contain h-128 px-8" />
                  <LazyLoadImage effect="blur" src={RHINO} alt="rhino" className="object-contain h-128 px-8" />
                  <LazyLoadImage effect="blur" src={PUMA} alt="puma" className="object-contain h-128 px-8" />
               </div>

               <div className="w-full flex justify-start -ml-12">
                  <ArrowText type="bottom-left" title="PRINTS" content="Éveiller la curiosité." />
               </div>

               <div className="h-20" />

               <p className="w-64 md:hidden pb-8">Deux phases de sponsoring sur les réseaux sociaux.</p>

               <div className="w-full" >
                  <div className="flex flex-col md:flex-row justify-center items-center ml-40">
                     <ArrowText type="left" title="&nbsp;" content="Première phase de sponsoring sur les réseaux sociaux." />

                     <LazyLoadImage effect="blur" src={INSTA1} alt="insta" className="md:pl-8 h-120 object-contain" />
                  </div>

               </div>

               <div className="w-full flex flex-col md:flex-row justify-center items-start" >

                  <LazyLoadImage effect="blur" src={INSTA2} alt="insta" className="md:pr-4 h-120 object-contain justify-self-start md:-mt-20" />

                  <div className="w-full md:w-1/4 pl-4">
                     <ArrowText type="right" content="Deuxième phase de sponsoring sur les réseaux sociaux." />

                     <div className="w-full flex justify-end pt-32">
                        <ArrowText type="left" title="&nbsp;" content="Le clic active une interaction digitale dirigeant vers la page de don du site WWF." large />
                     </div>
                  </div>

                  <p className="w-64 md:hidden pt-32">Le clic active une interaction digitale dirigeant vers la page de don du site WWF.</p>

                  <div>
                     <div className="h-40" />
                     <video src={VIDEO} autoPlay={true} muted={true} playsInline loop className="object-cover h-120 w-48" />
                  </div>

               </div>

               <div className="h-20" />

               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/la-cimade" next="/sante-publique" />
               </div>
            </div>

            {/* -------- MOBILE VERSION -------- */}
            <div className="w-full md:hidden px-10">

               <div className="h-20" />

               <h3 className="text-lg pb-6"><span className="font-bold">PRINTS.</span> <br />Éveiller la curiosité.</h3>
               <LazyLoadImage effect="blur" src={BALEINE} alt="baleine" className="" />
               <LazyLoadImage effect="blur" src={RHINO} alt="rhino" className="" />
               <LazyLoadImage effect="blur" src={PUMA} alt="puma" className="" />

               <div className="h-20" />

               <h3 className="text-lg pb-6">Première phase de sponsoring sur les réseaux sociaux.</h3>
               <LazyLoadImage effect="blur" src={INSTA1} alt="insta" className="" />

               <div className="h-20" />

               <h3 className="text-lg pb-6">Deuxième phase de sponsoring sur les réseaux sociaux.</h3>
               <LazyLoadImage effect="blur" src={INSTA2} alt="insta" className="" />

               <div className="h-32" />

               <h3 className="text-lg pb-6 z-30">Le clic active une interaction digitale dirigeant vers la page de don du site WWF.</h3>
               <video src={VIDEO} autoPlay={true} muted={true} playsInline loop className="object-cover h-120 w-full" />


               <div className="h-20" />

               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/la-cimade" next="/sante-publique" />
               </div>
            </div>

         </div>
      </div>
   );
}


/*
<div className="w-full flex flex-col md:flex-row justify-center items-center bg-blue-100" >
               <ArrowText type="left" content="Première phase de sponsoring sur les réseaux sociaux." />

               <LazyLoadImage effect="blur" src={INSTA1} alt="insta" className="md:pl-8 h-120 object-contain" />

               <div className="hidden md:flex-none w-96" />
            </div>

            <div className="h-8 md:h-32" />

            <div className="w-full flex flex-col md:flex-row justify-center items-center bg-red-200" >

               <LazyLoadImage effect="blur" src={INSTA2} alt="insta" className="md:pr-4 h-120 object-contain" />

               <div className="w-full md:w-1/4 pl-4">
                  <ArrowText type="right" content="Deuxième phase de sponsoring sur les réseaux sociaux." />

                  <div className="w-full flex justify-end">
                     <ArrowText type="left" content="Le clic active une interaction digitale dirigeant vers la page de don du site WWF." large />
                  </div>
               </div>

               <p className="w-64 md:hidden pt-32">Le clic active une interaction digitale dirigeant vers la page de don du site WWF.</p>

               <video src={VIDEO} autoPlay={true} muted={true} playsInline className="object-cover h-120 w-48" />

            </div> */