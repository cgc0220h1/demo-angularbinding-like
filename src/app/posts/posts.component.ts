import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [
    {
      id: 0,
      title: 'Hello World',
      content: 'Today is a good day'
    },
    {
      id: 1,
      title: 'Hello World',
      content: 'Today is a good day'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
