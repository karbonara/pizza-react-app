import { useState, useEffect } from 'react';
import Skeleton from '../components/Pizza-block/Skeleton';
import PizzaBlock from '../components/Pizza-block/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

function Home() {
    const [item, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategory] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://627e76e4b75a25d3f3b8a189.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [categoryId]);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => setCategory(i)} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className='pizza-block-wrapper'>
                {
                    isLoading ?
                        [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : item.map((index) => <PizzaBlock key={index.id} {...index} />)
                }
            </div>
        </>
    );
}

export default Home;
