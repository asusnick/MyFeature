import { TestBed, inject } from '@angular/core/testing';
import { QuoteService} from './quote-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('QuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule ],
      providers: [QuoteService]
    });
  });

  it('should be created', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));
});


