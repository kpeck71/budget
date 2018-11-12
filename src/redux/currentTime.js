import * as types from './types'

export const initialState = {
  currentTime: new Date().toString(),
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_NEW_TIME:
      return { ...state, currentTime: action.payload }
    default:
      return state;
  }
}

const host = 'https://andthetimeis.com'
export const fetchNewTime = ({ timezone = 'pst', str='now'}) => ({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString(),
  meta: {
    type: 'api',
    url: host + '/' + timezone + '/' + str + '.json'
  }
})


export default reducer;
