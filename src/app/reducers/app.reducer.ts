import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as collection from '../actions/app.action';

import { TransactionDTO } from '../dto/TransactionDTO';

export interface TransactionsState {
    loaded: boolean;
    loading: boolean;
    transactions: TransactionDTO[];
}

const initialState: TransactionsState = {
    loaded: false,
    loading: false,
    transactions: [],
};

export function reducer(
    state: TransactionsState = initialState,
    action: collection.Actions
): TransactionsState {
    switch (action.type) {
        case collection.LOAD_TRANSACTIONS: {
            console.log('LOAD_TRANSACTIONS FIRED', state);
            return {
                ...state,
                loading: true,
            };
        }

        case collection.LOAD_TRANSACTIONS_SUCCESS: {
            console.log('LOAD_TRANSACTIONS_SUCCESS FIRED', state);
            return {
                ...state,
                loaded: true,
                loading: false,
                transactions: action.payload,
            };
        }

        case collection.LOAD_TRANSACTIONS_FAIL: {
            console.log('LOAD_TRANSACTIONS_FAILED FIRED', state);
            return {
                ...state,
                loaded: false,
                loading: false,
                transactions: [],
            };
        }

        default: {
            return state;
        }
    }
}
