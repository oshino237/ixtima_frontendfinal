import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
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
  constructor(
    private router:Router,
    private inscrptionService: InscriptionService){

  }
  ngOnInit(): void {
  }
  errorMessage:string = "";
  errorMessagemed:string = "";
  successMessage:string = "";
  successMessagemed:string = "";


  OnRegistjn():void{
    this.inscrptionService.inscription(this.regist)
    .pipe(catchError((error) => {
       console.log('LE CODE STATUS EST : ', error.status)
        return throwError(() => error);
      }) 
    )
    .subscribe((res: any) => {
      if(res.statusCodeValue>400){
        this.errorMessage=res.body
        this.successMessage=''
        console.log('testung error ',res.statusCodeValue )
      }
      else if(res.statusCodeValue>=200 &&  res.statusCodeValue<=300){
       this. errorMessage = '';
        window.localStorage.setItem("token", res.token);    
        this.successMessage ="inscription effectuee avec succes";
        this.regist =  new RegistRequest();
        this.router.navigate(["/connexion"])
      }
    }
    );
  }
  OnRegistmd():void{
    console.log(this.registmd);
    this.inscrptionService.inscriptionMed(this.registmd).pipe(catchError((error) => {
      console.log('testung error ', error)
       return throwError(() => error);
     }) 
   )
   .subscribe((res: any) => {
    if(res.statusCodeValue>400){
      this.errorMessagemed=res.body
      this.successMessagemed=''
      console.log('testung error ',res.statusCodeValue )
    }
    else if(res.statusCodeValue>=200 &&  res.statusCodeValue<=300){
     this. errorMessagemed = '';
      window.localStorage.setItem("token", res.token);
      this.successMessagemed ="veuillez patienter...vos document sont en cours de validation";
      this.registmd =  new RegistRequest();
      // this.router.navigate(["/connexion"])
    }
  }
  );
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
