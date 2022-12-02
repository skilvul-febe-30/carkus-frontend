import axios from "axios";

export const GET_USER = "GET_USER";
export const PUT_USER = "PUT_USER";

function sucsessGet(params) {
  return {
    type: GET_USER,
    payload: params,
  };
}

export const getUser = () => {
  return async (dispatch) => {
    const result = await axios(
      "https://634840db0484786c6e95e220.mockapi.io/Data"
    );
    dispatch(sucsessGet(result.data));
  };
};

export const postUser = (data) => {
  return async (dispatch) => {
    axios
      .post("https://634840db0484786c6e95e220.mockapi.io/Data", data)
      .then((res) => {
        alert("Akun berhasil dibuat");
      });
  };
};

export const putUser = (data) => {
  const uId = localStorage.getItem('id')
  return async (dispatch) => {
    axios
      .put(`https://634840db0484786c6e95e220.mockapi.io/Data/${uId}`, {
        method: "PUT",
        body: JSON.stringify(data),
      })
      .then((result) => {
        dispatch({
          type : PUT_USER,
          payload: {
              data: result.data,
          }
      })
      alert("Akun berhasil diubah")
      });
  };
};
