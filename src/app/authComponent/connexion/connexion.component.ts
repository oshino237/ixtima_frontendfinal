import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Authrequest } from 'src/app/classe/authrequest';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  authRequest: Authrequest = new Authrequest();
  constructor(private authService: LoginserviceService, private router: Router) { }


  OnSubmit():void{
    console.log(this.authRequest);
    this.authService.login(this.authRequest)
   
    .subscribe((res: any) => {
      console.log(res);
      window.localStorage.setItem("token", res.token);
      window.localStorage.setItem("role", res.role);
      window.localStorage.setItem("nom",res.nom);
     const nomLinge = window.localStorage.getItem("nom");
     const roleLinge = window.localStorage.getItem("role");
     const tokenLinge = window.localStorage.getItem("token");
      console.log("auth wefewe bfiiuedweda"+ tokenLinge+"  Le role est  :   "+roleLinge+"  Le nom est  :   "+nomLinge )
      this.router.navigate(['/dashboard']) 
      // switch(res.role){
      //   case 'JEUNE':this.router.navigate(['/forum'])
      //   break;
      //   case 'MEDECIN':this.router.navigate(['/postmd'])
      //   break;
      //   case 'ADMIN':this.router.navigate(['/postad'])
      //   break;

      // }
     
    })

  }
  loginForm = new FormGroup({
    email: new FormControl('',
    [
      Validators.email,
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(30)
    ]),
    password: new FormControl('',
    [
      Validators.pattern("(?=.?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^& -]). {8, }$"),
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(30)
    ])
  })
}
