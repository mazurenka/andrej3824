import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "b2d25b10-75d3-4d4a-a513-a9de8b4b57cf"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileApi object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, photoFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: { userId: number }
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}



