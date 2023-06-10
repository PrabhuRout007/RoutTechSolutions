import axios from "axios";

let getCommentsById = async (id) => {
  let comments = null
  try {
    comments = await API.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    // console.log(response)
  } catch (error) {
     console.log(error)
  }
  return comments
}

export default getCommentsById;
