
import React from 'react'
import './style.css'


 function Footer() {
    return (
        <div>
              
           <footer>
         <div className="jumbotron mt-3" >
			<div className="row m-2">
				<div className="col-md-4 col-sm-4">
					
						<div className="locationFooter">
                            <h1 className="textsty" > Location</h1>
                            <div className="line"></div>
							<p className="textsty2">4452 location CASA,Maroc</p>

						</div>
					
				</div>
				<div className="col-md-4 col-sm-4">
					
              
                    <div className="about">
                                <h2 className="textsty" style={{ marginLeft: '120px' }} >About US</h2>
                                <div className="line1"></div>
                                <p className="textsty2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Neque facere laudantium magnam voluptatum autem. Amet aliquid </p>
                                   
                    </div>
                 	
				
				</div>
				<div className="col-md-4 col-sm-4">
					<h2  className="textsty">FOLLOW US
                    </h2>
                    <div className="line"></div>
 

                     <div className="centreicon">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-instagram"></i></a>
						
					 </div>
					

				</div>

			</div>
            <div className="row">
                <div className="col-md-4 offset-4 ">
                       <div style={{ marginLeft: '39px' }}>
                           <input type="email" name="" className="sbscribe" id="" placeholder="  Email" />
                           <button className="btn-email">Subscribe</button>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-4 ">
                       <div className="copyright">
                            <h5 className="textsty2" style={{ marginLeft: '120px' }} >Copyright @Website 2022</h5>
                        </div>
                </div>
            </div>
			
		</div>
	</footer>
       </div>     
             
      
    )
}
export default Footer;