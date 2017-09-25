import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { TransactionService } from '../services/rest.service';
import { TransactionDTO } from '../dto/TransactionDTO'
import * as action from '../actions/app.action';

@Injectable()
export class CollectionEffects {


  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(action.LOAD_TRANSACTIONS)
    .switchMap(() =>
      this.transactionService
        .getTransaction('')
        .map((transactions: TransactionDTO[]) => new action.LoadTransactionsSuccess(transactions))
        .catch(error => of(new action.LoadTransactionsFailed(error)))
    );

  constructor(private actions$: Actions, private transactionService: TransactionService) {}
}
