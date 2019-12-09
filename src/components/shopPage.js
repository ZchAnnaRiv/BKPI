import React from 'react';
import '../App';
import MenuList from "./menu_list";


class ShopPage extends React.Component{
    state={
        MenuData: [
            {label: 'Конспект', liked: false, classN: "fa fa-book ", tag: 'Конспекты', price: 200, description: "Превосходный товар",source: "imgs/beta.jpg", id: 1},
            {label: 'Цветы', liked: false, tag: 'Конспекты', price: 150, description: "Превосходный товар",source: "imgs/beta.jpg", id: 2},
            {label: 'Кошка', liked: false, tag: 'Животные', price: 100, description: "Превосходный товар",source: "imgs/beta.jpg", id: 3},
            {label: 'Чайник', liked: false, tag: 'Одежда', price: 250, description: "Превосходный товар",source: "imgs/beta.jpg", id: 4},
            {label: 'Телефон', liked: false, tag: 'Еда', price: 2000, description: "Превосходный товар",source: "imgs/beta.jpg", id: 5},
        ]
    };
    render()
    {
        return(
            <section>
                <div className="container d-flex">
                    <aside className="menu-aside">
                        <div>
                            <p>Выбрать категорию</p>
                            <ul>
                                <a href="#">
                                    <li><i className="fas fa-hamburger"></i> Еда</li>
                                </a>
                                <a href="#">
                                    <li><i className="fa fa-cat"></i> Животные</li>
                                </a>
                                <a href="#">
                                    <li><i className="fa fa-car-battery"></i> Tехника</li>
                                </a>
                                <a href="#">
                                    <li><i className="fa fa-tshirt"></i> Одежда</li>
                                </a>
                                <a href="#">
                                    <li><i className="fa fa-gift"></i> Бесплатно</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                            <footer className="footer-style">
                                <div className="social-m">
                                    <p>Мы в социальных сетях:</p>
                                    <div className="row justify-content-around">
                                        <a href="">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="">
                                            <i className="fab fa-viber "></i>
                                        </a>
                                        <a href="">
                                            <i className="fab fa-telegram "></i>
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter "></i>
                                        </a>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </footer>
                        </div>
                    </aside>

                    <div className="main-part" >
                        <div className="slider" >
                            <div className="main-text-img">
                                <img src="/imgs/main-text-img.png"/>
                            </div>
                            <div className="main-img">
                                <img src="/imgs/main_img.jpg"/>
                            </div>
                        </div>
                        <div className="row menu-items" id="menuItems">
                            <MenuList menuItems ={this.state.MenuData} />
                        </div>
                    </div>
                </div>
            </section>

    );
    }
}




export default ShopPage;

