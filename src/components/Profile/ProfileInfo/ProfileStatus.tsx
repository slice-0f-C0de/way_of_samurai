import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: true,
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>See ya!</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input value={'Hello'} onBlur={this.deactivateEditMode.bind(this)}></input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus