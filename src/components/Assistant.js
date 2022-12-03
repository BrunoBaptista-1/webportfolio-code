import React from "react";
import Contacts from "./Contacts";
import BackButton from "./BackButton";
import Chat from "./Chat";

function Assistant() {
    return (
        <div>
            <BackButton />
            <Chat />
            <Contacts />
        </div>
    );
}

export default Assistant;