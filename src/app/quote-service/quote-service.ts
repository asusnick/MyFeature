import { Injectable } from '@angular/core';
import { Quotes} from '../model/quotes';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class QuoteService {
  private uri = 'http://localhost:8080/quote/quote/author';

  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    return this.http.get(this.uri).map((response: Response) => {
      return new Quotes(response);
    });
  }
}
