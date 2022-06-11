import React, { Component ,useState } from 'react'



 const Count = () => {

        
      const [count, setCount] = useState(0);

     
      const incrementCount = () => {
       
         setCount(count + 1);
      };

      const decrementCount = () => {
          setCount(count - 1);
      };

    return ( 
   
        <div>

             <div>
                 
                   
                     
                      
                      <button type="button" onClick={decrementCount} class="btn btn-decr"><i class="fa fa-minus"></i></button>
                        <input type="text" className="sty-inpcount"  name="" id=""  value={count} />

                      <button type="button" onClick={incrementCount} class="btn btn-incr"><i class="fa fa-plus"></i></button>
              </div>
             
              
           
       </div>     
             
    )
}

export default Count;