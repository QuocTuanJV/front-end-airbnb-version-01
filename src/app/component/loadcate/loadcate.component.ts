import { Component, OnInit } from '@angular/core';
import {CateRoomService} from '../../cate-room.service';

@Component({
  selector: 'app-loadcate',
  templateUrl: './loadcate.component.html',
  styleUrls: ['./loadcate.component.css']
})
export class LoadcateComponent implements OnInit {
  cateRoom: CateRoom[] = [];
  cateRoomRegisInfo: CateRoom;
  form: any = {};
  constructor(private cateRoomService: CateRoomService) { }

  ngOnInit() {
    this.getCateRoomServer();
  }
   getCateRoomServer() {
    this.cateRoomService.getCate().subscribe( data => {
      console.log(data);
      this.cateRoom = data;
    });
   }

  onSubmit() {
    console.log(this.form);
    this.cateRoomRegisInfo = {
      nameCateRoom: this.form.nameCateRoom
    };

    this.cateRoomService.addNewCateRoom(this.cateRoomRegisInfo).subscribe(data => {
      console.log(data);
    });
  }
}
