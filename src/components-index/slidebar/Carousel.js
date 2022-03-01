
import React, {  useRef } from "react";
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food3.jpg'
import food3 from '../../images/food6.jpg'
import food4 from '../../images/food4.jpg'
import food5 from '../../images/food9.jpg'
import food6 from '../../images/food5.jpg'
import './style.css'

const Carousel = (props) => {
   
    const carousel = useRef(null);
     const content = useRef(null);
    const prev = useRef(null);
    const next = useRef(null);


   const carouselRight = () =>{
        
        const gap = 6;

        
            let width = carousel.current.offsetWidth;


           
            carousel.current.scrollBy(width + gap, 0);
            if (carousel.current.scrollWidth !== 0) {
                prev.current.style.display = "flex";
            }
            if (content.current.scrollWidth - width - gap <= carousel.current.scrollLeft + width) {
                next.current.style.display = "none";
            }

          
           
            
          
    }

   const  carouselLeft = () =>{
       
          const gap = 6;

          
            let width = carousel.current.offsetWidth;

            carousel.current.scrollBy(-(width + gap), 0);

            if (carousel.current.scrollLeft - width - gap <= 0) {
                prev.current.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.current.scrollLeft + width) {
                next.current.style.display = "flex";
            }

            
    }

    return (
      <div>
                
               <div style={{top:'210px', left:'430'}} >
       
            <div id="wrapper">
              <div id="carousel" ref={carousel}>
                <div id="content" ref={content}>
                  
                    <div>
                      
                        <img className="item" src={food1} alt="First slide" />
                    </div>
                    <div >
                        <img  className="item" src={food2} alt="Second slide" />
                    </div>
                    <div >
                        <img  className="item" src={food3} alt="Third slide" />
                    </div>
                    <div>
                        <img   className="item" src={food4} alt="Third slide" />
                    </div>
                    <div>
                        <img   className="item" src={food5} alt="Third slide" />
                    </div>
                    <div>
                        <img   className="item" src={food6} alt="Third slide" />
                    </div>
                </div>
              </div>
              <button id="prev" ref={prev}>
                <i className="fa fa-chevron-left" onClick={carouselLeft}></i>
              </button>
              <button id="next" ref={next}>
                <i className="fa fa-chevron-right" onClick={carouselRight}></i>
              </button>
           </div>
      </div>
               
            </div> 
    )
}

export default Carousel