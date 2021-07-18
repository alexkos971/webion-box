import React from "react";
import { connect } from "react-redux"
// import {  } from "../../redux/actions";
 
import "./Header.scss";

import { ReactComponent as Logo } from "../../../src/assets/logo.svg";

const Header = ({ dispatch, name, avatar }) => {
    return (
        <div className={`box__header`}>
            <div className="box__header-left">
                {/* <i className="fas fa-bars"></i> */}
                {/* <i className="fas fa-search"></i> */}
                <i className="fas fa-box-open"></i>
                <span>100</span>
            </div>

            <div className="box__header-logo">
                <Logo />
            </div>
            
            <div className="box__header-right">
                <div className="box__header-right-profile">
                    <span>{name}</span>

                    <div className="box__header-right-profile-avatarCover">
                        <img src={avatar} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.profile.name,
        avatar: state.profile.avatar,
    }
  }

export default connect(mapStateToProps)(Header);