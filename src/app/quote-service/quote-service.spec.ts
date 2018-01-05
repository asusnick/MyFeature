import {TestBed, inject, getTestBed} from '@angular/core/testing';
import { QuoteService} from './quote-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';
import {afterEach} from 'selenium-webdriver/testing';

describe('QuoteService', () => {
  let injector: TestBed;
  let service: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule ],
      providers: [QuoteService]
    });
    injector = getTestBed();
    service = injector.get(QuoteService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));

  afterEach(() => {
    httpMock.verify();
  });
});




