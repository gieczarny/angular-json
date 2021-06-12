import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
      axios
        .post('http://localhost:3000/posts', {
          "name": form.value.name, "country": form.value.postCountry, "text": form.value.postText
        });
      this.router.navigate(['/posts']);
    }

}
