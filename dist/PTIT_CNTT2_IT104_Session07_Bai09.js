"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    posts = [];
    followers = [];
    constructor(id) {
        this.id = id;
    }
    createPost(content) {
        let postId = this.posts.length + 1;
        let newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
    }
    comment(post, commentContent) {
        let commentId = post.comments.length + 1;
        let newComment = new Comment(commentId, this.id, commentContent);
        post.addComment(newComment);
    }
    follow(user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed() {
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                console.log(`User ${user.id} đăng: ${post.content}`);
            });
        });
    }
}
class Post {
    id;
    likes = [];
    comments = [];
    userId;
    content;
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comment {
    id;
    userId;
    content;
    replies = [];
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
let comment1 = new Comment(1, 2, "Code typescript!");
let post1 = new Post(1, 1, "Code HTML!");
let post2 = new Post(2, 2, "Code TypeScript");
let userA = new User(1);
userA.posts.push(post1);
let userB = new User(2);
userB.posts.push(post2);
userA.follow(userB);
userB.createPost("Post mới của UserB");
userA.likePost(post2);
userA.comment(post1, "Mình thích game này!");
userB.comment(post2, "Cảm ơn bạn đã like!");
userA.viewFeed();
console.log("Posts của UserA", userA.posts);
console.log("Posts của UserB", userB.posts);
