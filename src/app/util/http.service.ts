import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  /**
   * 一般用于删除数据
   * @param url 请求路径
   * @param data 参数
   */
  delete(url: string, data: any = {}): Observable<any> {
    return this.http.delete(url, data).pipe(
      map(restRestponse => {
        return this.callBack(restRestponse);
      }),
      catchError(this.handlerError(url, []))
    );
  }
  /**
   * 一般用于更新数据
   * @param url 请求路径
   * @param data 请求参数
   * @param httpOption 其余信息
   */
  put(url: string, data: any = {}, httpOption: any = {}): Observable<any> {
    return this.http.put(url, data, httpOption).pipe(
      map(restRestponse => {
        return this.callBack(restRestponse);
      }),
      catchError(this.handlerError(url, []))
    );
  }
  /**
   * 一般用于保存数据
   * @param url 请求路径
   * @param data 参数
   * @param httpOption 其余信息
   */
  post(url: string, data: any = {}, httpOption: any = {}): Observable<any> {
    return this.http.post<any>(url, data, httpOption).pipe(
      map(restRestponse => {
        return this.callBack(restRestponse);
      }),
      catchError(this.handlerError(url, []))
    );
  }
  /**
   * 一般用于查询数据
   * @param url 请求路径
   * @param data 参数 {httpHeader,httpParam}
   */
  get(url: string, data: {}): Observable<any> {
    return this.http.get<any>(url, data).pipe(
      map(restRestponse => {
        return this.callBack(restRestponse);
      }),
      catchError(this.handlerError(url, []))
    );
  }
  /**
   * 回调函数，不过没啥作用
   * @param restResponse 返回值
   * @param errorFn 错误函数
   */
  callBack(restResponse, errorFn?: any) {
    if (!restResponse) {
      console.log('傻逼！没有返回值');
    }
    return restResponse;
  }
  /**
   * 错误处理
   * @param operation 操作？
   * @param result 结果？
   */
  handlerError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
      // tslint:disable-next-line: semicolon
    }
  }
}
