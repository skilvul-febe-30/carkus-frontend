import axios from "axios";


export const GET_THREAD = "GET_THREAD";
export const FETCH_START = "FETCH_START";


function fetchStartThread() {
  return {
    type: FETCH_START,
  };
}

function sucsessGetThread(params) {
  return {
    type: GET_THREAD,
    payload: params,
  };
}

export const getThread = (id) => {
  return async (dispatch) => {
    dispatch(fetchStartThread());

    const result = await axios(
      `https://6350376e78563c1d82bca248.mockapi.io/kampus/${id}/diskusi`
    );

    dispatch(sucsessGetThread(result.data));
  };
};

export const uploadThread = (data, id) => {
  return async (dispatch) => {
    axios
    .post(
      `https://6350376e78563c1d82bca248.mockapi.io/kampus/${id}/diskusi`,
      data
    )
    .then((res) => {
      dispatch(getThread(id))
    });
  }
};
