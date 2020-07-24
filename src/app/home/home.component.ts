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
  secoesList = {};
  secoes = [];
  secao=[];
  secao1Livros=[];
  secao2Livros=[];
  secao3Livros=[];
  secao4Livros=[];
  secao5Livros=[];
  livros = [];
  pageEvent: any;
  pageIndex:number = 0;
  pageSize:number = 9;
  lowValue:number = 0;
  highValue:number = 9; 

  responsive = true;
  cols = 1;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData() {
    // usar promise, pois get retorna um observable, e não há necessidade de observar a url, tendo em vista que ela não muda
    return await Promise.all([
      this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        this.produtos.push(data);
        this.livrosList = { ...this.produtos[0]['products'] };
        this.secoesList = { ...this.produtos[0]['components'] };

        for (let secao in this.secoesList) {
          this.secoes.push(this.secoesList[secao]);
        }

        for (let livro in this.livrosList) {
          this.livros.push(this.livrosList[livro]);
        }
        // console.log(this.livros);
        this.carregaLivrosSecoes();
      })]);
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

  carregaLivrosSecoes() {
    this.secao.push(this.secoes[0]['products']);
    this.secao = this.secao[0];
    for(const secao of this.secao) 
      for(const livro of this.livros) 
        if(secao.id === livro.id) 
          this.secao1Livros.push(livro);

    this.secao=[];
    this.secao.push(this.secoes[1]['products']);
    this.secao = this.secao[0];
    for(const secao of this.secao) 
      for(const livro of this.livros) 
        if(secao.id === livro.id) 
          this.secao2Livros.push(livro);
    
    this.secao=[];
    this.secao.push(this.secoes[2]['products']);
    this.secao = this.secao[0];
    for(const secao of this.secao) 
      for(const livro of this.livros) 
        if(secao.id === livro.id) 
          this.secao3Livros.push(livro);

    this.secao=[];
    this.secao.push(this.secoes[3]['products']);
    this.secao = this.secao[0];
    for(const secao of this.secao) 
      for(const livro of this.livros) 
        if(secao.id === livro.id) 
          this.secao4Livros.push(livro);

    this.secao=[];
    this.secao.push(this.secoes[4]['products']);
    this.secao = this.secao[0];
    for(const secao of this.secao) 
      for(const livro of this.livros) 
        if(secao.id === livro.id) 
          this.secao5Livros.push(livro);
  }

}
