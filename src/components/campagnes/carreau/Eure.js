import React, { useState, useEffect, useContext } from "react";
import './../../../styles/index.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// Lazyload
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PRINT1 from './../../../assets/carreau/2-eure/PRINT_1.jpg'
import PRINT2 from './../../../assets/carreau/2-eure/PRINT_2.jpg'
import PRINT3 from './../../../assets/carreau/2-eure/PRINT_3.jpg'
import PRINT4 from './../../../assets/carreau/2-eure/PRINT_4.jpg'
import PRINT5 from './../../../assets/carreau/2-eure/PRINT_5.jpg'

import ACTIV1 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_1.png'
import ACTIV2 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_2.png'
import ACTIV3 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_3.png'
import ACTIV4 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_4.png'
import ACTIV5 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_5.png'
import ACTIV6 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_6.png'
import ACTIV7 from './../../../assets/carreau/2-eure/ACTIVATION/ACTIV_7.png'

// Utils
import ArrowText from '../../utils/ArrowText';
import NavigationArrows from "../../utils/NavigationArrows";
import ProjectDescription from "../../utils/ProjectDescription";


// PRINTS
const slideImages = [
   PRINT3,
   PRINT1,
   PRINT2,
   PRINT4,
   PRINT5
];



export default function Eure() {
   const [previousIndex, setPreviousIndex] = useState(0);
   const [nextIndex, setNextIndex] = useState(0);


   const properties = {
      autoplay: true,
      indicators: true,
      onChange: (previous, next) => {
         setPreviousIndex(previous);
         setNextIndex(next);
      }
   };

   useEffect(() => {
      console.log(nextIndex)

   }, [nextIndex])

   return (
      <div className="w-full bg-black text-white flex-col-center">
         <div className="w-full 3xl:max-w-7xl flex-col-center">

            <div className="absolute z-50 top-0 right-0 mt-28 3xl:mt-40 mr-6 md:mr-28">
               <NavigationArrows previous="/sojasun" next="/inegalites-salariales" />
            </div>

            <div className="h-40 md:h-28" />

            <div className="w-full md:w-220 px-8">
               <h1 className="text-4xl">L'EURE</h1>
               <h3 className="text-lg leading-tight">Campagne touristique</h3>
               <p className="text-xs font-thin italic pt-1">Juin 2021</p>

               <p className="py-4 italic text-gray-400 opacity-80">Le d??partement de l'Eure est sous-estim??.??Nombreux sont les voyageurs ne souhaitant pas y aller pour les vacances et ?? voir cela comme une contrainte. C???est vrai, l???Eure ce n???est pas fait pour tout le monde. Et c???est bien comme ??a.</p>

               <div className="flex flex-col md:flex-row justify-between" >
                  <div className="w-80 md:w-96">
                     <h3 className="text-base">Objectifs</h3>
                     <p className="text-sm">Ne pas se battre contre les pr??jug??s et en jouer. Une campagne anti-touriste pour attirer les touristes. Tel est le pari.</p>

                  </div>

                  <div className="w-80 md:w-96">


                     <h3 className="text-base">Concept</h3>
                     <p className="text-sm font-bold">L?? o?? il y a des haters. Il y a toujours des lovers.</p>

                  </div>
               </div>
            </div>

            <div className="h-16" />

            {/* -------- DESKTOP VERSION -------- */}
            <div className="w-full hidden md:block">

               <div className="w-full flex-center">
                  <Slide {...properties} easing="ease" className="w-184 h-136">
                     <div className="each-slide h-136">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} className="h-136">
                        </div>
                     </div>
                     <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }} className="h-136">
                        </div>
                     </div>
                     <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }} className="h-136">
                        </div>
                     </div>
                     <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[3]})` }} className="h-136">
                        </div>
                     </div>
                     <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[4]})` }} className="h-136">
                        </div>
                     </div>
                  </Slide>
               </div>

               <div className="flex flex-col md:flex-row justify-center items-center py-3 z-50">
                  <LazyLoadImage effect="blur" src={PRINT3} className={(nextIndex === 0) ? "object-contain h-18 px-1.5" : "opacity-10 object-contain h-12 px-1.5"} />
                  <LazyLoadImage effect="blur" src={PRINT1} className={(nextIndex === 1) ? "object-contain h-18 px-1.5" : "opacity-10 object-contain h-12 px-1.5"} />
                  <LazyLoadImage effect="blur" src={PRINT2} className={(nextIndex === 2) ? "object-contain h-18 px-1.5" : "opacity-10 object-contain h-12 px-1.5"} />
                  <LazyLoadImage effect="blur" src={PRINT4} className={(nextIndex === 3) ? "object-contain h-18 px-1.5" : "opacity-10 object-contain h-12 px-1.5"} />
                  <LazyLoadImage effect="blur" src={PRINT5} className={(nextIndex === 4) ? "object-contain h-18 px-1.5" : "opacity-10 object-contain h-12 px-1.5"} />
               </div>


               <div className="h-24" />

               <div className="w-full flex-center">
                  <div className="w-220 flex flex-col justify-start">
                     <h1 className="text-2xl 3xl:text-4xl">ACTIVATIONS</h1>
                     <div className="h-3" />
                     <p className="py-1">Cette ann??e, la semaine de l???agriculture se d??roulera dans des circonstances particuli??res, <br />mais nous devons quand m??me profiter de cet ??v??nement pour pr??empter le futur <br />territoire d???expression de l???Eure.</p>

                     <p className="py-1">L???id??e : D??clarer notre flamme aux agriculteurs Eurois qui innovent sans cesse<br />et sont des chefs d???entreprises hors-pairs.</p>

                     <p className="py-1">Concept : Dans l???Eure, on aime grandeur nature.</p>
                  </div>
               </div>

               <div className="w-full flex-center pt-32 pb-12">
                  <div className="w-220 flex flex-col justify-start">
                     <h1 className="text-2xl 3xl:text-4xl">TEMPS 1</h1>
                     <h3 className="text-xl">1 SEMAINE AVANT LA SIAF 2021</h3>
                  </div>
               </div>

               <div className="grid grid-cols-2">
                  <div className="w-full flex justify-end">
                     <img src={ACTIV1} className="h-80 object-contain object-right pr-12" />
                     <img src={ACTIV2} className="h-80 object-contain object-right pr-20" />
                  </div>
                  <div className="w-full flex items-center">
                     <div className="max-w-md ">
                        <h1>PORTRAIT GRANDEUR NATURE</h1>
                        <p>Pour valoriser et faire la p??dagogie du m??tier d???agriculteur, l???Eure d??cide de s???allier avec un photographe afin de rendre aux agriculteurs <br /> la grandeur de leur investissement, en r??alisant <br /> des portraits de ces derniers grandeur nature.??<br />
