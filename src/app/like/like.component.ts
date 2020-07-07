import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../ipost';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input()
  post: IPost;

  constructor() {
  }

  ngOnInit(): void {
  }

  onLikeClick(): void {
    this.post.likes++;
  }
}
