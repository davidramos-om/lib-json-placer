import fetch from 'isomorphic-unfetch';

type Config = {
    apiKey: string;
    baseUrl?: string;
}

export abstract class Base {

    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com';
    }

    protected async Invoke<T>(endPoint: string, options?: RequestInit): Promise<T> {

        const url = `${this.baseUrl}/${endPoint}`;

        // const headers = new Headers();
        // headers.append('content-type', 'application/json');
        // headers.append('api-key', this.apiKey);

        const headers = {
            'content-type': 'application/json',
            'api-key': this.apiKey
        };

        const config = {
            ...options,
            headers
        };

        const res = await fetch(url, config);
        if (res.ok)
            return res.json();

        throw new Error(res.statusText);
    }
}