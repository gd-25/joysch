import './../../styles/index.css';
import JOUEURS from './../../logos/JOUEURS.gif'
import LINKEDIN from './../../logos/social/LINKEDIN.svg'
import BEHANCE from './../../logos/social/BEHANCE.svg'
import NavigationArrows from "../utils/NavigationArrows";


export default function Contact() {
   return (
      <div className="w-full bg-black text-white flex-col-center min-h-screen">
         <div className="w-full 3xl:h-95vh flex-col-center">

            <div className="h-48 md:h-24" />

            <div className="absolute top-0 right-0 mt-28 mr-6 md:mr-28 3xl:mt-40">
               <NavigationArrows previous="/paire" next="/" />
            </div>

            <div className="w-80 md:w-160 flex-col-center">
               <img src={JOUEURS} alt="Logo" className="object-cover h-40 w-full" />
            </div>

            <div className="h-6" />

            <a href="mailto:six.pairecreative@gmail.com?subject=Ne serait-ce pas une belle journée pour donner une très bonne note au BOOKDAY?" className="text-xl md:text-2xl font-medium text-center hover:text-redsix">six.pairecreative@gmail.com</a>
            <div className="h-2" />
            <p className="text-xl md:text-2xl font-medium text-center">06 12 51 43 69</p>

            <div className="h-10" />

            <div className="flex flex-col md:flex-row justify-center items-center">
               <div className="w-64 text-center">
                  <h1 className="text-lg">JOY SCHEMEIL</h1>
                  <div className="flex-center">
                     <a href="https://www.behance.net/joyschemeil" target="_blank">
                        <img src={BEHANCE} alt="BE" className="h-8 hover:opacity-50" />
                     </a>
                     <div className="w-4" />
                     <a href="https://www.linkedin.com/in/joy-schemeil/" target="_blank">
                        <img src={LINKEDIN} alt="LI" className="h-7 pb-0.5 hover:opacity-50" />
                     </a>
                  </div>
               </div>
               <div className="h-8 md:h-0" />
               <div className="w-64 text-center">
                  <h1 className="text-lg">LÉA CÔME</h1>
                  <div className="flex-center">
                     <a href="https://www.behance.net/leacome" target="_blank">
                        <img src={BEHANCE} alt="BE" className="h-8 hover:opacity-50" />
                     </a>
                     <div className="w-4" />
                     <a href="https://www.linkedin.com/in/l%C3%A9a-c%C3%B4me-a694ba162/" target="_blank">
                        <img src={LINKEDIN} alt="LI" className="h-7 pb-0.5 hover:opacity-50" />
                     </a>
                  </div>
               </div>
            </div>

            <div className="h-32" />

         </div>
      </div>
   );
}
