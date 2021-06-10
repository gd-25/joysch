import './../../styles/index.css';
import COEURJOY from './../../logos/COEURJOY.gif'
import COEURLEA from './../../logos/COEURLEA.gif'

import ARROW from './../../logos/ARROW.svg'
import NavigationArrows from "../utils/NavigationArrows";

export default function Paire() {
   return (
      <div className="bg-black text-white w-full 3xl:h-95vh 3xl:flex-col-center">
         <div className="w-full hidden md:block">
            <div className="h-32" />

            <div className="w-full flex-center">
               <div className="relative w-144 3xl:w-220 flex-col-center">
                  <h1 className="text-3xl 3xl:text-5xl font-bold">JOY SCHEMEIL</h1>
                  <div className="h-1 3xl:h-2" />
                  <h2 className="font-bold 3xl:text-2xl">DIRECTRICE ARTISTIQUE</h2>

                  <div className="flex-center">
                     <div className="h-96 w-40 pr-2 flex flex-col justify-start items-end">
                        <div className="h-8" />
                        <img src={ARROW} alt="Arrow" className="w-16 h-16 mb-2" style={{ transform: "scaleX(-1)" }} />
                        <div className="w-24">
                           <p>Passionnée</p>
                           <p>Dynamique</p>
                           <p>Autonome</p>
                        </div>
                     </div>

                     <div className="w-60 3xl:w-120 flex-col-center">
                        <img src={COEURJOY} alt="Joy" className="object-cover h-96 3xl:h-160 w-full pr-2" />
                     </div>

                     <div className="h-96 w-40 flex flex-col justify-end items-start">
                        <img src={ARROW} alt="Arrow" className="w-16 h-16 ml-2 mb-2" />
                        <p className="px-4 text-center">Immersion de 3 mois en Afrique du Sud</p>
                        <div className="h-16" />
                     </div>
                  </div>

                  <div className="absolute top-0 pr-28 3xl:pr-80 flex justify-center items-end">
                     <img src={ARROW} alt="Arrow" className="w-16 h-16 mb-10 transform rotate-90" style={{ transform: "scaleX(-1) rotate(45deg)" }} />
                     <p className="mt-104 3xl:mt-176 w-40 text-left">Actuellement créative chez Josiane</p>
                  </div>

                  <a href="/cv/joy" className="mt-24 bg-white text-black px-8 py-2 font-bold hover:text-redsix rounded-full cursor-pointer">VOIR LE CV</a>

               </div>

               <div className="relative w-144 3xl:w-220 flex-col-center">
                  <h1 className="text-3xl 3xl:text-5xl font-bold">LÉA CÔME</h1>
                  <div className="h-1 3xl:h-2" />
                  <h2 className="font-bold 3xl:text-2xl">CONCEPTRICE RÉDACTRICE</h2>

                  <div className="flex-center">
                     <div className="h-96 w-40 pr-2 flex flex-col justify-start items-end">
                        <div className="h-16" />
                        <img src={ARROW} alt="Arrow" className="w-16 h-16 mb-2" style={{ transform: "scaleX(-1)" }} />
                        <div className="w-24">
                           <p>Enthousiaste</p>
                           <p>Rigoureuse</p>
                           <p>Vive</p>
                        </div>
                     </div>

                     <div className="w-60 3xl:w-120  flex-col-center">
                        <img src={COEURLEA} alt="Lea" className="object-cover h-96 3xl:h-160 w-full pr-2" />
                     </div>

                     <div className="h-96 w-40 flex flex-col justify-start items-start">
                        <div className="h-4" />
                        <img src={ARROW} alt="Arrow" className="w-16 h-16 ml-2 mb-2" />
                        <p className="text-center">13 déménagements à son actif</p>
                     </div>
                  </div>

                  <div className="absolute top-0 pl-28 3xl:pl-80 flex justify-center items-end ">
                     <p className="mt-104 3xl:mt-176 w-40 text-right">Actuellement créative chez Josiane</p>
                     <img src={ARROW} alt="Arrow" className="w-16 h-16 mb-10 transform rotate-90" style={{ transform: "rotate(45deg)" }} />

                  </div>

                  <a href="/cv/lea" className="mt-24 bg-white text-black px-8 py-2 font-bold hover:text-redsix rounded-full cursor-pointer">VOIR LE CV</a>

               </div>

            </div>

         </div>

         {/* ------------ MOBILE ------------ */}
         <div className="w-full px-10 md:hidden">
            <div className="h-40" />
            <div>
               <h1 className="text-2xl font-bold">JOY SCHEMEIL</h1>
               <div className="h-1" />
               <h2 className="font-bold">DIRECTRICE ARTISTIQUE</h2>
               <ul>
                  <li>Passionnée, dynamique, autonome</li>
                  <li>Actuellement créative chez Josiane</li>
               </ul>

               <div className="w-full flex-center pt-4">
                  <a href="/cv/joy" target="_blank" className="bg-white text-black py-1 px-8 font-bold rounded-full cursor-pointer">VOIR LE CV</a>
               </div>

               <img src={COEURJOY} alt="Joy" className="object-cover h-104 pr-2" />
            </div>

            <div className="h-12" />

            <div>
               <h1 className="text-2xl font-bold">LÉA CÔME</h1>
               <div className="h-1" />
               <h2 className="font-bold">CONCEPTRICE RÉDACTRICE</h2>
               <ul>
                  <li>Enthousiaste, rigoureuse, vive</li>
                  <li>Actuellement créative chez Josiane</li>
               </ul>

               <div className="w-full flex-center pt-4">
                  <a href="/cv/lea" target="_blank" className="bg-white text-black py-1 px-8 font-bold rounded-full cursor-pointer">VOIR LE CV</a>
               </div>
               
               <img src={COEURLEA} alt="Lea" className="object-cover h-104 pr-2" />
            </div>
         </div>

         <div className="w-full flex-center z-50 pt-20 md:pt-40 pb-20">
            <NavigationArrows previous="/trefle" next="/contact" />
         </div>
      </div>
   );
}
