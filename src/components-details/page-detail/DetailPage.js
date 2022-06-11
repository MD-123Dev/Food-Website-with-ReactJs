import React, { Component } from 'react'
import ImageView from '../imageview/ImageView.js';
import Star from '../star/Star.js';
import Info from '../infoproduct/InfoProduct.js';
import Qte from '../count/Count.js';
import Buy from '../buy/BuyButton.js';
import Fav from '../favorit/FavoritButton.js';
 import './style.css'


class DetailPage extends Component {
  
    
    

    render() {
       
         
        return (
            
            <div>
               
               
                <div className="container">
                   <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                 <ImageView />
                            </div>
                           
                      
                   
                            <div className="col-md-6">
                                <div className="row">
                                <h6 className="tit-sty">Food number 1</h6>
                                </div>
                            
                                <div className="row">
                                    <Star />
                                    
                                </div>
                                <div className="row">
                                    <Info />
                                    
                                </div>
                                <div className="row">
                                    <h6 >Qte :</h6>
                                    
                                </div>
                                <div className="row">
                                    
                                    <Qte  />
                                </div>
                                <div className="row">
                                   <Buy/>
                                   <Fav />
                                </div>
                            </div>
                        </div>
                   </div>
                    
                </div>

                
            </div> 
        )
    }
}

export default DetailPage