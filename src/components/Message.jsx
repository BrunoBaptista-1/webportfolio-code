import React from "react";

function Message(props) {
    return (
        <div className={props.user} >
            <p className="message">{props.message}</p>
        </div>
    );
}

export default Message;