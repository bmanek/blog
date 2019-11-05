import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceHolder.get('/posts')

// .data is the only part of response we actually want
    dispatch({ type: "FETCH_POSTS", payload: response.data })
  }
}

// syntax below is same as above, just cleaned up a little
export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`)

  dispatch({ type: "FETCH_USER", payload: response.data })
}
