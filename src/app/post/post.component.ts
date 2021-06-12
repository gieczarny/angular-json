import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  @Input('postElement') element;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  removeIt = (id?) => {
    let deletings = document.getElementsByClassName("myDeleting");
    if (id[0] !== undefined && id[0] !== null) {
      console.log("DETE", id[0])
      Array.prototype.forEach.call(deletings, (deleting) => {
        if (deleting.classList.contains(id[0])) {
          deleting.classList.toggle("show");
        }
      })
    } else {
      console.log("DETE")
      Array.prototype.forEach.call(deletings, (deleting) => {
        deleting.classList.toggle("show");
      })
    }
    return true;
  }

  deletePost = (id: number) => {
    if (this.removeIt(id)) {
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/' + (id),
        headers: { 'Content-Type': 'application/json' },
      });
      setTimeout(() => { }, 2000);
      if (this.router.url === '/posts') {
        window.location.reload();
      } else {
        this.router.navigate(['/posts']);
      }
    } else {
      this.router.navigate(['/posts'])
    }
  }
}
