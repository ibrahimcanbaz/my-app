const LOGIN="LOGIN";
const GET_DATA="GET_DATA";
const DO_SEARCH="DO_SEARCH";
const HOUSES_LOADED="HOUSES_LOADED";
const MAIN_URL="http://localhost:3001/";

export default function (state = {uid:'AASW',loginStatus:false,list:[]}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, loginStatus: action.payload,token:action.token}
        case GET_DATA:
            return {...state, list: action.payload}

        default:
            return state
    }
}


export const loginAction2 = (data) => (dispatch) => {
      dispatch({
        type: LOGIN,
        payload: true,
        token:data,
      });
}

export const loginAction = (data,history) => (dispatch) => {
  return fetch(MAIN_URL+'login',{
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
    })
    .then(res => {
      return res.json();
    })
    .then(houses => {
      dispatch({
        type: LOGIN,
        payload: true,
        token:data,
      });
      history.push('/hello')
    })
}
export const fetchData = (history) => (dispatch,getState) => {
  return fetch(MAIN_URL+'list',{
  method: "POST",
  body: JSON.stringify(getState().mainReducer.token),
  headers: {
    "Content-Type": "application/json"
  }})
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({
        type: GET_DATA,
        payload: data
      });
    }).catch((e)=>{
      //if unaouthorized or other
      history.push('/')
    })
}

export const search = (data,history) => (dispatch,getState) => {
  return fetch(MAIN_URL+'searchAnnouncements',{
  method: "POST",
  body: JSON.stringify({uid:'ASAbXDER'}),
  headers: {
    "Content-Type": "application/json"

  }}).then(res => {
      return res.json();
    })
    .then(results => {
      dispatch({
        type: DO_SEARCH,
        data:data,
        items: results
      });

    })
}
