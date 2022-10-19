export class History {
    constructor(
        private id: string,
        private idPost: string,
        private title: string,
        private body: string,
        private creationDate?: string,
        private updateDate?: string,
    ) { }

    public getId(): string {
        return this.id;
    }

    public getIdPost(): string{
        return this.idPost
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