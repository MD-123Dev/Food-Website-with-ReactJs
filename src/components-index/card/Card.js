import React from 'react'
const Card = (props) => {
    return (
        <div>
            <div className="card mb-4" style={{width:'auto',height:300}}>
              <img className="card-img-top" src={ props.image } style={{width:'auto',height:'200px'}} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{ props.title}</h4>
                    <p className="card-text"></p>
                </div>
            </div>
            
        </div>
    )
}

export default Card