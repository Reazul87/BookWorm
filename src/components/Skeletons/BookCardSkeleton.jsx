const BookCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full animate-pulse">
      {/* Book Cover Skeleton */}
      <div className="relative aspect-[3/4] bg-stone-200" />

      {/* Book Info Skeleton */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title line */}
        <div className="h-5 bg-stone-200 rounded-md w-3/4 mb-3" />

        {/* Author line */}
        <div className="flex items-center mb-4">
          <div className="w-3.5 h-3.5 bg-stone-200 rounded-full mr-2" />
          <div className="h-3 bg-stone-200 rounded-md w-1/2" />
        </div>

        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          {/* Rating Skeleton */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-stone-200 rounded-full" />
            <div className="h-4 bg-stone-200 rounded-md w-8" />
          </div>

          {/* Pages Skeleton */}
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 bg-stone-200 rounded-full" />
            <div className="h-3 bg-stone-200 rounded-md w-12" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-4 w-full h-9 bg-stone-200 rounded-lg" />
      </div>
    </div>
  );
};

export default BookCardSkeleton;
