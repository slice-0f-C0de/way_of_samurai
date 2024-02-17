import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data
                    this.props.setAuthUserData(userId, email, login)
                }
            })
    }

    render() {
        return <Header />
    }
}

let mapStateToProps = () => ({})

export default connect(mapStateToProps, {
    setAuthUserData
}) (HeaderContainer)
