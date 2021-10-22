import api from "./api";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "../actions/index";

export const fetchDeposits = () => {
    return (dispatch: Dispatch<Action>) => {
        api.deposits()
           .fetchAll()
           .then(
            (response: any) => {
                   dispatch({
                       type: ActionType.DEPOSIT,
                       payload: response.data
                    })
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )   
    }
}

export const fetchWithdrawals = () => {
    return (dispatch: Dispatch<Action>) => {
        api.withdrawals()
           .fetchAll()
           .then(
               (response: any) => {
                   dispatch({
                       type: ActionType.WITHDRAWAL,
                       payload: response.data
                    })
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}  

export const fetchTradeOrders = () => {
    return (dispatch: Dispatch<Action>) => {
        api.tradeOrders()
           .fetchAll()
           .then(
            (response: any) => {
                   dispatch({
                       type: ActionType.TRADE_ORDERS,
                       payload: response.data
                    })
               }
           )
           .catch(
               err => {
                   console.log(err)
               }
           )
        
    }
}  