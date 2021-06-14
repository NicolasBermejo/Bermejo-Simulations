import './App.css';
import './index.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';


function App() {
  return (
        <>
        <Router>
          <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
            </Switch>
        </Router>
        </>
  );
}



export default App;
