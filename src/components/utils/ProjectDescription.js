import React, { useState, useEffect, useContext } from "react";
import './../../styles/index.css';
import ARROW from './../../logos/ARROW.svg'

export default function ProjectDescription(prop) {

   return (
      <div className="flex-col-center">
         <h1 className="text-2xl 3xl:text-4xl">{prop.title}</h1>
         <div className="h-3" />
         <p className={prop.classSpecified}>{prop.content}
            {prop.content1 && <span><br />{prop.content1}</span>}
            {prop.content2 && <span><br />{prop.content2}</span>}
            {prop.content3 && <span><br />{prop.content3}</span>}
            {prop.content4 && <span><br />{prop.content4}</span>}
            {prop.content5 && <span><br />{prop.content5}</span>}
            {prop.content6 && <span><br />{prop.content6}</span>}
            {prop.content7 && <span><br />{prop.content7}</span>}</p>
      </div>
   );
}

