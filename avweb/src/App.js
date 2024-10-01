
import './App.css';
import Slider from './components/Slider/SliderComponent'; 
import NavBar from './components/Navbar/NavbarComponent';
import AboutSection from './components/About/AboutComponent';
function App() {
  return (
    //  className="App"
    <div>
      <NavBar/>
      <Slider />
      <>      
        <AboutSection/>
      </>


    
    </div>
  );
}

export default App;
