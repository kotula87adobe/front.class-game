// TODO Przeniesc dane, metody z ContextData do propsow zeby uniezaleznic komponenty i umozliwic testowanie !!!!!

import 'fontsource-roboto';
import React, {useEffect} from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import './App.css';

import MyProvider from "./Provider";

import CustomContainer from "./Moje/CustomContainer"; //TODO xxx
import AddUser from "./Game/Auth/AddUser";
import StartView from "./Game/StartView";
import Polish from "./Game/Polish";
import Math from "./Game/Math";
import RouteParams from "./Game/RouteParams";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        overflow: 'hidden' //FIX bug when select hoover
    },

}));

function App() {

   const {root} = useStyles()

  return (
    <div className={root}>
      {/*<LoginForm />*/}
      {/*<SignForm />*/}
      {/*<Checkout />*/}


        <Router>

            <MyProvider>

                <Route path={'/:userId/:category?/:subcategory?'}>
                    <RouteParams />
                </Route>

                <Switch>
                    <Route exact path={'/'}>
                        <AddUser/>
                    </Route>
                    <Route exact path={'/:userId'}>
                        <StartView/>
                    </Route>
                    <Route exact path={'/:userId/matematyka/:type/:max/:i?/:j?'}>
                        <Math/>
                    </Route>
                    <Route exact path={'/:userId/polski/:type/:max'}>
                        <Polish/>
                    </Route>
                    <Route exact path={'/test'}>
                        <CustomContainer/>
                    </Route>
                </Switch>

            </MyProvider>

        </Router>


    </div>
  );
}

export default App;
