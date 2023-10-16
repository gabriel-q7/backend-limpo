export default interface UseCase<S, E> {
    execute(data: S): Promise<E>
}