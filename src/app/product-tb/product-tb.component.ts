import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tb',
  templateUrl: './product-tb.component.html',
  styleUrls: ['./product-tb.component.css']
})
export class ProductTbComponent implements OnInit {

  // produtos: Array<any>;
    produtos = [
     { id: 1, description: 'produto um', price: '150.00', valor: '200.00', dataVencimento: '2018-12-26'},
     { id: 2, description: 'segundo produto', price: '100.00', valor: '100.00', dataVencimento: '2018-12-29'},
     { id: 3, description: 'terceiro produto', price: '1200.00', valor: '1500.00', dataVencimento: '2019-12-26'},
     { id: 4, description: 'quarto produto', price: '790.00', valor: '1000.00', dataVencimento: '2019-10-02'},
     { id: 5, description: 'produto cinco', price: '420.00', valor: '500.00', dataVencimento: '2019-08-06'},
     { id: 6, description: 'esse é o sexto produto', price: '600.00', valor: '700.00', dataVencimento: '2019-06-11'},
     { id: 7, description: 'e este é o sétimo', price: '760.00', valor: '920.00', dataVencimento: '2019-08-10'},
     { id: 1, description: 'produto um', price: '150.00', valor: '200.00', dataVencimento: '2018-12-26'},
     { id: 2, description: 'segundo produto', price: '100.00', valor: '100.00', dataVencimento: '2018-12-29'},
     { id: 3, description: 'terceiro produto', price: '1200.00', valor: '1500.00', dataVencimento: '2019-12-26'},
     { id: 4, description: 'quarto produto', price: '790.00', valor: '1000.00', dataVencimento: '2019-10-02'},
     { id: 5, description: 'produto cinco', price: '420.00', valor: '500.00', dataVencimento: '2019-08-06'},
     { id: 6, description: 'esse é o sexto produto', price: '600.00', valor: '700.00', dataVencimento: '2019-06-11'},
     { id: 7, description: 'e este é o sétimo', price: '760.00', valor: '920.00', dataVencimento: '2019-08-10'}
    ];

  constructor(private productService: ProductService) {

  }

  columns = [
    {
      field: 'id',
      name: 'Código',
      styleClass: 'none'
    },
    {
      field: 'description',
      name: 'Descrição',
      styleClass: 'none'
    },
    {
      field: 'price',
      name: 'Custo',
      styleClass: 'col-value'
    },
    {
      field: 'valor',
      name: 'Valor',
      styleClass: 'col-value'
    },
    {
      field: 'dataVencimento',
      name: 'Vencimento',
      styleClass: 'col-date'
    }
  ];

  ngOnInit() {
    this.toList();
  }

  toList() {
    this.productService.toList().subscribe(data => this.produtos = data);
  }

}


