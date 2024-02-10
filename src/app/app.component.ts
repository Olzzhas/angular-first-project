import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-course';
  // products: IProduct[] = [];
  loading: boolean = false
  term: string = ""
  // products$: Observable<IProduct[]>

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ){
  }
  ngOnInit(): void {
    this.loading = true

    this.productsService.getAll().subscribe(products => {
      this.loading = false;
    })

    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
  }

}
