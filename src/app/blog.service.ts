import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url1: string;
  url2: string;
  isLogged: boolean;


  constructor(
    private httpClient: HttpClient,
    private router: Router) {
    this.url1 = 'https://cors-anywhere.herokuapp.com/https://fakeblog.bel4.com/api/posts';
    this.url2 = 'https://reqres.in/api/login';
  }

  getAllPosts() {
    return this.httpClient.get(this.url1).toPromise();
  }

  getOnePost(pId) {
    return this.httpClient.get(`https://fakeblog.bel4.com/api/posts/${pId}/show`).toPromise();
  }

  /*getAuthor(pId) {
    return this.httpClient.get(`https://fakeblog.bel4.com/api/authors/${pId}/show`).toPromise();
  }*/

  postLogin(objeto) {
    //console.log(objeto);
    if (objeto) {

      const logueado = 'activo';
      localStorage.setItem('logueado', logueado);
      this.isLogged = true;

      this.router.navigate(['/posts']);

      return this.httpClient.post(this.url2, objeto).toPromise();
    }
  }

  postLogout() {
    this.isLogged = false;
  }

}
