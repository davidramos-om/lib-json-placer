import { Base } from "src/base";
import { NewPost, Post } from "./types";

const resource = 'posts';

export class Posts extends Base {

    constructor(apiKey: string) {
        super({ apiKey });
    }

    GetById(id: number): Promise<Post> {
        return this.Invoke(`${resource}/${id}`);
    }

    async GetAll(): Promise<Post[]> {
        return await this.Invoke(`${resource}`);
    }

    async Create(post: NewPost): Promise<Post> {
        return await this.Invoke(`${resource}`, {
            method: 'POST',
            body: JSON.stringify(post)
        });
    }

    async Update(id: number, post: Post): Promise<Post> {
        return await this.Invoke(`${resource}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post)
        });
    }

    async Delete(id: number): Promise<Post> {
        return await this.Invoke(`${resource}/${id}`, {
            method: 'DELETE'
        });
    }
}