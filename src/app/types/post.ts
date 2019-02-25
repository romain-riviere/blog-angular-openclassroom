export default class Post {
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: Date;

    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.loveIts = 4;
        this.created_at = new Date();
    }
}