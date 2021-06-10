import './App.css';
import './index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "./img/background4.png"

import { Breadcrumb } from 'react-bootstrap'

function App() {
  return (
        <div>
          <nav class="navbar navbar" style={NavbarStyle}>
              <div class="container-fluid">
                <span class="navbar-brand" style={{ color: "rgb(36 68 82)", fontFamily: "impact", fontSize: 25 }}>Bermejo</span>
                <Breadcrumb>
                  <Breadcrumb.Item active style={{ color: "#rgb(36 68 82)", fontFamily: "courier"}}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item style={{ color: "rgb(36 68 82)", fontFamily: "courier" }}>About</Breadcrumb.Item>
                </Breadcrumb>
              </div>
          </nav>
          <header className="App-header" style={BackgroundDiv}>

          </header>
        </div>
  );
}

const BackgroundDiv={
  backgroundImage: "linear-gradient(#242582, #5750AF)",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const NavbarStyle={
  backgroundColor: "#242582"
}

const Logo={
  width: 30,
  height: 30,

}



export default App;
