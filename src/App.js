import 'fontsource-roboto';

import React from "react";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import LoginForm from './Layouts/LoginForm'
import SignForm from "./Layouts/SignForm";
import AddressForm from "./Layouts/AddressForm";
import Checkout from "./Layouts/Checkout";
import CustomContainer from "./Moje/CustomContainer";

import MyProvider from "./Provider";

import Game from "./Game/Game";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },

}));

function App() {

   const {root} = useStyles()

  return (
    <div className={root}>
      {/*<LoginForm />*/}
      {/*<SignForm />*/}
      {/*<Checkout />*/}

      <MyProvider>

          <Router>
              <Switch>
                  <Route exact path={'/'}>
                      <Game/>
                  </Route>
                  <Route exact path={'/test'}>
                      <CustomContainer/>
                  </Route>
              </Switch>
          </Router>

      </MyProvider>

    </div>
  );
}

export default App;
