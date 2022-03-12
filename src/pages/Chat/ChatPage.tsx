import React from "react";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {



    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}

const Messages: React.FC = () => {
    const messages = [1, 2, 3, 4]
    return <div style={{height: '400px', overflow: 'auto'}}>
        {messages.map((m: any) => <Message/>)}
        {messages.map((m: any) => <Message/>)}
        {messages.map((m: any) => <Message/>)}
    </div>
}

const Message: React.FC = () => {
    const message = {
        url: 'https://via.placeholder.com/30',
        author: 'Andre',
        text: 'Hello friends'
    }


    return <div>
        <img src={message.url}/> <b>{message.author}</b>
        <br/>
        {message.text}
        <hr/>
    </div>
}


const AddMessageForm: React.FC = () => {
    return <div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Send</button>
        </div>
    </div>
}

export default ChatPage

