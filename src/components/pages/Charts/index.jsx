import React from "react";
import { connect } from "react-redux";
import "./Charts.scss";

const Charts = ({ dir }) => {
    return (
        <div className="box__charts">
            Charts
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dir: state.directions.dir
    }
  }
  
 export default connect(mapStateToProps)(Charts);