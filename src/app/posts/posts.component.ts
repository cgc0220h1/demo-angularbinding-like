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
      comments: [
        {
          id: 0,
          content: 'Xin chao ban'
        }
      ]
    },
    {
      id: 1,
      title: 'Hello World',
      content: 'Today is a good day',
      comments: [
        {
          id: 1,
          content: 'Xin chao cau'
        },
        {
          id: 2,
          content: 'Xin chao'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
