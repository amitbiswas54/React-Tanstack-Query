import axios from "axios";


const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const fetchPosts =(pageNumber)=>{
    return api.get(`/posts?_start=${pageNumber}&_limit=3`)
}


export const fetchIndData = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`); // ✅ correct endpoint
    return res.data;                           // ✅ correct property
  } catch (error) {
    throw error;                               // ✅ required for React Query
  }
};


export const deletePost = async (id)=>{ 
 try {
    const res = await api.delete(`/posts/${id}`); // ✅ correct endpoint
    return res.data;                           // ✅ correct property
  } catch (error) {
    throw error;                               // ✅ required for React Query
  }

}