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
    getAuthUserData: () => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<UsersPropsType, MapDispatchToPropsType> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer)
