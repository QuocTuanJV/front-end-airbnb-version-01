import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  form: FormGroup;
  homeForm: HomeForm = {};
  photoSelected: File;
  @ViewChild('fileInput', {static: false}) myInputVariable: ElementRef;

  constructor(private homeService: HomeService,
              private fb: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {
  }

  selectImage(event) {
    this.photoSelected = event.target.files[0];
  }

  uploadImage() {

  }

  onSubmit() {
    this.homeForm = this.form.value;
    const formData = new FormData();
    formData.append('home', JSON.stringify(this.homeForm));
    formData.append('file', this.photoSelected);
    console.log(formData);
    console.log(this.homeForm);
    this.homeService.saveHome(formData).subscribe(data => {
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
  // private prepareSave(): FormData {
  //   const formData = new FormData();
  //   formData.append('name', this.form.get('name').value);
  //   formData.append('price', this.form.get('price').value);
  //   formData.append('image', this.form.get('image').value);
  //   return input;
  // }
  clearForm(): void {
    this.form.setValue({
      name: '',
      price: ''
    });
    this.myInputVariable.nativeElement.value = '';
  }
}
