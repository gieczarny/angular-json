import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  post: {} = { "name": "Name and surname is loading...", "country":"Country is loading", "biography": "Biography is loading..." };
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    axios
      .get('http://localhost:3000/posts')
      .then(response => {
        if (this.router.url === '/comments') {
          this.post = response.data.slice().reverse()[0];

        } else {
          this.id = Number(this.route.snapshot.paramMap.get('id'));
          this.post = response.data.slice()[this.id - 1];
        }
      }
      );
  }
  everythingPosts = () => {
    this.router.navigate(['/']);
  }
}
