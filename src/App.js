import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header";
import ShopPage from "./components/shopPage";
import Profile from "./components/profile";
import AddItem from "./components/addItem";
import Footer from "./components/footer";
import Authorization from "./components/authorization";


class App extends React.Component{



    render(){
        return(
            <Router>
                <Route path='/' component={Header} />
                <Route path='/' component={ShopPage} exact/>
                <Route path='/main' component={ShopPage}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/add' component={AddItem}/>
                <Route path='/authorization' component={Authorization}/>
                <Route path='/' component={Footer}/>

            </Router>
        );
    }
}
export default App;