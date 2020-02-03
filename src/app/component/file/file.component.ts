import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private homeService: HomeService,
              private fb: FormBuilder) {
    this.createForm();
  }
  form: FormGroup;
  homeForm: HomeForm = {};
  photoSelected: File;
  @ViewChild('fileInput', {static: false}) myInputVariable: ElementRef;
  homes: Home[];
  // private prepareSave(): FormData {
  //   const formData = new FormData();
  //   formData.append('name', this.form.get('name').value);
  //   formData.append('price', this.form.get('price').value);
  //   formData.append('image', this.form.get('image').value);
  //   return input;
  // }
  urlImagePreview: any;


  ngOnInit() {
    this.getAllHome();
  }

  selectImage(event) {
    // this.photoSelected = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any ) => {
        this.urlImagePreview = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
      this.photoSelected = event.target.files[0];
    }
  }

  DataRequest(): FormData {
    this.homeForm = this.form.value;
    const formData = new FormData();
    formData.append('home', JSON.stringify(this.homeForm));
    formData.append('file', this.photoSelected);
    return formData;
  }

  onSubmit() {
    this.homeService.saveHome(this.DataRequest()).subscribe(data => {
      console.log(data);
    });
    this.clearForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: '' ,
      price: ''
    });
  }
  clearForm(): void {
    this.form.setValue({
      name: '',
      price: ''
    });
    this.myInputVariable.nativeElement.value = '';
    this.urlImagePreview = '';
  }

  getAllHome(): void {
    this.homeService.getHomes().subscribe(data => {
      console.log(data);
      this.homes = data;
    });
  }
}
