import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import NavBar from './layout/navbar/NavBar.js';
import Footer from './layout/footer/Footer.js';
import Index from './components-index/index/IndexPage.js';
import Detail from './components-details/page-detail/DetailPage.js';


function App() {
  return (
  
     <Router>
      <div className="App">
         
          <NavBar />
          
          <Switch>

              <Route exact path="/" component={Index} />
              <Route exact path="/detail" component={Detail} />    
             
          </Switch> 

            <Footer />
        
         
       </div>
        
      </Router>
     
     
  ) 
  
}

export default App;
