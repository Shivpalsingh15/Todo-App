import { useState } from "react";

export default function LikeButton(){
    const[click, setClick]= useState(false)

    function clicked(){
        setClick(!click)
        
    }
    return (
      <div>
        <p onClick={clicked}>
          {click ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}</p>
        {/* <button onClick={clicked}>Like</button> */}
      </div>
    );
}