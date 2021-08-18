import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import AddEditPage from './Pages/AddEditPage/AddEditPage'
import NotFound from 'Components/NotFound/NotFound'
function index() {
    const match = useRouteMatch
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}></Route>
            <Route exact path={`${match.url}/add`} component={AddEditPage}></Route>
            <Route exact path={`${match.url}/:photoId`} component={AddEditPage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    )
}

export default index