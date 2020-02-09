import React from "react"
import ReactDOM from "react-dom"
import {
    HashRouter,
    Route,
    Switch,
} from "react-router-dom"
import UserManagementContainer from '~/scenes/user-management'


function App() {
    return (
        <Switch>
            <Route exact="/">
                <UserManagementContainer />
            </Route>
        </Switch>
    )
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("root")
)