import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'
import food1 from '../../images/food1.jpg'
import food2 from '../../images/food3.jpg'
import food3 from '../../images/food6.jpg'
import food4 from '../../images/food4.jpg'
import food5 from '../../images/food9.jpg'
import food6 from '../../images/food5.jpg'


class Carousel extends Component {
  
    carouselRight(){
        const gap = 6;

            //**get html  */
            const carousel = document.getElementById("carousel"),
            content = document.getElementById("content"),
            next = document.getElementById("next"),
            prev = document.getElementById("prev");

            //**get width carousel . */
            let width = carousel.offsetWidth;//**offsetWisth : The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin. */


           
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {//**for display icon preveux to back  */
                prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
           
            
          
    }

    carouselLeft(){
          const gap = 6;

            //**get html  */
            const carousel = document.getElementById("carousel"),
            content = document.getElementById("content"),
            next = document.getElementById("next"),
            prev = document.getElementById("prev");

            //**get width carousel . */
            let width = carousel.offsetWidth;// 

            carousel.scrollBy(-(width + gap), 0);//**for scroll contenus ( The scrollBy() method scrolls the document by the specified number of pixels.) */

            if (carousel.scrollLeft - width - gap <= 0) {//**for display icon preveux to back  */
                prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }

            
    }

    render() {
       
         
        return (
            
            <div>
                
               <div style={{top:'210px', left:'430'}} >
       
            <div id="wrapper">
              <div id="carousel">
                <div id="content">
                  
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
              <button id="prev">
                <i className="fa fa-chevron-left" onClick={this.carouselLeft}></i>
              </button>
              <button id="next">
                <i className="fa fa-chevron-right" onClick={this.carouselRight}></i>
              </button>
           </div>
      </div>
               
            </div> 
        )
    }
}

export default Carousel