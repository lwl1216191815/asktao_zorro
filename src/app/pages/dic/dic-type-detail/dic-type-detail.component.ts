import { Component, OnInit } from '@angular/core';
import { DicType } from 'src/app/models/dic-type';
import { DicTypeService } from 'src/app/services/dic-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dic-type-detail',
  templateUrl: './dic-type-detail.component.html',
  styleUrls: ['./dic-type-detail.component.css']
})
export class DicTypeDetailComponent implements OnInit {
  /**
   * 字典类型，用于保存表单数据
   */
  entity: DicType = new DicType();
  constructor(
    private dicTypeService: DicTypeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveData() {
    this.dicTypeService.insertData(this.entity).subscribe(
      res => {
        if (res.result) {
          this.router.navigate(['/dic/dic-manage'], {
            skipLocationChange: true
          });
        }
      }
    );
  }
}
