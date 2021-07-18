import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import Home from "./components/pages/Home";
import Rating from "./components/pages/Rating";
import Charts from "./components/pages/Charts";

export const useRoutes = () => {
    // const history = useHistory();

    return (
        <Switch>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/rating">
                <Rating/>
            </Route>
            <Route path="/charts">
                <Charts/>
            </Route>
            <Redirect to="/home"/>
        </Switch>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     dir: state.direction.dir
//   }
// }

// export default connect(mapStateToProps)()