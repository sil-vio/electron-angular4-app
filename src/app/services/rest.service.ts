import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { TransactionDTO } from '../dto/TransactionDTO'

@Injectable()
export class TransactionService {

    private urlTransaction = 'http://localhost:8080/transaction/';

    private headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers;
        this.headers.append('Accept', 'text/event-stream');
     }

    public insertTransaction(transaction: TransactionDTO): Observable<void> {

        return this.http.post(this.urlTransaction, transaction).map(
            res => {
                console.log('inserted', res)
            },
            err => Observable.throw(err)
        )
    }

    public getTransaction(id: string): Observable<Array<TransactionDTO>> {
        return this.http.get(this.urlTransaction + id).map(
            res => res.json(),
            err => Observable.throw(err)
        )
    }

}
