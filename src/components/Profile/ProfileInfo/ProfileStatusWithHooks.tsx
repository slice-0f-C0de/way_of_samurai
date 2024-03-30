import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(editMode)
    }

    const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>}
            {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChanged} value={status}
                           onBlur={activateEditMode}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks