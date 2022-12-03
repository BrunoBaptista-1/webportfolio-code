import React from "react";
import ChatWindow from "./ChatWindow";

function Chat() {

    return (
        <div className="outerArea">
            <div className="chatContainer">
                <div className="chatArea">
                    <ChatWindow />
                </div>
            </div>
        </div>
    );
}

export default Chat;