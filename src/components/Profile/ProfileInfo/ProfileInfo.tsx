import React from 'react';
import c from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div>
    <div>
        <img src={"https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/a6c88c76-09b4-465f-aed6-8580a0d0a039_rw_1200.jpg?h=cb20dc49ecfcf5ce1a56a23716fdb1e2"}/>
    </div>
    <div className={c.descriptionBlock}>
        ava + description
    </div>
    </div>
};

export default ProfileInfo;