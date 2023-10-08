import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistRequest } from 'src/app/classe/regist-request';
import { InscriptionService } from 'src/app/service/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  regist: RegistRequest =  new RegistRequest();
  registmd: RegistRequest =  new RegistRequest();
  constructor(private inscrptionService: InscriptionService){

  }
  ngOnInit(): void {
  }
  errorMessage:string = "";
  successMessage:string = "";


  OnRegistjn():void{
    console.log(this.regist);
    this.inscrptionService.inscription(this.regist).subscribe((res: any) => {
      console.log(res);
      window.localStorage.setItem("token", res.token);
      console.log("inscription effectuee avec succes " + res.token+ " Et le role est "+res.role)
      this.successMessage ="inscription effectuee avec succes";
    }
    );
  }




  OnRegistmd():void{
    console.log(this.registmd);
    this.inscrptionService.inscriptionMed(this.registmd).subscribe((res: any) => {
      console.log(res);
      window.localStorage.setItem("token", res.token);
      console.log("inscription effectuee avec succes " + res.token+ " Et le role est "+res.role)
    });
  }
  
  registerForm = new FormGroup({
    email: new FormControl('',
    [
      Validators.email,
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(30)
    ]),
    password: new FormControl('',
    [
      Validators.required,
      Validators.minLength(11),
      // Validators.pattern(),
    ]),
    firstname: new FormControl('',
    [
      Validators.required,
      Validators.minLength(11),
      // Validators.pattern(),
    ]),
    lastname: new FormControl('',
    [
      Validators.required,
      Validators.minLength(11),
      // Validators.pattern(),
    ]),
    telephone: new FormControl('',
    [
      Validators.required,
      Validators.minLength(11),
      // Validators.pattern(),
    ]),
    datenaiss: new FormControl('',
    [
      Validators.required,
      Validators.minLength(11),
      // Validators.pattern(),
    ]),
    pseudo: new FormControl('',
    [
      Validators.required,
      Validators.minLength(11),
      // Validators.pattern(),
    ]),
  });

}
