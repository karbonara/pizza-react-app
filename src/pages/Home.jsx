import { useState, useEffect } from 'react';
import Skeleton from '../components/Pizza-block/Skeleton';
import PizzaBlock from '../components/Pizza-block/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useContext } from 'react';
import { SearchContext } from '../App'

function Home() {
    const { searchValue } = useContext(SearchContext);

    const [item, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategory] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        fetch(`https://627e76e4b75a25d3f3b8a189.mockapi.io/items?${category}${search}`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [categoryId, searchValue]);

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
                        : item
                            // .filter((obj) => {
                            //     if (obj.title.toLowerCase().includes(searchValue)) {
                            //         return true;
                            //     }
                            //     return false;
                            // })
                            .map((index) => <PizzaBlock key={index.id} {...index} />)
                }
            </div>
        </>
    );
}

export default Home;
