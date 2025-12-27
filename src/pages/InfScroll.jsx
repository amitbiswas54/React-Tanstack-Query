import React, { use, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { infiniteScroll } from "../app/Api";

function InfScroll() {
  const { 
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage    
  } = useInfiniteQuery({
    queryKey: ["infiniteScroll"],
    queryFn: infiniteScroll,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
const handelScroll = () => {
   const bottom =window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -50;
   if(bottom && hasNextPage && !isFetchingNextPage){
    fetchNextPage();
   }  
   
    }

  useEffect(() => {
    window.addEventListener('scroll', handelScroll);
    return  () => window.removeEventListener('scroll', handelScroll);
  }, [hasNextPage]);  


  // if (status ==='loading') {
  //   return (<div className="flex min-h-screen items-center justify-center bg-gray-50">
  //     <div className="flex flex-col items-center gap-4 rounded-lg bg-white px-6 py-5 shadow-md">
  //       {/* Spinner */}
  //       <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

  //       {/* Text */}
  //       <p className="text-sm font-medium text-gray-600">
  //         Loading, please wait...
  //       </p>
  //     </div>
  //   </div>);
  // } 
  
  // if(status ==='error'){
  //   return <div>Error fetching data.</div>;
  // }

  return (
    <>
      <section className="w-screen py-10 px-4 sm:px-6 lg:px-12">
       
    <div className="mb-4 container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold pb-4">Infinite Scroll</h2>

      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.map((user) => (
           <div
  key={user.id}
  className="flex items-center gap-4 p-4 bg-gray-900 mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
>
  <img
    src={user.avatar_url}
    alt={`${user.login} avatar`}
    className="w-24 h-24 rounded-full object-cover"
    loading="lazy"
  />

  <div className="flex flex-col">
    <p className="text-orang-900 text-orange-700 font-semibold capitalize">
      {user.login}
    </p>
    <span className="text-sm text-white">
      GitHub User
    </span>
  </div>
</div>
          ))}
        </div>
      ))}

      {/* Load More Button (for now) */}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
      </div>
      </section>
    </>
  );
}

export default InfScroll;
