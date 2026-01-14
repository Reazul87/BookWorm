// import VideoCard from "@/components/Cards/VideoCard";
// import { videos } from "@/data/Video";
// import React from "react";

// const page = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <header className="mb-10 text-center">
//         <h1 className="text-4xl font-extrabold">
//           2026 Reading Recommendations
//         </h1>
//         <p className="text-gray-500">
//           Curated reviews and tips for your next read.
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {videos.map((vid, index) => (
//           <VideoCard key={index} video={vid} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

"use client"
import React, { useState } from "react";
import { videos } from "@/data/Video";
import VideoCard from "@/components/Cards/VideoCard";

const LibraryPage = ({ isAuthenticated = true, isAdmin=true }) => {
  const [filter, setFilter] = useState("All");

  // 1. Protection Logic
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center p-8 border border-gray-800 rounded-2xl bg-gray-900">
          <h2 className="text-2xl font-bold mb-4">Locked Content</h2>
          <p className="text-gray-400 mb-6">
            Please log in to access the 2026 Reading Library.
          </p>
          <button className="bg-indigo-600 px-6 py-2 rounded-lg font-bold">
            Login to Access
          </button>
        </div>
      </div>
    );
  }

  // 2. Filter Logic
  const categories = ["All", "Recommendation", "Review", "Tips"];
  const filteredVideos =
    filter === "All"
      ? videos
      : videos.filter((v) => v.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2 uppercase italic text-indigo-500">
            The Reading Vault
          </h1>
          <p className="text-gray-400 max-w-md">
            12 hand-picked videos to master your reading habits and discover
            your next 5-star book in 2026.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Video Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </main>

      {/* Admin Quick-Link */}
      {isAdmin && (
        <div className="fixed bottom-8 right-8">
          <button className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-xl hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
            <span>Manage Content</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;