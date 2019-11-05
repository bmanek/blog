import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceHolder.get('/posts')

// .data is the only part of response we actually want
    dispatch({ type: "FETCH_POSTS", payload: response.data })
  }
}
