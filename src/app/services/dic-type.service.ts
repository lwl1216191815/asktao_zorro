import { Injectable } from '@angular/core';
import { CommonConfig } from '../util/common-config';
import { HttpService } from '../util/http.service';
import { DicType } from '../models/dic-type';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DicTypeService {
  private url: string;
  constructor(
    private commonConfig: CommonConfig,
    private httpService: HttpService
  ) {
    this.url = this.commonConfig.baseUrl + '/dicType';
  }
  /**
   * 添加数据
   * @param entity 需要添加的数据实体
   */
  insertData(entity: DicType) {
    const method = '/insertData';
    const entityJson = JSON.stringify(entity);
    let params = new HttpParams();
    params = params.set('json', entityJson);
    return this.httpService.post(this.url + method, params);
  }
  /**
   * 条件查询
   * @param json 查询参数
   * @param orderBy 排序字段
   * @param pageNum 页码
   * @param pageSize 每一页的记录数量
   */
  getPageDataByCondition(json: string, orderBy: string, pageNum: number, pageSize: number) {
    const method = '/getPageDataByCondition';
    let params = new HttpParams();
    const header = new HttpHeaders();
    params = params.set('json', json).set('orderBy', orderBy);
    params = params.set('pageNum', pageNum.toString()).set('pageSize', pageSize.toString());
    return this.httpService.get(this.url + method, {header, params});
  }
}
