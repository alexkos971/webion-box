import React from "react";
import { connect } from "react-redux";
import "./Rating.scss";

const Rating = ({ dir }) => {
    return (
        <div className="box__rating">
            {/* rating */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dir: state.directions.dir
    }
  }
  
 export default connect(mapStateToProps)(Rating);