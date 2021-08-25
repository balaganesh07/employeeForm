import React from 'react';
import ListEmployees from './Employees/ListEmployees';
import { Switch, Route } from 'react-router-dom';

function Routes() {

    return(
            <Switch>
                <Route path='/' component= {ListEmployees} exact />
            </Switch>
    )
}

export default Routes;