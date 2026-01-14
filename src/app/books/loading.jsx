"use client";
import BookCardSkeleton from "@/components/Skeletons/BookCardSkeleton";


export default function BookLoading() {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <BookCardSkeleton key={i} />
      ))}
    </div>
  );
}
