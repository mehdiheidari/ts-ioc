export enum Lifetime {
    Container,
    Request,
}

export type Constructor<T = any> = new (...args: any[]) => T;
export type Token<T = any> = string | Symbol | number | Constructor<T>;

export type Provider = {
    token: Token;
    lifetime?: Lifetime;
} & ({
    useClass: Constructor;
} | {
    useValue: any;
} | {
    useFactory: (...args: any[]) => any,
    inject?: Token[],
});

export interface Destroyable {
    destroy(): void;
}
