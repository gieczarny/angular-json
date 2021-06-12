import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

// tutorial: https://angular.io/guide/router-tutorial

const routes: Routes = [
  { path: 'posts', component: MyPostsComponent },
  { path: 'add', component: AddPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
