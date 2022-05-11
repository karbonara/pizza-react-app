import Header from './components/Header';
import PizzaBlock from './components/Pizza-block/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <PizzaBlock />
        </div>
      </div>
    </div>

  );
}

export default App;
