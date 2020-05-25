import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  formulario: FormGroup;

  constructor(private blogService: BlogService) {

    this.formulario = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),

      password: new FormControl('', [
        Validators.required,
      ]),

    });

  }

  ngOnInit(): void {
  }


  async recogerDatos() {
    //console.log(this.formulario.value);
    await this.blogService.postLogin(this.formulario.value);
  }




}
