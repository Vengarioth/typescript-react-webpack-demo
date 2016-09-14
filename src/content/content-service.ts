declare type OnLoad = (Error, string) => void;

class ContentService {

  _baseUrl: string;

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  load(path: string, callback: OnLoad): void {
    callback(new Error('This is a mock'), undefined);
  }

}