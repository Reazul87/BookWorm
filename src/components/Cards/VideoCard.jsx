import React from "react";

const VideoCard = ({ video }) => {
  // Extract ID for the thumbnail and embed
  const videoId = video.url.split("v=")[1]?.split("&")[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-gray-800">
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {video.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1 group-hover:text-indigo-400 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-500 text-xs flex justify-between items-center">
          <span>{video.creator}</span>
          <span className="bg-gray-800 px-2 py-0.5 rounded text-[10px]">
            {video.tags[0]}
          </span>
        </p>
      </div>

      {/* Action: Open in Modal or Embed (Simplified link for now) */}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">Play Video</span>
      </a>
    </div>
  );
};

export default VideoCard;
