import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { logout, login } from "../../redux/Auth-reducer";


class HeaderContainer extends React.Component {




    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    Login: state.auth.login,
    weather: state.profilePage.weather,

})
export default connect(mapStateToProps, { logout, login })(HeaderContainer)