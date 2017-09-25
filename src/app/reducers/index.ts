import * as fromTransactions from './app.reducer';


export interface AppState {
    transaction: fromTransactions.TransactionsState;
}


export const reducers = {
    transaction: fromTransactions.reducer
};

