import * as types from 'constants/IndexTypes'
import request from 'superagent'

export function fetchList(id) {
  const additionalParams = typeof id === 'number' ? id : ''
  const url = `https://jsonplaceholder.typicode.com/comments/${additionalParams}`


  return {
    types: [types.BEGIN_FETCH, types.FINISH_FETCH, types.FAILURE_FETCH],
    promise: request.get(url)
  }
}
