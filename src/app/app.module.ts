import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {CommentComponent} from './comment/comment.component';
import {PostComponent} from './post/post.component';
import {CommentsComponent} from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
