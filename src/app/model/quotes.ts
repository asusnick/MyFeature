export class Quotes {
  private _quote: string;
  private _author: string;

  constructor(json: any) {
    this._quote = json.quote;
    this._author = json.author;
  }

  getQuote(): string {
    return this._quote;
  }

  getAuthor(): string {
    return this._author;
  }
}
