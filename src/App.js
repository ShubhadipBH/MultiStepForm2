import logo from './logo.svg';
import './App.css';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration/Registration'
import Home from './Components/home/Home';
 import Footer from './Components/Layout/Footer/Footer';
import {Route,Redirect,Switch,BrowserRouter as Router} from 'react-router-dom'
// import Routes from './Routes/Routes';
import RegForm1 from './Components/Registration/RegForm1';
 
function App() {
  return (
    <div className="App">
      
        <Router>
                <Switch>
                    
                    <Route  exact path="/" component={Home}></Route>
                    <Route path="/Registration" component={Registration}></Route>
                      <Route path="/RegForm1" component={RegForm1}></Route>
              
                </Switch>
            </Router>

    </div>
  );
}

export default App;