L???id??e est de coller sur les murs du d??partement <br /> ou de Paris. L???Eure prouve son amour <br /> avec un grand A envers ses agriculteurs.</p>
                     </div>
                  </div>

                  <div className="col-span-2 h-12" />

                  <div className="w-full flex justify-end items-center">
                     <div className="max-w-md ">
                        <h1>UB'EURE</h1>
                        <p>Dans l???Eure, les agriculteurs et producteurs sont g??n??reux et le font savoir. <br />Les Eurois d??cident de proposer leurs services le temps de quelques jours et de transporter les Parisiens dans leurs tracteurs et moyens de d??placement agricole. <br />Un Uber???tracteur entre en ville, et permet aux citadins de se d??placer de mani??re atypique. </p>
                     </div>
                  </div>
                  <div className="w-full">
                     <img src={ACTIV4} className="h-80 w-full object-contain object-left pl-20" />

                  </div>

               
               </div>

               <div className="w-full flex-center pt-32 pb-12">
                  <div className="w-220 flex flex-col justify-start">
                     <h1 className="text-2xl 3xl:text-4xl">TEMPS 2</h1>
                     <h3 className="text-xl">DURANT LES 2 JOURS D'??V??NEMENT ?? PARIS</h3>
                  </div>
               </div>

               <div className="grid grid-cols-2">
                  <div className="w-full flex justify-end">
                     <img src={ACTIV5} className="h-80 object-contain object-right pr-20" />
                  </div>
                  <div className="flex items-center w-full">
                     <div className="max-w-md ">
                        <h1>FACE ?? FACE</h1>

                        <p>Quoi de mieux pour parler de ce qu???on aime et de se rencontrer, qu???une terrasse d???un caf?? ???<br /> <br />L???Eure installe une fausse fa??ade de restaurant grandeur nature, typique et authentique du d??partement dans le salon.??<br />Sp??cialit??s culinaires, prospectus, journaux, sur cette reproduction de terrasse de caf?? Eurois, tout est d??tourn?? et mis en ??uvre pour mettre en avant le patrimoine de l???Eure.</p>
                     </div>
                  </div>

                  <div className="col-span-2 h-12" />

                  <div className="w-full flex justify-end items-center">
                     <div className="max-w-md ">
                        <h1>ENVIE DE VOUS IMPLANTER DANS L???EURE ?</h1>
                        <p>Chaque visiteur a la possibilit?? de planter une graine d???un arbre ou d???une plante sur le stand du d??partement de L???Eure.<br />Par la suite, ce petit bout de terre sera transport?? et plant?? dans l???Eure. Au fur et ?? mesure, un jardin plant?? ailleurs prendra vie dans l???Eure. Un petit bout de Paris dans L???Eure.</p>
                     </div>
                  </div>
                  <div className="w-full">
                     <img src={ACTIV6} className="h-80 w-full object-contain object-left pl-20" />

                  </div>

                  <div className="col-span-2 h-12" />

                  <img src={ACTIV7} className="h-80 w-full object-contain object-right pr-20" />
                  <div className="w-full flex items-center">
                     <div className="max-w-md ">
                        <h1>LE PLAN PARFAIT</h1>

                        <p>Lors des ??v??nements tels que la SIAF, la superficie de ce dernier demande souvent un plan et une signal??tique pour que les visiteurs puissent se rep??rer.<br />L???Eure s???approprie le plan du salon en tournant en d??rision son emplacement dans la France soi-disant au milieu de nulle part et les autres d??partements privil??gi??s des visiteurs.??<br />En re-designant un plan ?? sa sauce, le d??partement le distribuera aux visiteurs afin d???attiser leur curiosit??.</p>
                     </div>
                  </div>
               </div>

               <div className="h-32" />


               <div className="w-full z-50 py-10 flex-center">
                  <NavigationArrows previous="/sojasun" next="/inegalites-salariales" />
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
                  <NavigationArrows previous="/sojasun" next="/inegalites-salariales" />
               </div>
            </div>

         </div>
      </div>
   );
}
