import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { infiniteScroll } from "../app/Api";

function InfScroll() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["infiniteScroll"],
    queryFn: infiniteScroll,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });

  return (
    <>
      <h2>Infinite Scroll</h2>

      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.map((user) => (
            <div key={user.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src={user.avatar_url} alt={user.login} width={50} />
              <p>{user.login}</p>
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
    </>
  );
}

export default InfScroll;
