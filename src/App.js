import './App.css';
import Header from './layout/header';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/scss/global.scss';
import Footer from './layout/footer';
import RoutesPath from './route/route';
import $ from "jquery";

function App() {
  return (
    <div className="App">

      <Header/>
      <RoutesPath/>
      <Footer/>
    </div>
  );
}

export default App;
