import React from 'react';
import '../App';
import ReactDOM from "react-dom";
import Profile from "./profile";
import ShopPage from "./shopPage";
import {Link} from "react-router-dom";


class Header extends React.Component{

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-default ">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="" className="navbar-brand">
                            <img className="logo-img" src="imgs/logo.png"/>
                                <span className="logo-text">KPI</span>
                        </a>
                    </div>
                    <div className="search-field hidden">
                        <div className="input-group">
                            <input type="search" className="form-control search" placeholder="Поиск"/>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div>
                        <ul className="nav justify-content-end d-flex align-items-end flex-row font-sz-nav">
                            <li className="nav-item" >
                                <Link className="nav-link fa fa-user" to="/profile"></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fa fa-shopping-bag" to="/main"  ></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fa fa-plus" to="/add"></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fas fa-door-open" to="/authorization"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;