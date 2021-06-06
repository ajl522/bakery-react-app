import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import { CAKES } from "../shared/cakes";
import { COOKIES } from "../shared/cookies";
import { CUPCAKES } from "../shared/cupcakes";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
      cookies: COOKIES,
      cupcakes: CUPCAKES,
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          cake={this.state.cakes.filter((cake) => cake.featured)[0]}
          cookie={this.state.cookies.filter((cookie) => cookie.featured)[0]}
          cupcake={this.state.cupcakes.filter((cupcake) => cupcake.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" render={() => <HomePage />} />
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
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
