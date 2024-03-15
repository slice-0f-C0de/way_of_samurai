import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../hoc/withAuthRedirect";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            return userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStatePropsToRedirect = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect(mapStatePropsToRedirect)(AuthRedirectComponent)

let mapStateToProps = (state: AppStateType) => ({
        profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)