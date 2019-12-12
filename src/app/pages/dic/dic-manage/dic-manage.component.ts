import { Component, OnInit } from '@angular/core';
import { DicTypeService } from 'src/app/services/dic-type.service';
import { Router } from '@angular/router';
import { DicType } from 'src/app/models/dic-type';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dic-manage',
  templateUrl: './dic-manage.component.html',
  styleUrls: ['./dic-manage.component.css']
})
export class DicManageComponent implements OnInit {
  /**
   * 表格查询结果
   */
  typeResult: Array<{id: string, name: string, code: string, remark: string, checked: boolean}> = [];
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
    private route: Router,
    private message: NzMessageService
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
  /**
   * 查询数据
   */
  getDataByCondition() {
    this.typeLoading = true;
    this.dicTypeService.getPageDataByCondition('', '', this.typePageNum, this.typePageSize).subscribe(
      res => {
        this.typeLoading = false;
        this.typeTotal = res.result.total;
        this.typeResult = res.result.list;
        this.checkAll(false);
      }
    );
  }
  /**
   * 全选回调事件
   * @param value true或者false
   */
  checkAll(value: boolean) {
    this.typeResult.forEach(item => {
      item.checked = value;
    });
  }
  /**
   * 获取选中记录的ID
   * @returns 返回一个记录ID的数组
   */
  getSelectedIds() {
    const selectedIds = [];
    this.typeResult.forEach(item => {
      if (item.checked) {
        selectedIds.push(item.id);
      }
    });
    return selectedIds;
  }
  /**
   * 删除数据
   */
  deleteData() {
    const ids = this.getSelectedIds();
    if (ids.length === 0) {
      this.message.create('warning', '请选中一条记录操作');
      return;
    }
    this.dicTypeService.deleteDataByIds(ids.join(',')).subscribe(
      response => {
        const result = response.result;
        if (result !== 0) {
          this.message.info('删除成功');
          this.query();
        }
      }
    );
  }
}
