import React, { useState } from "react";
import { connect } from "react-redux";
import "./Filter.scss";

const Filter = ({ dir }) => {
    const [active, setActive] = useState(false)

    const select = (value) => {
        console.log(value)
    } 

    return (
        <div className="box__filter">
            <div className="box__filter-search">
                <span onClick={() => setActive(!active)}>
                    <i className="fas fa-search"></i>
                </span>

                <input type="text" name="filter" placeholder="Type something..." className={`box__filter-input ${active ? "active" : ""}`}/>
            </div>

            <div className="box__filter-menu">
                <select name="select" id="select" onChange={(e) => select(e.target.value)} >
                    <option value="popular">Popular</option>
                    <option value="new">New</option>
                </select>
            </div>

            <div className="box__filter-view">
                <i className="fas fa-list"></i>
                <i className="fas fa-th"></i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dir: state.directions.dir
    }
  }
  
 export default connect(mapStateToProps)(Filter);