import { Component, OnInit } from '@angular/core';

import { TransactionDTO } from '../../dto/TransactionDTO'

import { MdSnackBar } from '@angular/material';

import { DataSource } from '@angular/cdk/collections';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as action from '../../actions/app.action';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transaction: TransactionDTO;

  transactions$: Observable<TransactionDTO[]>;

  loading$: Observable<boolean>;

  loaded$: Observable<boolean>;

  state$: Observable<fromRoot.AppState>;

  constructor(public snackBar: MdSnackBar, private store: Store<fromRoot.AppState>) {
    this.loaded$ = store.select(state => state.transaction.loaded);
    this.loading$ = store.select(state => state.transaction.loading);
    this.transactions$ = store.select(state => state.transaction.transactions);

    this.transaction = new TransactionDTO();
  }

  ngOnInit() {
    this.store.dispatch(new action.LoadTransactions(null));
  }

  createTransaction() {
    this.store.dispatch(new action.LoadTransactions(null));
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'chiudi', {
      duration: 3000,
    });
  }

}
