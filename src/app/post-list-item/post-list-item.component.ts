import { Component, Input, OnInit } from '@angular/core';
import Post from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.less']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  loveIt(isLove) {
    isLove ? this.post.loveIts++ : this.post.loveIts--;
    this.postsService.updatePost(this.post);
  }


  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }
}
