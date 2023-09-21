import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authrequest } from 'src/app/classe/authrequest';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  authRequest: Authrequest = new Authrequest();
  constructor(private authService: LoginserviceService) { }


  OnSubmit():void{
    console.log(this.authRequest);
    this.authService.login(this.authRequest).subscribe((res: any) => {
      console.log(res);
      window.localStorage.setItem("token", res.token);
      console.log("auth avec succes"+ res.token)
    });
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
