import Axios from "axios"

const axios = Axios.create({
    baseURL: 'https://ws.alibaba.ir/api/v1/flightInfo/',
    timeout: 10000,
})

export default axios