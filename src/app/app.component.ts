import { Component } from '@angular/core';
import {QuoteService} from './quote-service/quote-service';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService, HttpClientModule]
})

export class AppComponent {

}
