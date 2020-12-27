/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import axios from "axios"

const apiUrl = "http://127.0.0.1:8000/api"

export async function getUserAxios(token, uuid, path) {
  return axios({
    method: "GET",
    url: `${apiUrl}${path}${uuid}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
