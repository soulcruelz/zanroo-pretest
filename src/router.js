import React from "react"
import ReactDOM from "react-dom"
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from "react-router-dom"


function App() {
    return (
        <Switch>
            <Route exact="/">
                
            </Route>
        </Switch>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)