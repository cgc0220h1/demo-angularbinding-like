import {Component, OnInit} from '@angular/core';
import {IPost} from '../ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [
    {
      id: 0,
      title: 'Hello World',
      content: 'Today is a good day',
      comments: [1, 2, 3]
    },
    {
      id: 1,
      title: 'Hello World',
      content: 'Today is a good day',
      comments: [4, 5, 6]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
