import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FetchRQ from "./pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchInd from "./pages/FetchInd";
import InfScroll from "./pages/InfScroll";
import IntersectionObserver from "./pages/intersectionObserver";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home/> },
        { path: "about", element: <About/> },  
        { path: "fetchRQ", element: <FetchRQ/> },
         { path: "fetchRQ/:id", element: <FetchInd/> },
           { path: "inf-scroll", element: <InfScroll/> },
             { path: "intersection-observer", element: <IntersectionObserver/> },
      ],
    },
  ],
  {
    basename: "/React-Tanstack-Query", // ✅ GitHub Pages FIX
  }
);

function App() {

  const queryClient = new QueryClient()

  return (
  <QueryClientProvider client={queryClient} >
          <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} />
          </QueryClientProvider>);
}

export default App;
