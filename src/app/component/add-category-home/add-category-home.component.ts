import { Component, OnInit } from '@angular/core';
import {CateHomeService} from '../../services/cate-home.service';

@Component({
  selector: 'app-add-category-home',
  templateUrl: './add-category-home.component.html',
  styleUrls: ['./add-category-home.component.css']
})
export class AddCategoryHomeComponent implements OnInit {
  cateHomes: CateHome[] = [];
  cateHomeRegisInfo: CateHome = {};
  form: any = {};

  constructor(private cateHomeService: CateHomeService ) { }

  ngOnInit() {
    this.getCateHomes();
  }

  onSubmit() {
    this.createNewCateHome();
  }

  private getCateHomes() {
    this.cateHomeService.getCateHome().subscribe( data => {
      console.log(data);
      this.cateHomes = data;
    });
  }

  private createNewCateHome(): void {
    this.cateHomeRegisInfo = {
      nameCateHome: this.form.nameCateHome
    };
    this.cateHomeService.addNewCateHome(this.cateHomeRegisInfo).subscribe(data => {
      console.log(data);
    });
  }
}
