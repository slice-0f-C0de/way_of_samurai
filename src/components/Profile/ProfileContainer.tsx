import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

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

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)
