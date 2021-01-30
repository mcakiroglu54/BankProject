import axios from 'axios'
import axiosInstance from './axiosInstance'

const BASE_URL = 'http://localhost:8080'

class BankService {
  login(userInfo) {
    return axios.post(BASE_URL + '/auth/login', userInfo)
  }
  register(userInfo) {
    return axios.post(BASE_URL + '/auth/register', userInfo)
  }
  deposit(userInfo) {
    return axiosInstance.post(BASE_URL + '/account/deposit', userInfo)
  }

  withdraw(userInfo) {
    return axiosInstance.post(BASE_URL + '/account/withdraw', userInfo)
  }

  balance() {
    return axiosInstance.get(BASE_URL + '/account/balance')
  }
}
export default new BankService()
