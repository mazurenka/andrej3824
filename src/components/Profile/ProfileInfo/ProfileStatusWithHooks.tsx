import React from "react";

const ProfileStatusWithHooks = (props) => {


    return (
        <div>
            {
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
            </div>
            }
            {false &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={}
                       value={''}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks
