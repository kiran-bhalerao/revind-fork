export type RequiredKey<T, K extends PropertyKey = PropertyKey> = Required<
    Pick<T, Extract<keyof T, K>>
> &
    Omit<T, K> extends infer O
    ? { [P in keyof O]: O[P] }
    : never;
