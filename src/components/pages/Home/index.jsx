import React from "react";
import { connect } from "react-redux";
import "./Home.scss";

import Filter from "../../Filter";

const Home = ({ dir }) => {
    return (
        <div className="box__home">
            
            <Filter/>

            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dir: state.directions.dir
    }
  }
  
 export default connect(mapStateToProps)(Home);