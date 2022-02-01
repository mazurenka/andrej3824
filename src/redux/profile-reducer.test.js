import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello', likesCount: 11},
        {id: 3, message: 'Yo', likesCount: 22},
        {id: 4, message: 'Yo', likesCount: 34},
    ],
}

it('new post should be added', () => {
    let action = addPostActionCreator("Hey")
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})
it('new message "Hey" should be added', () => {
    let action = addPostActionCreator("Hey")
    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("Hey")

})
it('new likesCount should be added', () => {
    let action = addPostActionCreator("Hey")
    let newState = profileReducer(state, action)

    expect(newState.posts[4].likesCount).toBe(0)
})

