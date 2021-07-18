import React from "react";
import { connect } from "react-redux"
import './index.scss';

import Header from "./components/Header";
import Background from "./components/Background";
import SwitchDirect from "./components/SwitchDirect";
import { useRoutes } from "./routes";
import { Route } from "react-router-dom";

function App({ dispatch, dir }) {
  const routes = useRoutes();

  return (
    <Route>
      <div className="box">
        <Header />

        { routes }

        <Background/>
        <SwitchDirect />
      </div>
    </Route>
  );
}

const mapStateToProps = (state) => {
  return {
    dir: state.directions.dir
  }
}

export default connect(mapStateToProps)(App);
