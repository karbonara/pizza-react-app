import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullPizza from './pages/FullPizza';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import { useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState();

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path='pizzas:id' element={<FullPizza />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
