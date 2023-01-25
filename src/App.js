import Home from './components/Home';
import Navbar from './components/Navbar';
import './app.scss';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Home />
     {/* <Footer /> */}
    </div>
  );
}

export default App;
