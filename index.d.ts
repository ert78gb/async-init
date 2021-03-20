export default function asyncInit(): <T>(fn: () => Promise<T>) => Promise<T>;
