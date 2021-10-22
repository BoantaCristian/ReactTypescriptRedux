import { Action } from "../actions/index";
import { ActionType } from "../actions/actionTypes"

const initialState =  {
    deposits: [],
    withdrawals: [],
    tradeOrders: []
}

const operationsReducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return {
                ...state,
                deposits: [...action.payload]
            }
        case ActionType.WITHDRAWAL:
            return {
                ...state,
                withdrawals: [...action.payload]
            }
        case ActionType.TRADE_ORDERS:
            return {
                ...state,
                tradeOrders: [...action.payload]
            }
    
        default:
            return state;
    }
}

export default operationsReducer