import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    login: null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getAuthUserData: any
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType, any> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer)
