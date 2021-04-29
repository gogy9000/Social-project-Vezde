import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect =(Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!!this.props.isAuth) return <Redirect to={'/Login'}/>
            return <Component {...this.props} />
        }

    }
    let mapStateToPropsForRedirect = (state) => ({

        isAuth: state.auth.isAuth
    })
    let ConnectedAuthRedirectComponent= connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}