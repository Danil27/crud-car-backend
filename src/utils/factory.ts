export type Constructable<T = any> = new (...args: any[]) => T;

export function factory<T>(values: any[], cls: Constructable<T>): T[] {
  return values.map((val) => new cls(val));
}
