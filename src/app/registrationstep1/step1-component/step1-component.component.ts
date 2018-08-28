import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
@Component({
  selector: 'app-step1-component',
  templateUrl: './step1-component.component.html',
  styleUrls: ['./step1-component.component.css']
})
export class Step1ComponentComponent implements OnInit {
  formheader = {
  title:"Good Choice! Lest's get started",
  content:'You have been redirected to the appropriate juridiction, Aleady have a Account?You can',
  link:'#',
  bottomcontent:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
 
  }

  account_validation_messages = {
'firstName': [
  { type: 'required', message: 'FirstName  is required' },
 
],
'lastName': [
  { type: 'required', message: 'LastName  is required' },
],
'phone': [
  { type: 'required', message: 'Phone  is required' },
  { type: 'pattern', message: 'Only digits allowed' },
],
'email': [
  { type: 'required', message: 'Email is required' },
  { type: 'pattern', message: 'Enter a valid email' }
],

'password': [
  { type: 'required', message: 'Password is required' },
  { type: 'pattern', message: 'Password must be at least 8 characters long with a capital letter' }
],
'areacode1': [
  { type: 'required', message: 'Areacode 1 is required' },
 
],
'areacode2': [
  { type: 'required', message: 'Areacode 2  is required' },
 
]
}


  step1Form = new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z]).{8,}$/)]),
      phone:new FormControl('',[Validators.required, Validators.minLength(10),
      Validators.maxLength(15),
      Validators.pattern('[0-9]+') ]), 
      country:new  FormControl(''),
      areacode1: new FormControl('',Validators.required),
      areacode2: new FormControl('',Validators.required),


  });

  constructor() { }

  ngOnInit() {
  }

}
