import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/rest.service'

import { TransactionDTO } from '../../dto/TransactionDTO'

import {MdSnackBar} from '@angular/material';

import {DataSource} from '@angular/cdk/collections';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
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
  transactions: TransactionDTO[];

  dataSource: ExampleDataSource | null;
  
  displayedColumns = ['id', 'value', 'date'];  

  constructor(private transactionService: TransactionService, public snackBar: MdSnackBar) { 
    this.dataSource = new ExampleDataSource(this.transactionService);
    this.transaction = new TransactionDTO;
    this.transactions = new Array<TransactionDTO>();
  }

  ngOnInit() {
    let eventSource = new EventSource('http://localhost:8080/events/');
    eventSource.addEventListener('message', (event) => {
      console.log("<<<<<<<", event)
      this.openSnackBar(event.data)
      this.dataSource = new ExampleDataSource(this.transactionService);
      
    });
    

  }

  createTransaction() {
    this.transactionService.insertTransaction(this.transaction).subscribe(
      res => {
          this.getTransactionList();
      }
    )


  }


  getTransactionList() {
    this.transactionService.getTransaction("").subscribe(
      res => {
          this.transactions = res;
      },
      err => {
          console.log("errore", err);
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "chiudi", {
      duration: 3000,
    });
  }

}


export class ExampleDataSource extends DataSource<TransactionDTO> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private transactionService: TransactionService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<TransactionDTO[]> {
    return this.transactionService.getTransaction("");
  }

  disconnect() {}
}

interface Callback { (data: any): void; }

declare class EventSource {
    onmessage: Callback;
    addEventListener(event: string, cb: Callback): void;
    constructor(name: string);
}