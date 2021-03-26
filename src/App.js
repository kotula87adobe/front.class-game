// TODO przepinac dynamicznie API_URL na produkcji !!!!!!!!

// TODO Przeniesc dane, metody z ContextData do propsow zeby uniezaleznic komponenty i umozliwic testowanie !!!!!

import 'fontsource-roboto';
import React, {useContext, useEffect} from "react";
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
import RouteParams from "./Game/Utils/RouteParams";
import Context from "./Context";


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

    const ContextData = useContext(Context)
    console.log({ContextData})

    return (
            <div className={root}>
                {/*<LoginForm />*/}
                {/*<SignForm />*/}
                {/*<Checkout />*/}
                <Router>

                    {/*/TODO zrobic osobny komponent tylko do sprawdzania typów/*/}

                    <Route path={'/:userId/:category?/:subcategory?'}>
                        <RouteParams {...ContextData} />
                    </Route>

                    <Switch>
                        <Route exact path={'/'}>
                            <AddUser {...ContextData} />
                            {/*//TODO przekazywac wszystko propsami, moze jakis zewnetrzny komponent Container dodac*/}
                        </Route>
                        <Route exact path={'/:userId'}>
                            <StartView {...ContextData} />
                        </Route>
                        <Route exact path={'/:userId/matematyka/:type/:max/:i?/:j?'}>
                            <Math {...ContextData} />
                        </Route>
                        <Route exact path={'/:userId/polski/:type/:max'}>
                            <Polish {...ContextData} />
                        </Route>
                        <Route exact path={'/test'}>
                            <CustomContainer {...ContextData} />
                        </Route>
                    </Switch>
                </Router>
            </div>

    );
}

export default App;
