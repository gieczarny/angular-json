import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  public postId: string;
  public postName: string;
  public postCountry: string;
  public postText: string;



  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.postId);
    axios
      .get('http://localhost:3000/posts/' + this.postId)
      .then(response => {
        this.postName = response.data.name;
        this.postCountry = response.data.country;
        this.postText = response.data.text;
      }
      );
  }

  onEditItem = (form: NgForm) => {

    axios({
      method: 'PUT',
      url: 'http://localhost:3000/posts/' + this.postId,
      headers: { 'Content-Type': 'application/json' },
      data: { "name": form.value.name, "country": form.value.postCountry, "text": form.value.postText }
    });
    this.router.navigate(['/comments', this.postId]);
  }

  onCancel = () => {
    this.router.navigate(['/posts']);
  }
}
