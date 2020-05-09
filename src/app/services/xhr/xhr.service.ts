import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpEventType, HttpErrorResponse} from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class XhrService {
  defaultOptions = {
    url: 'https://api.github.com/',
    method: 'get',
    params: null,
    headers: new HttpHeaders({}),
    responseType: 'json'
  };
  constructor(private http: HttpClient) { }

  public getFinalParams(options: any): any {

    this.defaultOptions.headers = new HttpHeaders({
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'Allow-Origin': '*',
      'Enabled': 'true',
      'Allow-Headers': 'Authorization, Content-Type,Allow-Origin',
      'Platform': 'Web',
    });
    const newRequestOptions: any = (<any> Object).assign({},
      this.defaultOptions,
      options
    );

    let finalRequestOptions: any;
    finalRequestOptions = {};
    finalRequestOptions.method = newRequestOptions.method;

    finalRequestOptions.url = this.constructUrl(newRequestOptions.url,
      finalRequestOptions.method,
      newRequestOptions.params
    );

    finalRequestOptions.body = newRequestOptions.body;
    finalRequestOptions.options = {
      headers: newRequestOptions.headers,
      params: newRequestOptions.params,
      responseType: newRequestOptions.responseType,
      observe: 'response',
      withCredentials: false,
      reportProgress: options.showSpinner === undefined ? true : options.showSpinner
    };
    finalRequestOptions.responseParent = newRequestOptions.responseParent;
    return finalRequestOptions;
  }

  public constructUrl(url: string, method , params: any,): string {

    const finalUrl = this.defaultOptions.url + url;
    const urlWithParams = finalUrl + '?' +
      Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(params[key]);
      }).join('&');
    if (method === 'post' || !params) {
      return urlWithParams;
    } else {
      return urlWithParams;
    }
  }

  call(url): Observable<any> {
      return  this.http.get(this.defaultOptions.url + url)
  }

}
