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


    //! mutation function for delete
  const updateMutation = useMutation({  
    mutationFn: (id)=> updatePost(id),
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
      <h2 className="text-gray-900 text-3xl font-bold pb-4">Posts</h2>
      <ul>
        {data.map(({ id, title, body }) => (
                <li key={id}className="border-l-6 mb-4 border-orange-600 bg-white dark:bg-slate-900 rounded-md shadow-sm px-4 py-5 lg:px-10 lg:py-8">

            <NavLink to={`/fetchRQ/${id}`}>
              <div className="text-2xl w-[60px] h-[60px] flex justify-center items-center rounded-full text-white font-semibold bg-slate-800 uppercase ">
            {id}</div>

              <h4 className="text-orange-600 text-2xl font-bold uppercase">
                {title}
              </h4>
              <p className="text-gray-600 text-xl mt-4">{body}</p>
            </NavLink>

            <div className="pt-5 flex justify-end">
               <NavLink to={`/fetchRQ/${id}`}
          className="bg-green-600 hover:bg-green-700  
          text-white px-2 py-1 cursor-pointer rounded-bl-sm rounded-tl-sm  ">View</NavLink>
          <button 
          className="bg-gray-600 hover:bg-gray-700 
          text-white px-2 py-1 cursor-pointer ">Edit</button>
          <button
          className="bg-red-600 hover:bg-red-700 
          text-white px-2 py-1 cursor-pointer rounded-br-sm rounded-tr-sm"
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
