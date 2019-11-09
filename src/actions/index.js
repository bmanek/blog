import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceHolder.get('/posts')

// .data is the only part of response we actually want
    dispatch({ type: "FETCH_POSTS", payload: response.data })
  }
}

// syntax below is the naive implementation of memoization
export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`)

  dispatch({ type: "FETCH_USER", payload: response.data })
})
