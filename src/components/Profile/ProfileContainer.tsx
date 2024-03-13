import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileActionCreator, setUserProfileActionCreator} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: {
        photos: {
            small: string,
            large: string
        }
    }
}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        this.props.getUserProfileActionCreator(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfileActionCreator
})(WithUrlDataContainerComponent)