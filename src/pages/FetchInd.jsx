import React from 'react';
import { fetchIndData } from '../app/Api';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function FetchInd() {
  const { id } = useParams();

  const { data = {}, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchIndData(id),
    enabled: !!id,
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
      <h2>Post {id}</h2>
      <h3>{data?.title}</h3>
        <p>{data?.body}</p>
        
    </>
  );
}

export default FetchInd;
