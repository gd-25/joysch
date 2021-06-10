import './../../../styles/index.css';
import CVLEA from './../../../assets/cv/CVLEA.png'
import CVLEAPDF from './../../../assets/cv/CVLEA.pdf'


export default function Joy() {
   return (
      <div className="w-full flex-col-center">
         <div className="h-40" />

         <img src={CVLEA} className="w-80 md:w-104 object-contain" />

         <a href={CVLEAPDF}  className="mt-10 bg-white text-black px-8 py-2 font-bold hover:text-redsix rounded-full cursor-pointer" download="CV_Joy_Schemeil.pdf">TÉLÉCHARGER LE CV</a>

         <div className="h-40" />

      </div>
   );
}