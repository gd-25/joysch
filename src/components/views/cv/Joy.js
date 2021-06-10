import './../../../styles/index.css';
import CVJOY from './../../../assets/cv/CVJOY.png'
import CVJOYPDF from './../../../assets/cv/CVJOY.pdf'


export default function Joy() {
   return (
      <div className="w-full flex-col-center">
         <div className="h-40" />

         <img src={CVJOY} className="w-80 md:w-104 object-contain" />

         <a href={CVJOYPDF}  className="mt-10 bg-white text-black px-8 py-2 font-bold hover:text-redsix rounded-full cursor-pointer" download="CV_Lea_Come.pdf">TÉLÉCHARGER LE CV</a>

         <div className="h-40" />

      </div>
   );
}
