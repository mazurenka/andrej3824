import {follow} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/users-api")
const userAPIMock = usersAPI

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

// @ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(result))

test('', async ()=> {
    const thunk  = follow(1)
    const dispatchMock = jest.fn()

    // @ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})