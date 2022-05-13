import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/Pizza-block/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import { useState, useEffect } from 'react';
import Skeleton from './components/Pizza-block/Skeleton';

function App() {

  const [item, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://627e76e4b75a25d3f3b8a189.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr)
      })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className='pizza-block-wrapper'>
            {item.map((index) => (
              <Skeleton key={index.id} {...index} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
