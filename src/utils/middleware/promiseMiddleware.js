export default function promiseMiddleware() {
  return next => action => {
    const { promise, types, ...rest } = action;

    if (!promise) return next(action)

    const [REQUEST, SUCCESS, FAILURE] = types

    next({ ...rest, type: REQUEST });
    return promise
      .then(res => {
        next({ ...rest, payload: res.body, type: SUCCESS })
        return true
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE })
        console.log(error)
        return false
      })
  }
}
