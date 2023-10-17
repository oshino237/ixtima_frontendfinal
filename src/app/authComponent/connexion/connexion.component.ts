import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {catchError, throwError} from 'rxjs';
import {Authrequest} from 'src/app/classe/authrequest';
import {LoginserviceService} from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  authRequest: Authrequest = new Authrequest();
  errorMessage: string = "";
  errorMessagemed: string = "";
  successMessage: string = "";
  successMessagemed: string = "";
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

  constructor(private authService: LoginserviceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  OnSubmit(): void {
    this.authService.login(this.authRequest)
      .pipe(catchError((error) => {
          if (error.status > 400) {
            this.errorMessage = "erreur email ou mot de passe"
            this.successMessage = ''
          }
          return throwError(() => error);
        })
      )

      .subscribe((res: any) => {

        if (res.statusCodeValue > 400) {
          this.errorMessage = res.body
          this.successMessage = ''
        } else if (res.statusCodeValue >= 200 && res.statusCodeValue <= 300) {
          this.errorMessage = '';
          window.localStorage.setItem("token", res.body.token);
          window.localStorage.setItem("role", res.body.role);
          window.localStorage.setItem("pseudo", res.body.pseudo);
          window.localStorage.setItem("user_id", res.body.id);
          console.log('testing response', res.body.id)
          const nomLinge = window.localStorage.getItem("nom");
          const roleLinge = window.localStorage.getItem("role");
          const tokenLinge = window.localStorage.getItem("token");
          this.successMessage = "connexionn reussie";
          this.router.navigate(['/dashboard /forum'])
          // this.authRequest =  new Authrequest();
          switch (res.body.role) {
            case 'JEUNE':
              this.router.navigate(['/dashboard/forum'])
              break;
            case 'MEDECIN':
              this.router.navigate(['/dashboard/postmd'])
              break;
            case 'ADMIN':
              this.router.navigate(['/dashboard/postad'])
              break;
          }
        }
        if (window.localStorage.getItem("role") == "MEDECIN") {
          window.localStorage.setItem("email", res.body.email)
        }

      })

  }
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
//         return throwError(() => error);
//       })
//     )
//     .subscribe((res: any) => {
//       if(res.statusCodeValue>400){
//         this.errorMessage=res.body
//         this.successMessage=''
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
//     this.inscrptionService.inscriptionMed(this.registmd).pipe(catchError((error) => {
//        return throwError(() => error);
//      })
//    )
//    .subscribe((res: any) => {
//     if(res.statusCodeValue>400){
//       this.errorMessagemed=res.body
//       this.successMessagemed=''
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
