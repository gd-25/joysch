import './../../styles/index.css';
import PIQUE from './../../logos/PIQUE.gif'
import TREFLE from './../../logos/TREFLE.gif'
import CARREAU from './../../logos/CARREAU.gif'

function Landing() {
   return (
      <div className="w-full flex-col-center">
         <div className="w-full bg-black max-w-7xl 3xl:max-w-max 3xl:h-screen 3xl:flex-col-center 3xl:px-80">
            <div className="h-32" />

            <div className="w-full h-40 3xl:h-auto 3xl:pb-10 flex-center">
               <h1 className="block w-full md:w-160 3xl:w-320 text-2xl md:text-3xl 3xl:text-6xl text-white font-black text-center" >VENEZ TIRER LES CARTES DE LA CRÉATION !</h1>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center items-center ">
               <a href="/carreau" className="w-full md:w-1/3 flex-col-center">
                  <img src={CARREAU} alt="Logo" className="object-cover h-96 3xl:h-160 w-full" />
                  <h1 className="text-xl 3xl:text-4xl text-white font-bold -mt-4 3xl:-mt-8 pb-6 md:pb-0">CARREAU</h1>
               </a>
               <a href="/pique" className="w-full md:w-1/3 flex-col-center">
                  <img src={PIQUE} alt="Logo" className="object-cover h-96 3xl:h-160 w-full" />
                  <h1 className="text-xl 3xl:text-4xl  text-white font-bold -mt-4 3xl:-mt-8 pb-6 md:pb-0">PIQUE</h1>
               </a>
               <a href="/trefle" className="w-full md:w-1/3 flex-col-center">
                  <img src={TREFLE} alt="Logo" className="object-cover h-96 3xl:h-160 w-full" />
                  <h1 className="text-xl 3xl:text-4xl text-white font-bold -mt-4 3xl:-mt-8 pb-6 md:pb-0">TRÈFLE</h1>
               </a>
            </div>

            <div className="h-20 md:h-32" />

         </div>
      </div>
   );
}

export default Landing;
