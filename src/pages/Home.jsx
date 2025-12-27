import React from 'react'

function Home() {
  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-12">
     <div className="mb-4 container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
            Infinite Scroll & Data Management Application
          </h2>
          <p className="mt-2 text-gray-900 text-[1.2rem] font-bold">
            React | TanStack React Query | REST APIs
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-[1.2rem]">
          {/* Description */}
          <p className="text-gray-800 leading-relaxed">
            Developed a modern <span className="font-semibold text-orange-500">React-based web application</span> 
            implementing server-state management using{" "}
            <span className="font-semibold text-orange-500">TanStack React Query</span>. 
            The project efficiently handles API-driven data fetching, pagination,
            mutations, and infinite scrolling with a strong focus on performance
            and user experience.
          </p>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-[1.2rem]">
              Key Features & Implementation
            </h3>

            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Implemented infinite scrolling using{" "}
                <span className="font-medium">useInfiniteQuery</span> and the
                Intersection Observer API to dynamically load GitHub user data.
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Integrated REST APIs (GitHub API & JSONPlaceholder API) using
                Axios for asynchronous data fetching.
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Utilized React Query hooks such as{" "}
                <span className="font-medium">
                  useQuery, useInfiniteQuery, useMutation, and useQueryClient
                </span>{" "}
                for caching, background updates, pagination, and optimistic UI updates.
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Implemented post deletion functionality using{" "}
                <span className="font-medium">useMutation</span> with automatic
                cache synchronization.
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Leveraged{" "}
                <span className="font-medium">keepPreviousData</span> to maintain
                smooth UI transitions during pagination.
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Built reusable and maintainable components using React Hooks
                (<span className="font-medium">useState, useEffect</span>).
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Designed a responsive, modern UI using{" "}
                <span className="font-medium">Tailwind CSS</span>.
              </li>

              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                Implemented seamless navigation using{" "}
                <span className="font-medium">React Router (NavLink)</span>.
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React JS",
                "Tailwind CSS",
                "TanStack React Query",
                "Axios",
                "REST APIs",
                "React Router",
                "Intersection Observer",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-950 text-orange-500 text-[1.2rem]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home