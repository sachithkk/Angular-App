import { Component, OnInit } from '@angular/core';
import { FormGroup , FormsModule , FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  productForm : FormGroup;

  constructor(private FB: FormBuilder) { }


  ngOnInit() {
    this.createForm();
  }

  public createForm(){
     this.productForm = this.FB.group({
      category: ['']      
    })
  }

  showData(){
    console.log(this.productForm.value);
  }

}
