import { keepPreviousData, QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../app/Api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function FetchRQ() {
  const [pageNumber, setPageNumber] = useState(0);
const queryClient = useQueryClient();

  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: async () => {
      const res = await fetchPosts(pageNumber);
      return res.data;
    },
    placeholderData:keepPreviousData,
    // staleTime: 10000,
    // gcTime: 60000,
  });

  //! mutation function for delete
  const deleteMutation = useMutation({  
    mutationFn: (id)=> deletePost(id),
    onSuccess:(conformationMsg, id) =>{
      // queryKey: ["posts", pageNumber], --- this is refer from useQuery
      queryClient.setQueryData(["posts", pageNumber], (current)=>{
        return current?.filter((post)=> post.id !== id)
      })
    }  
  });



  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    return (
      <p>
        Error: {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    );
  }


  
   

  return (
    <>
      <h2 className="text-gray-900 text-3xl font-bold">Posts</h2>
      <ul>
        {data.map(({ id, title, body }) => (
          <li key={id} className="my-4 py-5 border-b border-gray-300">
            <NavLink to={`/fetchRQ/${id}`}>
            <h2>{id}</h2>
              <h4 className="text-orange-600 text-2xl font-bold uppercase">
                {title}
              </h4>
              <p className="text-gray-600 text-xl">{body}</p>
            </NavLink>

            <div className="pt-5 flex justify-end">
          <button 
          className="bg-gray-600 hover:bg-gray-700 me-4 
          text-white px-4 py-1 cursor-pointer rounded-sm">Edit</button>
          <button
          className="bg-orange-600 hover:bg-orange-700 
          text-white px-4 py-1 cursor-pointer rounded-sm"
          onClick={()=>deleteMutation.mutate(id)}>Delete</button>
        </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <button
        disabled={pageNumber === 0 ? true: false}
        onClick={()=>setPageNumber((prev)=> prev -3)}
         className="bg-gray-700 hover:bg-orange-700 text-white px-4 py-1 cursor-pointer rounded-sm">Prev</button>
        <div className="w-10 text-center">{(pageNumber/3)+1}</div>
        <button
        disabled={data.length < 3}
         onClick={()=>setPageNumber((prev)=> prev +3)}
         className="bg-gray-700 hover:bg-orange-700 text-white px-4 py-1  cursor-pointer rounded-sm">Next</button>
      </div>
    </>
  );
}

export default FetchRQ;
