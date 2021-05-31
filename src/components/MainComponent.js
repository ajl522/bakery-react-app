import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                {/* <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route
                        exact
                        path="/aboutus"
                        render={() => <About />}
                    />
                    <Route
                        exact
                        path="/menu"
                        render={() => <Menu />}
                    />
                    <Redirect to="/home" />
                </Switch>*/}
                <Footer /> 
                
            </div>
        );
    }
}

export default Main;