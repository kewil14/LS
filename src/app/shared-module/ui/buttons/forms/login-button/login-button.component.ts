import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'health-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  buttonText!: string;
  @Input() loading$!: BehaviorSubject<boolean>

  constructor(
    private router: Router
  ) { }

  ngOnInit() {


    if (this.router.url.startsWith("/auth/login")) {
      this.buttonText='LABELS.LOGIN';
    };
    if (this.router.url.startsWith("/auth/reset")){
      this.buttonText='LABELS.SEND_RESET_LINK';
    };
    if(this.router.url.startsWith("/auth/lock")){
      this.buttonText='ACTIONS.RESET'
    }
  }

}
