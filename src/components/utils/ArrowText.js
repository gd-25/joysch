import './../../styles/index.css';
import ARROW from './../../logos/ARROW.svg'

export default function ArrowText(prop) {
   return (
      <div className="text-sm">
         {prop.type === "bottom-left" && <div className="w-48 relative flex justify-end">
            <img effect="blur" src={ARROW} alt="Arrow" className="absolute top-0 left-0 h-16" style={{ transform: "scaleX(-1) rotate(45deg)" }} />

            <div className={prop.large ? "w-40 pt-8" : "w-36 pt-8"}>
               <h1>{prop.title}</h1>
               <p>{prop.content}</p>
            </div>
         </div>}

         {prop.type === "big-bottom-left" && <div className="w-full relative flex justify-start">
            <img effect="blur" src={ARROW} alt="Arrow" className="absolute top-0 left-0 w-16 h-16" style={{ transform: "scaleX(-1) rotate(45deg)" }} />

            <div className="pt-12 pl-16">
               <h1 className="uppercase text-xl w-96 pb-3">{prop.title}</h1>
               <p className="w-176">{prop.content}
                  {prop.content1 && <span><br />{prop.content1}</span>}
                  {prop.content2 && <span><br />{prop.content2}</span>}
                  {prop.content3 && <span><br />{prop.content3}</span>}
                  {prop.content4 && <span><br />{prop.content4}</span>}
                  {prop.content5 && <span><br />{prop.content5}</span>}
                  {prop.content6 && <span><br />{prop.content6}</span>}
                  {prop.content7 && <span><br />{prop.content7}</span>}</p>
            </div>
         </div>}

         {prop.type === "bottom-right" && <div className="w-56 relative">
            <div className={prop.large ? "w-40 pt-8" : "w-36 pt-8"}>
               <h1>{prop.title}</h1>
               <p>{prop.content}</p>
            </div>

            <img effect="blur" src={ARROW} alt="Arrow" className="absolute top-0 right-0 w-16 h-16" style={{ transform: "rotate(45deg)" }} />

         </div>}

         {prop.type === "left" && <div className="w-56 hidden md:flex flex-col justify-center items-end">
            <img effect="blur" src={ARROW} alt="Arrow" className="w-16 h-16" style={{ transform: "scaleX(-1) rotate(10deg)" }} />

            <div className={prop.classSpecified}>
               <h1>{prop.title}
                  {prop.title1 && <span><br />{prop.title1}</span>}
               </h1>
               <p>{prop.content}</p>
            </div>
         </div>}

         {prop.type === "big-left" && <div className="w-80 md:104 flex flex-col justify-center items-end ">
            {(!prop.arrownone) && <img src={ARROW} alt="Arrow" className="hidden md:block w-16 h-16" style={{ transform: "scaleX(-1) rotate(10deg)" }} />}
            <div className="pt-6 pr-2">
               <h1 className="uppercase text-xl w-80 md:w-96 pb-3 -mt-10">{prop.title}</h1>
               <p className="">{prop.content}</p>
               <p className="pt-4">{prop.extracontent1}</p>
               <p className="">{prop.extracontent2}</p>
               <p className="">{prop.extracontent3}</p>

            </div>
         </div>}

         {prop.type === "right" && <div className="w-56 hidden md:flex flex-col justify-center items-start ">
            <img src={ARROW} alt="Arrow" className="w-16 h-16" style={{ transform: " rotate(10deg)" }} />
            <div className={prop.large ? "w-40 pt-6" : "w-36 pt-6"}>
               <h1>{prop.title}</h1>
               <p>{prop.content}
               {prop.content1 && <span><br />{prop.content1}</span>}
               {prop.content2 && <span><br />{prop.content2}</span>}</p>
            </div>
         </div>}

         {prop.type === "big-right" && <div className="w-80 md:w-104 flex flex-col justify-center items-start ">
            {(!prop.arrownone) && <img src={ARROW} alt="Arrow" className="hidden md:block w-16 h-16" style={{ transform: " rotate(10deg)" }} />}
            <div className="pt-6">
               <h1 className="uppercase text-xl w-80 md:w-96 pb-3">{prop.title}
               {prop.title1 && <span><br />{prop.title1}</span>}</h1>
               <p className="w-88">{prop.content}
                  {prop.content1 && <span><br />{prop.content1}</span>}
                  {prop.content2 && <span><br />{prop.content2}</span>}
                  {prop.content3 && <span><br />{prop.content3}</span>}
                  {prop.content4 && <span><br />{prop.content4}</span>}
                  {prop.content5 && <span><br />{prop.content5}</span>}
                  {prop.content6 && <span><br />{prop.content6}</span>}
                  {prop.content7 && <span><br />{prop.content7}</span>}

               </p>

            </div>
         </div>}

         {prop.type === "top-right" && <div className="w-104 hidden md:flex justify-center items-start ">
            <img src={ARROW} alt="Arrow" className="w-16 h-16 mt-8" style={{ transform: " rotate(-20deg)" }} />
            <div className="mt-24 -ml-20">
               <h1 className="uppercase text-xl w-96 pb-3">{prop.title}</h1>
               <p className="">{prop.content}</p>
               <p className="pt-4">{prop.extracontent1}</p>
               <p className="">{prop.extracontent2}</p>
               <p className="">{prop.extracontent3}</p>

            </div>
         </div>}


      </div>
   );
}
