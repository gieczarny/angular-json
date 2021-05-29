import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})

export class MyPostsComponent implements OnInit {
  posts: {}[];
  constructor() {
  }

  ngOnInit(): void {
    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        this.posts = response.data.slice().reverse();
        console.log(this.posts);
      }
      );
  }
}
