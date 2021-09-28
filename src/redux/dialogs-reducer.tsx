
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer