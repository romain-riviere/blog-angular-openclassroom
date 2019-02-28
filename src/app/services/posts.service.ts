import { Injectable } from '@angular/core';
import Post from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() { }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
            })
    }

    updatePost(post: Post) {
        const postIntexToUpdate = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        )
        this.posts[postIntexToUpdate] = post;
        this.savePosts();
        this.emitPosts();
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post) {
        const postIntexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        )
        this.posts.splice(postIntexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }
}
