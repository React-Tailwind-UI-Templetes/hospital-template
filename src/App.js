import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Banner from './page/Banner';
import Footer from './Footer/Footer';
import Cards from './page/Cards';
import Services from './page/Services';
import Details from './page/Details';
import DoctorProfile from './page/DoctorProfile';
import Test from './page/Test';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <DoctorProfile/>
      <Test/>
      <Details/>
      <Services/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
