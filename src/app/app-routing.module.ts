import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CommentsComponent } from './comments/comments.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostsComponent } from './posts/posts.component';

// tutorial: https://angular.io/guide/router-tutorial

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'add', component: AddPostComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
