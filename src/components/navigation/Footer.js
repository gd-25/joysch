import './../../styles/index.css';


export default function Footer() {
   
   return (
      <div className="w-full flex-col-center py-8 md:py-3 bg-white text-black">
         <div className="h-2" />
         <p className="text-center">© 2021 – Joy Schemeil</p>
         <div className="h-1" />
         <p className="text-center">Développé par <a href="https://instagram.com/pimpmywebsite" target="_blank" rel="noreferrer" className="hover:text-redsix">@pimpmywebsite</a></p>
         <div className="h-2" />
      </div>
   );
}
