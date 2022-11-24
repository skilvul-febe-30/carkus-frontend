import axios from "axios"

export const GET_KAMPUS = 'GET_KAMPUS'
export const FETCH_START = 'GET_TODO'

function fetchStart (){
    return {
        type: FETCH_START
    }
}

function sucsessGet(params){
    return{
        type: GET_KAMPUS,
        payload: params
    }
}

export const getKampus = () => {
    return async(dispatch) => {
        dispatch(fetchStart())

        const result = await axios("https://6350376e78563c1d82bca248.mockapi.io/kampus")
        dispatch(sucsessGet(result.data))
    }

}