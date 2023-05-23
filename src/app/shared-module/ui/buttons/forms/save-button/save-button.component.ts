import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OperationEnum } from 'src/app/core/config/data.state.enum';

@Component({
  selector: 'health-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnInit {

  operation!: string;
  @Input() loading$!: BehaviorSubject<boolean>;

  buttonText!: string;
  param!: string;
  operationEnum: typeof OperationEnum = OperationEnum
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if(this.router.url.endsWith('create/0')){ 
      this.operation = this.operationEnum.CREATE
      this.buttonText = 'ACTIONS.ADD'
    }else{
      if(this.router.url.endsWith('list'))
      this.operation = this.operationEnum.UPDATE;
      this.buttonText = 'ACTIONS.UPDATE'
    }

  }
}