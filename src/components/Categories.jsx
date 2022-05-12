import { useState } from 'react';

function Categories() {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleCategories = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((index) => (
                    <li
                        key={index}
                        onClick={() => handleCategories(index)}
                        className={activeIndex === index ? 'active' : ''}
                    >
                        {index}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;