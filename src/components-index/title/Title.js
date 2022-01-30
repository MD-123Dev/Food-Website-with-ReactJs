
import React from 'react'
import './style.css'


 const Title = (props) => {
    return ( 
    
        <div>

             <div>
                 <h2 className="titl-sty">{ props.title}</h2>
                 <div className="border"></div>
              </div>
             
              
           
       </div>     
             
    )
}

export default Title;