import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  post: any;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idPost);
      const resultado = await this.blogService.getOnePost(id);
      this.post = resultado;
    });
  }

  logout() {
    this.blogService.postLogout();
  }

}
