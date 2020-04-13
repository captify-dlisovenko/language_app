import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import QuoteList from "./containers/QuoteList";

import './App.css';

function App() {
    return (
        <>
            <Link to='/'>All quotes</Link>
            <Switch>
                <Route path='/' component={QuoteList}/>
            </Switch>
        </>
    )
}

export default App;
