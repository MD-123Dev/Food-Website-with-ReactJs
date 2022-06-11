import React, { Component , useRef ,useState } from 'react'
import './style.css'



 const Star = () => {

      const [colorx, setColor] = useState(true);
      const styStar1 = useRef(null)
      const styStar2 = useRef(null)
      const styStar3 = useRef(null)
      const styStar4 = useRef(null)   
      const styStar5 = useRef(null) 

     
     const changeColorStar1 = () =>{
         setColor(!colorx )
          
         styStar1.current.style.color = (colorx==true) ? "yellow" : "#f7f0f0";
     }
     const changeColorStar2 = () =>{
          setColor(!colorx )
          
         styStar2.current.style.color = (colorx==true) ? "yellow" : "#f7f0f0";
     }
     const changeColorStar3 = () =>{
         setColor(!colorx )
          
         styStar3.current.style.color = (colorx==true) ? "yellow" : "#f7f0f0";
     }
     const changeColorStar4 = () =>{
         setColor(!colorx )
          
         styStar4.current.style.color = (colorx==true) ? "yellow" : "#f7f0f0";
     }
     const changeColorStar5 = () =>{
        
          setColor(!colorx )

         styStar5.current.style.color = (colorx==true) ? "yellow" : "#f7f0f0";
        
        
          
     }

    return ( 
   
        <div>

             <div>
                 
                   
                     
                     <span><i class="fa fa-star style-icon-star star-color" ref={styStar1} onClick={changeColorStar1}></i></span>
                     <span><i class="fa fa-star style-icon-star star-color" ref={styStar2} onClick={changeColorStar2}></i></span>
                     <span><i class="fa fa-star style-icon-star1 star-color" ref={styStar3} onClick={changeColorStar3}></i></span>
                     <span><i class="fa fa-star style-icon-star1 star-color" ref={styStar4} onClick={changeColorStar4}></i></span>
                     <span><i class="fa fa-star style-icon-star1 star-color" ref={styStar5} onClick={changeColorStar5}></i></span>
             
              </div>
             
              
           
       </div>     
             
    )
}

export default Star;