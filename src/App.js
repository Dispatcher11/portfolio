import Home from './components/Home';
import Navbar from './components/Navbar';
import './app.scss';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(localStorage.getItem('toggle') === "true");

  return (
    <div className="App">
      <Navbar toggle={toggle} setToggle={setToggle} />
     <Home toggle={toggle} />
     {/* <Footer /> */}
    </div>
  );
}

export default App;
