import React, { useState } from "react";
import Message from "./Message";
import SendIcon from '@mui/icons-material/Send';

function ChatWindow() {

    const [message, setMessage] = useState("");
    const [messageArray, setMessageArray] = useState([]);

    function buildMessage(event) {
        const text = event.target.value;
        setMessage(text);
    }

    function sendMessage(event) {

        if (message !== "") {
            const payloadmessage = {
                user: "client",
                message: message
            }

            setMessageArray(previousMessages => {
                return [...previousMessages, payloadmessage]
            })
            setMessage("");

            fetch('http://0.0.0.0:5005/webhooks/rest/webhook', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sender: "client",
                    message: message
                })
            })
                .then((response) => response.json())
                .then((data) => {

                    data.map(response => {

                        if (response.text) {
                            const botResponse = {
                                user: "bot",
                                message: response.text
                            }

                            return setMessageArray(previousMessages => {
                                return [...previousMessages, botResponse]
                            })
                        } else return null;

                    })

                });

        }

        event.preventDefault();
    }

    return (
        <div className="chatComponent">
            <div className="chatBody">
                {messageArray.slice(0).reverse().map((element, index) => {

                    return <Message key={index} index={index} user={element.user} message={element.message} />

                })}
            </div>
            <div className="chatInput">
                <form>
                    <input type="text" onChange={buildMessage} value={message} id="chatText" name="chatText" placeholder="Type your message..." autoComplete="off"></input>
                    <button className="send" onClick={sendMessage} type="submit"><SendIcon /></button>
                </form>
            </div>
        </div>
    );
}

export default ChatWindow;