import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataStateEnum, OperationEnum } from 'src/app/core/config/data.state.enum';
import { selectCategorieState } from 'src/app/core/core.state';
import { addCategorie, deleteCategorie, dellCategorie, erreurCategories, setCategorie } from 'src/app/core/ngrx/categorie/categorie.actions';
import { CategorieState } from 'src/app/core/ngrx/categorie/categorie.state';
import { Categorie } from 'src/app/core/shared/models/categorie.modal';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  subscriptions: Array<Subscription> = [];
  dtOptions: any = {};
  categories$!: Observable<CategorieState>;
  operationCategorie$ = new BehaviorSubject<{operation: string, categorie: Categorie}>({operation: OperationEnum.CREATE, categorie: {}});
  loadingOperation$ = new BehaviorSubject<boolean>(false);
  categories: Array<Categorie> = [];
  currentCategorie!: Categorie;
  dataState: typeof DataStateEnum = DataStateEnum;
  messages$ = new BehaviorSubject<{type: any, title: any, messages: Array<any>, isTitle: boolean, dismissible: boolean}>({type: 'success', title: 'any', messages: [], isTitle: false, dismissible: true});
  operationEnum: typeof OperationEnum = OperationEnum;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private store: Store,
    private actionService: Actions
  ) { }
  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe())}

  ngOnInit(): void {
    this.dtOptions = this.localStorageService.dbOptions();
    this.categories$ = this.store.select(selectCategorieState).pipe();
    this.loadCategories();
    this.onCreateCategorie();

    this.onActionCategories();
  }

  private onActionCategories(): void {
    this.subscriptions.push(
      this.actionService.pipe(
        ofType(erreurCategories)
      ).subscribe((data) => {
        this.loadingOperation$.next(false);
        this.messages$.next({type: 'danger', title: 'Erreur', messages: data.messages, isTitle: true, dismissible: true});
      }),
      this.actionService.pipe(
        ofType(setCategorie)
      ).subscribe(() => {
        this.onCreateCategorie();
        this.loadingOperation$.next(false);
        this.loadCategories();
      }),
      this.actionService.pipe(ofType(addCategorie)).subscribe(() => {
        this.onCreateCategorie();
        this.loadingOperation$.next(false);
        this.loadCategories();
      }),
      this.actionService.pipe(ofType(dellCategorie)).subscribe(() => {
        this.onCreateCategorie();
        this.loadCategories();
      })
    )
  }

  onCreateCategorie(): void {
    this.loadingOperation$.next(false);
    this.operationCategorie$.next({operation: OperationEnum.CREATE, categorie: {}});
  }

  onEditCategorie(categorie: Categorie): void {
    this.loadingOperation$.next(false);
    this.operationCategorie$.next({operation: OperationEnum.UPDATE, categorie: categorie});
  }

  loadCategories(): void {
    this.categories = [];
    setTimeout(() => {
      this.store.select(selectCategorieState).pipe().subscribe( (data) => {
        this.categories = data.categories;
      }
    )
    }, 1000);
  }
  delleteCategorie(idCategorie: any): void {
    this.store.dispatch(deleteCategorie({idCategorie: idCategorie}));
  }
}
