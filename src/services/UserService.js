import axios from 'axios';

class UserService {

    async signIn(email, password) {
        return axios.post(`https://cherrybookstore-back-ul5xycu2sa-uc.a.run.app/signIn`, {
            email : email,
            password : password
        })
    }

    async signOut(email, password) {
        return axios.post(`https://cherrybookstore-back-ul5xycu2sa-uc.a.run.app/signOut`, {
            email : email,
            password : password
        })
    }

    async postUser(email, password) {
        console.log("Signing up")
        return axios.post(`https://cherrybookstore-back-ul5xycu2sa-uc.a.run.app/signUp`, {
            email : email,
            password : password
        })
    }

    async Oauth(path){
        return axios.post(`https://cherrybookstore-back-ul5xycu2sa-uc.a.run.app` + path)
    }
}

export default new UserService();
