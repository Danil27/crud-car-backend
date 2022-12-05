export type Constructable<T = any> = new (...args: any[]) => T;
export declare function factory<T>(values: any[], cls: Constructable<T>): T[];
