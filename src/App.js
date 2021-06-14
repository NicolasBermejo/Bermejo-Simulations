import './App.css';
import './index.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Simulations from './components/pages/Simulations';
import About from './components/pages/About';


function App() {
  return (
        <>
        <Router>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/Simulations' exact component={Simulations}/>
              <Route path='/About' expact component={About}/>
            </Switch>
        </Router>
        </>
  );
}



export default App;
