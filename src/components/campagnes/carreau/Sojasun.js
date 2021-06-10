import './../../../styles/index.css';

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PRINT1 from './../../../assets/carreau/1-sojasun/PRINT_1.jpg'
import PRINT2 from './../../../assets/carreau/1-sojasun/PRINT_2.jpg'
import AUDIO from './../../../assets/carreau/1-sojasun/AUDIO.mp3'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";
import ProjectDescription from "../../utils/ProjectDescription";

export default function Sojasun() {
   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full 3xl:max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/" next="/eure" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">SOJASUN</h1>
               <h3 className="text-lg leading-tight">Campagne d'image</h3>
               <p className="text-xs font-thin italic pt-1">Septembre 2020</p>

               <p className="py-4 italic text-gray-400 opacity-80">Les cartes de l’alimentation végétale sont en train d’être redistribuées. Des acteurs puissants et établis de l’alimentaire viennent sur le terrain du végétal.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectif</h3>
                     <p className="text-sm">Ne plus être la marque des années 80, transparente aux seins des grands rayons frais, mais la marque qui se réinvente chaque matin.</p>

                  </div>

                  <div className="w-80 md:w-96">


                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm ">Rafraichissez vos goûts. L’image du soja et du végétal est bien trop souvent biaisée par les idées reçues des consommateurs. Sojasun met un point d’honneur à taire ces dernières pour nourrir une image moderne, aux goûts du jour.</p>

                  </div>
               </div>
            </div>

            <div className="h-16" />

            {/* -------- DESKTOP VERSION -------- */}
            <div className="w-full hidden md:block">

            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                  <LazyLoadImage effect="blur" src={PRINT1} className="object-contain w-full pl-40 pr-10" />
                  <LazyLoadImage effect="blur" src={PRINT2} className="object-contain w-full pl-10 pr-40" />
               </div>

               <div className="w-full flex justify-start pl-16">
                  <ArrowText type="big-bottom-left" title="PRINTS" content="" />
               </div>

               <div className="h-16" />

               <div className="w-full flex-center">
                  <div className="w-220 flex flex-col justify-start">
                     <h1 className="text-2xl 3xl:text-4xl">SCRIPT FILM</h1>
                     <div className="h-3" />



                     <div className="pr-8">
                        <p className="py-2">Le film s’ouvre sur un réveil.</p>
                        <p className="py-2">« Il est 10h, on se réveille doucement en musique. »</p>
                        <div className="flex py-2 relative">
                           <p>La musique se lance.</p>
                           <audio src={AUDIO} controls className="object-cover w-96 h-10 focus:outline-none absolute top-0 ml-44" style={{ filter: "invert(1) grayscale(100%)" }} />
                        </div>

                        <p className="py-2">L’homme pose ses pieds par terre, enfile ses chaussons « I’m a boss », son peignoir et file dans la salle de bain. Coup d’eau sur la figure, il s’asperge de déodorant.</p>

                        <p className="py-2">La journée commence, tee-shirt de foot, jogging, chaussures à bouts pointus. Il descend dans son garage.</p>

                        <p className="py-2">Sa voiture y est garée, il enlève soigneusement la housse. Chiffon à la main, produits d’entretien, il se met à astiquer son bolide énergiquement. Fan de tuning, sa voiture est ornée de tous les accessoires nécessaires à sa passion.</p>

                        <p className="py-2">Il remonte, entre dans sa cuisine, jette dans une poêle deux steaks qui frémissent. </p>

                        <p className="py-2">Il allume la télé pour mettre une rediffusion de match de foot.</p>

                        <p className="py-2">Le repas avalé, il redescend au garage, monte dans sa voiture, met le volume à fond, baisse sa vitre et fait ronronner le moteur quelques instants. Il rigole et démarre.</p>

                        <p className="py-2">Le voilà sur un parking. Il sort de son bolide et entre dans un supermarché pour aller faire ses courses. Plein d’énergie, il choppe un paquet de chips puis se retrouve devant les frigos, quand soudain, il croise le regarde d’une femme très naturelle. Elle ouvre sans hésitation ce même frigo, prend un paquet de steak végétal Sojasun et s’en va vers les caisses.</p>

                        <p className="py-2">Perturbé, il se dirige aussitôt vers le même frigo, se retrouve devant les steaks, en prend un et court vers les caisses pour déposer ses produits sur le tapis roulant juste derrière elle. Elle le regarde avec attendrissement, il la regarde avec fierté.</p>

                        <div className="h-2" />
                        <h3 className="italic">Bouclage</h3>
                        <p className="font-bold">Les goûts, ça se rafraîchit.</p>
                        <p className="font-bold">Sojasun. Le végétal aux goûts du jour.</p>
                     </div>
                  </div>
               </div>

               <div className="h-20" />

               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/" next="/eure" />
               </div>
            </div>

            {/* -------- MOBILE VERSION -------- */}
            <div className="w-full md:hidden px-10">

               <div className="h-20" />

               <LazyLoadImage effect="blur" src={PRINT1} className="" />
               <LazyLoadImage effect="blur" src={PRINT2} className="" />

               <div className="h-20" />


               <div className="h-20" />

               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/" next="/eure" />
               </div>
            </div>

         </div>
      </div>
   );
}
