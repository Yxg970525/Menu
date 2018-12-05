import React, { Component } from 'react';
import routes from './config';
import { BrowserRouter, Redirect, Route, Link, Switch } from 'react-router-dom'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.routes.map((item,i)=><Route path={item.path} component={item.component} key={i} exact></Route>)
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;