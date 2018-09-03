import { Observable } from "rxjs";
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
// import { FormGroup, FormControl,Validators  } from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Http} from '@angular/http';

@Component({
  selector: 'app-step1-component',
  templateUrl: './step1-component.component.html',
  styleUrls: ['./step1-component.component.css']
})
export class Step1ComponentComponent implements OnInit {
  userAddForm: FormGroup;
  user: any[];
  title="Good Choice! Lest's get started";
  content='You have been redirected to the appropriate juridiction, Aleady have a Account?You can';
  bottomcontent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries';
 
  constructor(private userService:UserService,private formBuilder: FormBuilder,private http:Http)
   { 
      this.buildForm();
   }

  buildForm(): void {
   this.userAddForm = this.formBuilder.group({
     firstName: ['', Validators.required],
     lastName: ['', Validators.required],
     email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
     password:['', Validators.required],
     phone: ['', Validators.required],
     country: ['', Validators.required],
     areacode1:['', Validators.required],
     areacode2:['', Validators.required],
     brand:['', Validators.required],
    
     
   });
 }

  ngOnInit() {
  }

  step1User(): void
  {
      let user = this.userAddForm.value;
      this.userService.registerUser(user)
  // .then(res =>{
  //     });
   }

}
