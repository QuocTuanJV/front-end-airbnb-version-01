import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CateRoomService} from '../../cate-room.service';
import {HomeService} from '../../services/home.service';
import {CateHomeService} from '../../services/cate-home.service';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {
  form: FormGroup;
  homeForm: HomeForm = {};
  urlImagePreview: any;
  imageSelected: File;
  cateHomes: CateHome[];
  cateRooms: CateRoom[];
  @ViewChild('fileInput', {static: false}) myInputVariable: ElementRef;
  constructor(private cateRoomService: CateRoomService,
              private cateHomeService: CateHomeService,
              private homeService: HomeService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.getCateHome();
    this.getCateRoom();
  }

  initForm() {
    this.form = this.fb.group({
      name: '',
      price: '',
      address: '',
      description: '',
      numberBath: '',
      numberBad: '',
      cateRoom: '',
      cateHome: ''
    });
  }

  onSubmit() {
    console.log(this.homeForm);
    this.homeService.saveHome(this.getHomeInfoRegistration()).subscribe(data => {
      alert('Home is created successfully!');
    });
    this.clearForm();
  }

  selectImage(event) {
    // this.photoSelected = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any ) => {
        this.urlImagePreview = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.imageSelected = event.target.files[0];
    }
  }
  getHomeInfoRegistration(): FormData {
    this.homeForm = this.form.value;
    const formData = new FormData();
    formData.append('home', JSON.stringify(this.homeForm));
    formData.append('file', this.imageSelected);
    return formData;
  }

  getCateHome(): void {
    this.cateHomeService.getCateHome().subscribe(data => {
      // console.log(data);
      this.cateHomes = data;
    });
  }

  getCateRoom(): void {
    this.cateRoomService.getCate().subscribe(data => {
      // console.log(data);
      this.cateRooms = data;
    });
  }

  clearForm(): void {
    this.form.setValue({
      name: '',
      price: '',
      address: '',
      description: '',
      numberBath: '',
      numberBad: '',
      cateRoom: '',
      cateHome: ''
    });
    this.myInputVariable.nativeElement.value = '';
    this.urlImagePreview = '';
  }


}
