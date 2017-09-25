import { Action } from '@ngrx/store';
import { TransactionDTO } from '../dto/TransactionDTO';

export const ADD_TRANSACTION = '[Transaction] Add Transaction';
export const ADD_TRANSACTION_SUCCESS = '[Transaction] Add Transaction Success';
export const ADD_TRANSACTION_FAILED = '[Transaction] Add Transaction Failed';

export const LOAD_TRANSACTIONS = '[Transactions] Load Transaction';
export const LOAD_TRANSACTIONS_SUCCESS = '[Transactions] Load Transaction Success';
export const LOAD_TRANSACTIONS_FAIL = '[Transactions] Load Transaction Fail';


export class AddTransaction implements Action {
    readonly type = ADD_TRANSACTION;

    constructor(public payload: TransactionDTO) { }
}

export class AddTransactionSuccess implements Action {
    readonly type = ADD_TRANSACTION_SUCCESS;

    constructor(public payload: TransactionDTO) { }
}

export class AddTransactionFailed implements Action {
    readonly type = ADD_TRANSACTION_FAILED;

    constructor(public payload: TransactionDTO) { }
}

export class LoadTransactions implements Action {
    readonly type = LOAD_TRANSACTIONS;

    constructor(public payload: TransactionDTO) { }
}

export class LoadTransactionsSuccess implements Action {
    readonly type = LOAD_TRANSACTIONS_SUCCESS;

    constructor(public payload: TransactionDTO[]) { }
}

export class LoadTransactionsFailed implements Action {
    readonly type = LOAD_TRANSACTIONS_FAIL;

    constructor(public payload: any) { }
}

export type Actions = AddTransaction | AddTransactionSuccess | AddTransactionFailed |
                        LoadTransactions | LoadTransactionsFailed | LoadTransactionsSuccess;
