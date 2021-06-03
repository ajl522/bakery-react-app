import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes,
    cookies: state.cookies,
    cupcakes: state.cupcakes,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          cake={this.props.cakes.filter((cake) => cake.featured)[0]}
          cookie={this.props.cookies.filter((cookie) => cookie.featured)[0]}
          cupcake={this.props.cupcakes.filter((cupcake) => cupcake.featured)[0]}
        />
      );
    };

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
                </Switch> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
