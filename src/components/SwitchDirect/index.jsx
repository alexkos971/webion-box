import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeDir } from "../../redux/actions";

import "./SwitchDirect.scss";



const SwitchDirect = ({ dispatch, dir, directions }) => {


    return (
        <div className="box__switcher">
            {
                directions.map(item => {
                    return (
                        <div className={`box__switcher-item${dir.name === item.name ? " active" : ""}`} onClick={() => dispatch(changeDir(item))} key={item.name}>
                            <Link to={`/${item.name}`}>
                                <i className={`fas fa-${item.icon}`}></i>
                                <span>{item.name}</span>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dir: state.directions.dir,
        directions: state.directions.directions
    }
}

export default connect(mapStateToProps)(SwitchDirect)