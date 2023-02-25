import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import {Navbar} from './Components/Navbar';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <CartPage/> */}
    <AllRoutes/>
    </div>
  );
}

export default App;
