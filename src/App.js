import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/Pizza-block/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import pizzas from './assets/pizzas.json';

function App() {
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
          <PizzaBlock pizzas={pizzas} />
        </div>
      </div>
    </div>

  );
}

export default App;
