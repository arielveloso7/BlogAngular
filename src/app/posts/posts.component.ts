import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  arrPosts: any[];
  post: any;

  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    const allPosts = await this.blogService.getAllPosts()
    this.arrPosts = allPosts.data;

  }

  /*async cargarAutor($event) {
    const id = $event.target.dataset.id;
    this.post = await this.blogService.getAuthor(id);
    //console.log(this.post);
  }*/

  logout() {
    this.blogService.postLogout();
  }

}
