import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
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

  ngOnInit(): void {
  }
  errorMessage:string = "";
  errorMessagemed:string = "";
  successMessage:string = "";
  successMessagemed:string = "";

  OnSubmit():void{
    console.log(this.authRequest);
    this.authService.login(this.authRequest)
    .pipe(catchError((error) => {
      console.log('testing error  CODDEEE', error.status)
      if(error.status>400){
        this.errorMessage = "erreur email ou mot de passe"
        this.successMessage=''
      //  console.log('erreur email ou mot de passe',res.statusCodeValue )
      }
       return throwError(() => error);
     }) 
   )
   
    .subscribe((res: any) => {
      console.log('laaaaaaa',res.body.role);

      if(res.statusCodeValue>400){
        this.errorMessage = res.body
        this.successMessage=''
        console.log('erreur email ou mot de passe',res.statusCodeValue )
      }
      else if(res.statusCodeValue>=200 &&  res.statusCodeValue<=300){
       this. errorMessage = '';
       window.localStorage.setItem("token", res.body.token);
       window.localStorage.setItem("role", res.body.role);
       window.localStorage.setItem("pseudo",res.body.pseudo);
      const nomLinge = window.localStorage.getItem("nom");
      const roleLinge = window.localStorage.getItem("role");
      const tokenLinge = window.localStorage.getItem("token");    
        this.successMessage ="connexionn reussie";
        console.log('le rresponse est ',res);
        this.router.navigate(['/dashboard /forum'])
        // this.authRequest =  new Authrequest();
        // console.log("auth wefewe bfiiuedweda", res )
      switch(res.body.role){
        case 'JEUNE':this.router.navigate(['/dashboard/forum'])
        break;
        case 'MEDECIN':this.router.navigate(['/dashboard/postmd'])
        break;
        case 'ADMIN':this.router.navigate(['/dashboard/postad'])
        break;
      }
    }
      if(window.localStorage.getItem("role") == "MEDECIN"){
        window.localStorage.setItem("email", res.body.email)
        console.log("LE MEDECIN EST  ",window.localStorage.getItem("email") )
      }
     
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
// export class InscriptionComponent implements OnInit {
//   regist: RegistRequest =  new RegistRequest();
//   registmd: RegistRequest =  new RegistRequest();
//   constructor(
//     private router:Router,
//     private inscrptionService: InscriptionService){

//   }


//   OnRegistjn():void{
//     this.inscrptionService.inscription(this.regist)
//     .pipe(catchError((error) => {
//        console.log('testing error ', error)
//         return throwError(() => error);
//       }) 
//     )
//     .subscribe((res: any) => {
//       if(res.statusCodeValue>400){
//         this.errorMessage=res.body
//         this.successMessage=''
//         console.log('testung error ',res.statusCodeValue )
//       }
//       else if(res.statusCodeValue>=200 &&  res.statusCodeValue<=300){
//        this. errorMessage = '';
//         window.localStorage.setItem("token", res.token);    
//         this.successMessage ="inscription effectuee avec succes";
//         this.regist =  new RegistRequest();
//         this.router.navigate(["/connexion"])
//       }
//     }
//     );
//   }
//   OnRegistmd():void{
//     console.log(this.registmd);
//     this.inscrptionService.inscriptionMed(this.registmd).pipe(catchError((error) => {
//       console.log('testung error ', error)
//        return throwError(() => error);
//      }) 
//    )
//    .subscribe((res: any) => {
//     if(res.statusCodeValue>400){
//       this.errorMessagemed=res.body
//       this.successMessagemed=''
//       console.log('testung error ',res.statusCodeValue )
//     }
//     else if(res.statusCodeValue>=200 &&  res.statusCodeValue<=300){
//      this. errorMessagemed = '';
//       window.localStorage.setItem("token", res.token);
//       this.successMessagemed ="veuillez patienter...vos document sont en cours de validation";
//       this.registmd =  new RegistRequest();
//       // this.router.navigate(["/connexion"])
//     }
//   }
//   );
//   }
  
//   registerForm = new FormGroup({
//     email: new FormControl('',
//     [
//       Validators.email,
//       Validators.required,
//       Validators.minLength(11),
//       Validators.maxLength(30)
//     ]),
//     password: new FormControl('',
//     [
//       Validators.required,
//       Validators.minLength(11),
//       // Validators.pattern(),
//     ]),
//     firstname: new FormControl('',
//     [
//       Validators.required,
//       Validators.minLength(11),
//       // Validators.pattern(),
//     ]),
//     lastname: new FormControl('',
//     [
//       Validators.required,
//       Validators.minLength(11),
//       // Validators.pattern(),
//     ]),
//     telephone: new FormControl('',
//     [
//       Validators.required,
//       Validators.minLength(11),
//       // Validators.pattern(),
//     ]),
//     datenaiss: new FormControl('',
//     [
//       Validators.required,
//       Validators.minLength(11),
//       // Validators.pattern(),
//     ]),
//     pseudo: new FormControl('',
//     [
//       Validators.required,
//       Validators.minLength(11),
//       // Validators.pattern(),
//     ]),
//   });

// }