import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesComponent } from './quotes.component';
import {QuoteService} from '../quote-service/quote-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ QuotesComponent ],
      providers: [QuoteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the feature', () => {
    expect(component).toBeTruthy();
  });
});
