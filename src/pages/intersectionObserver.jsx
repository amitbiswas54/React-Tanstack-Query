import React, { use, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { infiniteScroll } from "../app/Api";
import { useInView } from "react-intersection-observer";

function intersectionObserver() {
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
// const handelScroll = () => {
//    const bottom =window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -50;
//    if(bottom && hasNextPage && !isFetchingNextPage){
//     fetchNextPage();
//    }  
   
//     }


const {ref, inView,} = useInView({
    threshold:0,
});




  useEffect(() => {
   if(inView && hasNextPage ){
    fetchNextPage();
   }
  }, [inView, fetchNextPage, hasNextPage]);  




  return (
    <>
     <section className="w-screen py-10 px-4 sm:px-6 lg:px-12">
     <div className="mb-4 container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold pb-4"> Intersection Observer</h2>

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
   <div ref={ref} className="flex justify-center my-4">    
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </div>
      </div>
        </section>
    </>
  );
}

export default intersectionObserver;


