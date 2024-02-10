import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl
  }

  submit(): void{
    this.productService.create({
      title: this.form.value.title as string,
      price: 15,
      description: '',
      image: '',
      category: '',
      rating:{
        rate: 42,
        count: 15
      }
    }).subscribe(() => this.modalService.close())
  }
}
