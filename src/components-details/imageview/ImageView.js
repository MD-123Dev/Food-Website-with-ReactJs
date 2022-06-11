import React, { Component , useRef  } from 'react'
import './style.css'
import image1 from '../../images/food1.jpg'
import image2 from '../../images/food3.jpg'
import image3 from '../../images/food6.jpg'
import image4 from '../../images/food8.jpg'
import image5 from '../../images/food9.jpg'
import image6 from '../../images/food4.jpg'
import image7 from '../../images/food1.jpg'

const  ImageView = () => {
    
        const imgview = useRef(null);
       
       const img1 = useRef(null);
       const img2 = useRef(null);
       const img3 = useRef(null);
       const img4 = useRef(null);
         

         const remplaceImage1 = () => {
       
                const img = img1.current.getAttribute("src");
            
            imgview.current.src = img;
      };

       const  remplaceImage2 = () => {
       
          var img = img2.current.getAttribute("src");
            imgview.current.src = img;
      };

       const  remplaceImage3 = () => {
       
         var img = img3.current.getAttribute("src");
            imgview.current.src = img;
      };

       const  remplaceImage4 = () => {
       
         var img = img4.current.getAttribute("src");
            imgview.current.src = img;
      };

      
    return ( 

       
       
      
            
            <div>
                
              
               
                     <div className="row">
                       <div >
                            
                             <img className="item img-view1" ref={imgview} id="img1" src={image3} alt="First slide" />
                       </div>
                     </div>
                      <div className="row">

                          <div class=" mt-3">
                                <img className="item img-view" style={{marginLeft:'26px'}} ref={img1} id="img2" src={image1} onClick={remplaceImage1.bind(this)} alt="First slide" />
                          
                                <img className="item img-view" ref={img2} id="img2" src={image4} onClick={remplaceImage2.bind(this)} alt="First slide" />
                          
                                <img className="item img-view" ref={img3} id="img2" src={image2} onClick={remplaceImage3.bind(this)} alt="First slide" />
                        
                                <img className="item img-view" ref={img4} id="img2" src={image3} onClick={remplaceImage4.bind(this)} alt="First slide" />
                           </div>  
                     </div>
                  
                        
                           
                
            </div> 
        )

}
    
export default ImageView