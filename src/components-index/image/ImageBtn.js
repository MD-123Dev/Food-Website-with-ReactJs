import React from 'react'

const ImageBtn = (props) => {
    return (
        <div>
           
                <img className="card-img-top" src={ props.image } style={{width:'500px',height:'200px'}} alt="" />
                
          
            
        </div>
    )
}

export default ImageBtn