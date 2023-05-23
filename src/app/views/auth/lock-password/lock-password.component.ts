import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lock-password',
  templateUrl: './lock-password.component.html',
  styleUrls: ['./lock-password.component.scss']
})
export class LockPasswordComponent implements OnInit, OnDestroy{


// Login Form
resetPasswordForm!: FormGroup;
submitted = false;
passwordField!: boolean;
confirmField!: boolean;
error = '';
returnUrl!: string;
password!:string
cpassword!:string;
valorPass$!:Observable<string>;
token: string= '';
tokenList!:string[]
// set the current year
year: number = new Date().getFullYear();

constructor(
  private fb: FormBuilder, 
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private storeService: Store) {
    
   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

ngOnInit(): void {
  /**
   * Form Validatyion
   */

  this.activatedRoute.queryParams.subscribe(data => this.token=data['auth'])
  console.log(this.token)
  
  this.initForm();
   

   // Password Validation set
   var myInput = document.getElementById("password-input") as HTMLInputElement;
   var letter = document.getElementById("pass-lower");
   var capital = document.getElementById("pass-upper");
   var number = document.getElementById("pass-number");
   var length = document.getElementById("pass-length");

   // When the user clicks on the password field, show the message box
   myInput.onfocus = function () {
     let input = document.getElementById("password-contain") as HTMLElement;
     input.style.display = "block"
   };

   // When the user clicks outside of the password field, hide the password-contain box
   myInput.onblur = function () {
     let input = document.getElementById("password-contain") as HTMLElement;
     input.style.display = "none"
   };

   // When the user starts to type something inside the password field
   myInput.onkeyup = function () {
     // Validate lowercase letters
     var lowerCaseLetters = /[a-z]/g;
     if (myInput.value.match(lowerCaseLetters)) {
         letter?.classList.remove("invalid");
         letter?.classList.add("valid");
     } else {
         letter?.classList.remove("valid");
         letter?.classList.add("invalid");
     }

     // Validate capital letters
     var upperCaseLetters = /[A-Z]/g;
     if (myInput.value.match(upperCaseLetters)) {
         capital?.classList.remove("invalid");
         capital?.classList.add("valid");
     } else {
         capital?.classList.remove("valid");
         capital?.classList.add("invalid");
     }

     // Validate numbers
     var numbers = /[0-9]/g;
     if (myInput.value.match(numbers)) {
         number?.classList.remove("invalid");
         number?.classList.add("valid");
     } else {
         number?.classList.remove("valid");
         number?.classList.add("invalid");
     }

     // Validate length
     if (myInput.value.length >= 8) {
         length?.classList.remove("invalid");
         length?.classList.add("valid");
     } else {
         length?.classList.remove("valid");
         length?.classList.add("invalid");
     }
   };

}

//Fonction for initiation of form
initForm():void{
  this.resetPasswordForm = this.fb.group({
    password: ['', [Validators.required]],
  });
}

// convenience getter for easy access to form fields
get f() { return this.resetPasswordForm.controls; }

/**
 * Form submit
 * 
 * 
 */


//Debut des modifications
//reation de la fonction pour la lecture du mails
receiveMail(email:string):void{
  
}

 onSubmit():void {
  this.submitted = true;
  if(this.resetPasswordForm.invalid) return;
  let v=confirm("Voulez-vous vraiment enregistrer");
  if(v==true)
  console.log({passwordDto: {token: this.token, password: this.resetPasswordForm.value.cpassword}})
}

/**
* Password Hide/Show
*/
 togglepasswordField() {
   this.passwordField = !this.passwordField;
 }

 /**
* Password Hide/Show
*/
 toggleconfirmField() {
   this.confirmField = !this.confirmField;
 }

}
