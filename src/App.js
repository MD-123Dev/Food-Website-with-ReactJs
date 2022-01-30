import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import NavBar from './layout/navbar/NavBar.js';
import Footer from './layout/footer/Footer.js';
import Index from './components-index/index/IndexPage.js';


function App() {
  return (
  
     <Router>
      <div className="App">
         
        
          <NavBar />
          
          <Switch>

              <Route exact path="/" component={Index} />
                  
             
          </Switch> 

            <Footer />
        
         
       </div>
        
      </Router>
     
     
  ) 
  
}

export default App;
