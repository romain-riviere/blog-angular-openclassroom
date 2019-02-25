import { Component, Input, OnInit } from '@angular/core';
import Post from '../types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
