import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/Auth-reducer";

class  HeaderContainer extends React.Component{


    componentDidMount() {
        axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                "API-KEY": "6c4b7d1a-3825-42c9-9166-9315565e1f90"
            }
        })

            .then(response => {
                if ( response.data.resultCode === 0) {
                    let  {id,login,email,} = response.data.data
                    this.props.setAuthUserData (id,email,login,)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect (mapStateToProps,{setAuthUserData})(HeaderContainer)