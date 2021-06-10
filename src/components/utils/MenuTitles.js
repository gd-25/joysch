import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';
import ARROW from './../../logos/ARROW.svg'

export default function MenuTitles(prop) {

   return (
      <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-center">
               <div className="w-40 ml-2 md:ml-0 flex-col-center">
                  <img src={prop.src} className="object-cover h-48 w-full" />
               </div>
               <div className="w-full md:w-128 3xl:w-160 px-8 md:px-4">
                  <h1 className="text-3xl 3xl:text-5xl font-black ">{prop.title}</h1>
                  <h3 className="text-lg 3xl:text-3xl">{prop.subtitle}</h3>

                  <div className="h-4" />

                  <p className="text-sm 3xl:text-lg hidden md:block">{prop.content}
                  {prop.extra1 && <span><br />{prop.extra1}</span>}
                  </p>

                  <p className="text-sm 3xl:text-lg md:hidden">{prop.content} {prop.extra1}</p>

               </div>

            </div>
   );
}

