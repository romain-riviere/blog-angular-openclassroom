import { Component, Input, OnInit } from '@angular/core';
import Post from '../types/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.less']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.post.loveIts++;
  }

  dontLoveIt() {
    this.post.loveIts--;
  }

}
