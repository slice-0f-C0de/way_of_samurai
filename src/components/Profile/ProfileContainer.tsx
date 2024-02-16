import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: {
        photos: {
            small: '',
            large: ''
        }
    }
}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userID
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{
    setUserProfileActionCreator
}) (ProfileContainer)