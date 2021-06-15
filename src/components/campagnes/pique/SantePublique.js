import './../../../styles/index.css';

import ORDI from './../../../assets/pique/2-sante-publique/ORDI.png'
import PRINTDROITE from './../../../assets/pique/2-sante-publique/PRINTDROITE.jpg'
import PRINTGAUCHE from './../../../assets/pique/2-sante-publique/PRINTGAUCHE.jpg'
import VIDEO from './../../../assets/pique/2-sante-publique/VIDEO.mp4'
import PLACEHOLDER from './../../../assets/pique/2-sante-publique/PLACEHOLDER.jpg'
import PREROLLCROPPED from './../../../assets/pique/2-sante-publique/PREROLLCROPPED.gif'
import ARROW from './../../../logos/ARROW.svg'

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";

export default function SantePublique() {
   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/la-cimade" next="/je-t-aide" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">Santé publique</h1>
               <h3 className="text-lg leading-tight">Campagne fictive institutionelle</h3>
               <p className="text-xs font-thin italic pt-1">Janvier 2020</p>

               <p className="py-4 italic text-gray-400 opacity-80">Se faire vacciner, c’est dans l’intérêt publique, mais 20% des Français estiment que les vaccins ne sont pas efficaces et porteurs de maladies. Plutôt paradoxal, lorsque nous savons que la vaccination sauve chaque année entre 2 et 3 millions de vies.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectifs</h3>
                     <p className="text-sm">Informer, convaincre, rechercher une prise de conscience générale.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Coeur de cible</h3>
                     <p className="text-sm">Représente les sceptiques entre 25 et 45 ans, futurs ou jeunes parents.</p>
                     <div className="h-2" />
                     <h3 className="text-base">Problématique de communication</h3>
                     <p className="text-sm">Dans notre société où le citoyen n'a plus confiance, comment éclaircir l'image de la vaccination pour ne plus laisser place à l’ombre du scepticisme ?</p>
                  </div>

                  <div className="w-80 md:w-96">
                     <p className="text-sm">Nous avons décidé de lutter contre la mauvaise information concernant la vaccination, de faire taire les idées reçues infondées et de pallier le manque de confiance des Français.</p>
                     <div className="h-2" />

                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm font-bold">La mauvaise information se propage.</p>
                  </div>
               </div>
            </div>

            <div className="h-24" />


            {/* ---------- DESKTOP  ----------*/}
            <div className="hidden md:block">
               <div className="w-full flex-center">
                  <div className="-mr-28">
                     <ArrowText type="left" title="Pré-roll" title1="sur YouTube" classSpecified="w-54 pt-3 text-xl " />
                  </div>

                  <div className="relative">
                     <img src={ORDI} className="w-160 ml-20" />
                     <img src={PREROLLCROPPED} className="absolute top-0 h-38 object-contain ml-55 mt-19" />
                  </div>
               </div>

               <div className="h-32" />


               <div className="w-full px-20 flex-center">
                  <img src={PRINTDROITE} className="object-contain h-96 px-5" />
                  <img src={PRINTGAUCHE} className="object-contain h-96 px-5" />
               </div>


               <div className="w-full -ml-16">
                  <ArrowText type="big-bottom-left"
                     title="Prints révèlant un nouveau point de vue"
                     content="Nous plaçons le jeu de mots au centre de l’attention afin de mettre en avant les côtés positifs"
                     content1="et les réels bienfaits de la vaccination. Nous basons nos installations sur un concept d’image lenticulaire, le mot inscrit sur le print change en fonction de la position de l’individu."
                     content2="Le concept est : Bousculer les idées reçues sur la vaccination en poussant à l’action"
                     content3="avec un déplacement de position d’abord physique (de droite à gauche) puis morale." />
               </div>

               <div className="h-40" />

               <div className="w-full flex-center px-10">
                  <iframe width="700" height="380" src="https://www.youtube.com/embed/QZVtbzmJEhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="mr-12" />

                  <ArrowText type="big-right" large title="Spot viral" content="À travers ce spot web, nous avons choisi de faire un parallèle entre la propagation d’un virus dans"
                     content1="le corps et celle d’une fausse information dans"
                     content2="la société."
                     content3="La solution pour arrêter la mauvaise information est donc notre campagne."
                     content4
                     content5="Spot web"
                     content6="Owned media"
                     content7="Sponsoring" />
               </div>

               <div className="h-20" />

               <div className="z-50 py-10 w-full flex-center">
                  <NavigationArrows previous="/la-cimade" next="/je-t-aide" />
               </div>
            </div>

            {/* ---------- MOBILE  ----------*/}
            <div className="md:hidden">
               <div className="w-full px-10 flex-col-center">
                  <img src={PRINTDROITE} className="object-contain w-full py-4" />
                  <img src={PRINTGAUCHE} className="object-contain w-full py-4" />
               </div>
               <div className="h-20" />

            </div>
         </div>
      </div>
   );
}
