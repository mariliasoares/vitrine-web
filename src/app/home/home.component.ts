import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'vitrine';
  url =
    'https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro';

  produtos = [];
  page: number = 1;
  test: any = 2;
  livrosList = {};
  livros = [];

  pageEvent: any;
  pageIndex:number = 0;
  pageSize:number = 9;
  lowValue:number = 0;
  highValue:number = 9; 

  responsive = true;
  cols = 1;
  
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    // usar promise, pois get retorna um observable, e não há necessidade de observar a url, tendo em vista que ela não muda
     this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        this.produtos.push(data);
        this.livrosList = { ...this.produtos[0]['products'] };
        console.log(this.livrosList);
        
        for (let livro in this.livrosList) {
          this.livros.push(this.livrosList[livro]);
        }
        console.log(this.livros);
      });
  }

  getLivros(event){
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
    else if(event.pageIndex === this.pageIndex - 1){
        this.lowValue = this.lowValue - this.pageSize;
        this.highValue =  this.highValue - this.pageSize;
      }   
    this.pageIndex = event.pageIndex;
  }
}
