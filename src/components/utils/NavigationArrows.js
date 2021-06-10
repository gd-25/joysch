import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';

import ARROW from './../../logos/STRAIGHTARROW.svg'


export default function NavigationArrows(prop) {

   return (
      <div className="w-12 z-40 flex justify-between items-center">
         <a href={prop.previous} className="hover:opacity-50">
            <img src={ARROW} alt="Arrow" className="w-5 h-5" style={{ transform: "scaleX(-1)" }} />
         </a>
         <a href={prop.next} className="hover:opacity-50">
            <img src={ARROW} alt="Arrow" className="w-5 h-5" />
         </a>
      </div>
   );
}
