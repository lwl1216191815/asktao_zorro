import { Component, OnInit } from '@angular/core';
import { DicTypeService } from 'src/app/services/dic-type.service';
import { Router } from '@angular/router';
import { DicType } from 'src/app/models/dic-type';

@Component({
  selector: 'app-dic-manage',
  templateUrl: './dic-manage.component.html',
  styleUrls: ['./dic-manage.component.css']
})
export class DicManageComponent implements OnInit {
  /**
   * 表格查询结果
   */
  typeResult: Array<DicType> = [];
  /**
   * 字典类型加载
   */
  typeLoading = true;
  /**
   * 字典类型的记录数量
   */
  typeTotal = 0;
  /**
   * 字典类型页码
   */
  typePageNum = 1;
  /**
   * 字典类型每页的记录数量，默认为10
   */
  typePageSize = 10;
  constructor(
    private dicTypeService: DicTypeService,
    private route: Router
  ) { }

  ngOnInit() {
    this.query();
  }
  /**
   * 添加字典类型，进入字典类型详细页面
   */
  addDicType() {
    this.route.navigate(['/dic/dic-type-detail'], {
      skipLocationChange: true,
    });
  }

  query() {
    this.getDataByCondition();
  }
  getDataByCondition() {
    this.typeLoading = true;
    this.dicTypeService.getPageDataByCondition('', '', this.typePageNum, this.typePageSize).subscribe(
      res => {
        this.typeLoading = false;
        this.typeTotal = res.result.total;
        this.typeResult = res.result.list;
      }
    );
  }
}
