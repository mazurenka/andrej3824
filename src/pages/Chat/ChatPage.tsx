import React, {useEffect, useState} from "react";
import {message} from "antd";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

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

    const [messages, SetMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            SetMessages(JSON.parse(e.data))
        })
    })


    return <div style={{height: '400px', overflow: 'auto'}}>
        {messages.map((m) => <Message message={m}/>)}
    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return <div>
        <img src={message.photo}/> <b>{message.userName}</b>
        <br/>
        {message.message}
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

