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
  deposit(transactionInfo) {
    return axiosInstance.post(BASE_URL + '/account/deposit', transactionInfo)
  }

  withdraw(transactionInfo) {
    return axiosInstance.post(BASE_URL + '/account/withdraw', transactionInfo)
  }
  
  getAllUsers() {
    return axiosInstance.get(BASE_URL + "/user/all");
  }


}
export default new BankService()
