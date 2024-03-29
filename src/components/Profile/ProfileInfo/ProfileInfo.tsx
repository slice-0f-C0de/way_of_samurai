import React from 'react';
import c from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: {
        photos: {
            small: string,
            large: string
        }
    }
    status: string
    updateStatus: () => void
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
    {/*<div>*/}
    {/*    <img src={"https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/a6c88c76-09b4-465f-aed6-8580a0d0a039_rw_1200.jpg?h=cb20dc49ecfcf5ce1a56a23716fdb1e2"}/>*/}
    {/*</div>*/}
    <div className={c.descriptionBlock}>
        <img src={props.profile.photos.small} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
    </div>
};

export default ProfileInfo;