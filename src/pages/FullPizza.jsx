import { Link } from 'react-router-dom';

function FullPizza() {
    return (
        <div className="container">
            <img src={''} alt='Pizza' />
            <h2>Пицца</h2>
            <h4>1999 ₽</h4>
            <Link to="/">
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </div>
    );
}

export default FullPizza;
