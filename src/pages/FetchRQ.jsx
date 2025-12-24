import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../app/Api";

function FetchRQ() {


  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetchPosts();
      return res.data; // ✅ only data
    },
   // gcTime:1000,
   // staleTime:10000
   refetchInterval:1000,
   refetchIntervalInBackground:true
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2 className="text-gray-900 text-3xl font-bold">Posts</h2>
      <ul>
        {data.map(({ id, title, body }) => (
          <li key={id} className="my-4 py-5 border-b border-gray-300">
            <h4 className="text-orange-600 text-2xl font-bold uppercase">{title}</h4>
            <p className="text-gray-600 text-xl  ">{body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchRQ;
