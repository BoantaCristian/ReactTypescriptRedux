import axios from "axios";

const baseUrl = "http://localhost:61450/api/Ballance/"

export default {
    deposits() {
        return{
            fetchAll : () => axios.get(baseUrl + 'GetDeposits')
        }
    },
    withdrawals(){
        return{
            fetchAll : () => axios.get(baseUrl + 'GetWithdrawals')
        }
    },
    tradeOrders(){
        return{
            fetchAll : () => axios.get(baseUrl + 'GetTradeOrders')
        }
    }
}