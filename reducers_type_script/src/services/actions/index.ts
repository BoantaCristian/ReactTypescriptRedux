import { ActionType } from "./actionTypes";

interface Deposit {
    type: ActionType.DEPOSIT
    payload: object[]
}

interface Withdrawal {
    type: ActionType.WITHDRAWAL
    payload: object[]
}

interface TradeOrder {
    type: ActionType.TRADE_ORDERS
    payload: object[]
}

export type Action = Deposit | Withdrawal | TradeOrder