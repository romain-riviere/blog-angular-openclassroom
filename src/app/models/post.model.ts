export default class Post {
    public loveIts: number;
    public created_at: Date;

    constructor(public title: string, public content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = new Date();
    }
}