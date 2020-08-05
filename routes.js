import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './src/components/Home/Home';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" >
                <Home />
                </Route>
            
        </Switch>
    );
}

export default Routes;