export class Post {
    constructor(
        private id: string,
        private title: string,
        private body: string,
        private creationDate?: string,
        private updateDate?: string,
    ) { }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getBody(): string {
        return this.body;
    }

    public getCreationDate(): string | undefined {
        return this.creationDate;
    }

    public getUpdateDate(): string | undefined {
        return this.updateDate;
    }

}