import React from 'react';
import { fetchIndData } from '../app/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function FetchInd() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <section className="w-screen py-10 px-4 sm:px-6 lg:px-12">
        <div className="mb-4 container mx-auto">
    <div className="border-l-6 border-orange-600 bg-white dark:bg-slate-900 rounded-md shadow-sm px-4 py-5 lg:px-10 lg:py-8">
 
  <div className="text-2xl w-[60px] h-[60px] flex justify-center items-center rounded-full bg-orange-600 font-semibold text-white uppercase ">
   {id}
  </div>

  <h3 className="mt-2 text-xl uppercase lg:text-2xl font-bold text-slate-800 dark:text-white">
    {data?.title}
  </h3>

  <p className="mt-4 text-slate-400 dark:text-slate-300 leading-relaxed">
    {data?.body}
  </p>
   <button
        onClick={() => navigate(-1)}
        className="mb-4 mt-4 inline-flex items-center gap-2 cursor-pointer font-medium text-orange-600 hover:text-white"
      >
        ← Back
      </button>
</div>
</div>
</section>
    </>
  );
}

export default FetchInd;
