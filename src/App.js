import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullPizza from './pages/FullPizza';
import Cart from './pages/Cart';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path='pizzas:id' element={<FullPizza />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
