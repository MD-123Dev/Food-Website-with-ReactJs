import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search';
import Menu from '../menu/Menu.js';
import ImageTop from '../imagetop/ImageTop.js';
import Slide from '../slidebar/Carousel.js';
import Card from '../card/Card.js'
import Title from '../title/Title.js'
import Image from '../image/ImageBtn.js'

import image1 from '../../images/food1.jpg'
import image2 from '../../images/food3.jpg'
import image3 from '../../images/food6.jpg'
import image4 from '../../images/food8.jpg'
import image5 from '../../images/food9.jpg'
import image6 from '../../images/food4.jpg'
import image7 from '../../images/food1.jpg'
import imagebtn1 from '../../images/imagebuttom1.jpg'
import imagebtn2 from '../../images/imagebuttom1.png'

class IndexPage extends Component {
  
    
    

    render() {
       
         
        return (
            
            <div>
                
               
                <div className="container">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                          <Menu />
                      </div>
                         <div className="col-md-8 col-sm-4">
                          <Search />
                           <div className="row mt-2">
                              <div className="col-md-12 col-sm-12">
                                <ImageTop />
                              </div>
                          </div>
                      </div>
                     
                    </div> 
                    
                      <div className="row mt-4">
                         <div className="col-md-12 col-sm-12">
                           <Slide />
                         </div>
                    </div>
                           <Title title="Featured Product" />
                            <div className="row mt-5">
                                <div className="col-md-3 col-sm-3">
                                 <Link to="/detail"><Card title="since ists has nes " image = { image5 } /></Link> 
                                </div>
                                <div className="col-md-3 col-sm-3">
                                  <Card title="since ists has nes " image = { image2 } />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                   <Card title="since ists has nes " image = { image4 } />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                   <Card title="since ists has nes " image = { image5 } />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-3 col-sm-3">
                                   <Card title="since ists has nes " image = { image6 } />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                  <Card title="since ists has nes " image = { image1 } />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                   <Card title="since ists has nes " image = { image7 } />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                   <Card title="since ists has nes " image = { image2 } />
                                </div>
                            </div>
                            
                             <Title title="From The Blog" />
                            <div className="row mt-3">
                                <div className="col-md-6 col-sm-6">
                                   <Image image = { imagebtn1 } />
                                </div>
                              <div className="col-md-6 mt-2 col-sm-6">
                                   <Image image = { imagebtn2 } />
                               </div>
                            </div>
                    
                </div>

                
            </div> 
        )
    }
}

export default IndexPage