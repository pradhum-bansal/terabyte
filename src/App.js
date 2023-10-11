import './App.css';
import Header from './layout/header';
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/scss/global.scss';
import Footer from './layout/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
