import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../quote-service/quote-service';
import {Observable} from 'rxjs/Observable';
import {Quotes} from '../model/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  quotes: Quotes;

  constructor(private _quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuote();
  }

  onClick(): void {
    this.getQuote();
  }

  getQuote() {
    this._quoteService.getQuote().subscribe(quotes => {
      this.quotes = quotes;
    });
  }
}
