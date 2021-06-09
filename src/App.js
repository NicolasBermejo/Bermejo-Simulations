import './App.css';
import './index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Breadcrumb } from 'react-bootstrap'

function App() {
  return (
        <div>
          <nav class="navbar navbar" style={NavbarStyle}>
              <div class="container-fluid">
                <span class="navbar-brand" style={{ color: "#F64C72" }}>Bermejo Simulations</span>
                <Breadcrumb>
                  <Breadcrumb.Item active style={{ color: "#FFFFFF" }}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item style={{ color: "#FFFFFF" }}>About</Breadcrumb.Item>
                </Breadcrumb>
              </div>
          </nav>
          <header className="App-header" style={BackgroundDiv}>

          </header>
        </div>
  );
}

const BackgroundDiv={
  backgroundColor: "#242582"
}

const NavbarStyle={
  backgroundColor: "#242582"
}

const Logo={
  width: 30,
  height: 30,

}

export default App;
